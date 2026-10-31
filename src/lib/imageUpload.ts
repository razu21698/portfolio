'use client';

export interface ProcessedImageResult {
  dataUrl: string;
  sizeKb: number;
  dimensions: string;
  format: string;
}

/**
 * Client-side image processor that reads an uploaded File,
 * compresses/resizes it onto an HTML5 Canvas, and produces
 * an optimized Data URL (~50KB - 120KB) perfect for web performance
 * and localStorage without hitting quota limits.
 */
export function processImageFile(
  file: File,
  maxWidth = 1200,
  maxHeight = 800,
  quality = 0.82
): Promise<ProcessedImageResult> {
  return new Promise((resolve, reject) => {
    // If it's an SVG file, keep as lossless vector
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve({
          dataUrl,
          sizeKb: Math.max(1, Math.round(file.size / 1024)),
          dimensions: 'Vector SVG',
          format: 'SVG',
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        // Maintain aspect ratio while bounding within maxWidth/maxHeight
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          const fallbackUrl = event.target?.result as string;
          resolve({
            dataUrl: fallbackUrl,
            sizeKb: Math.round(file.size / 1024),
            dimensions: `${width} × ${height}`,
            format: file.type.replace('image/', '').toUpperCase(),
          });
          return;
        }

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Prefer modern WebP, fallback to JPEG
        let dataUrl: string;
        let format = 'WebP';
        try {
          dataUrl = canvas.toDataURL('image/webp', quality);
          // If browser doesn't support webp, it falls back to png
          if (!dataUrl.startsWith('data:image/webp')) {
            dataUrl = canvas.toDataURL('image/jpeg', quality);
            format = 'JPEG';
          }
        } catch {
          dataUrl = canvas.toDataURL('image/jpeg', quality);
          format = 'JPEG';
        }

        const approxSizeKb = Math.round((dataUrl.length * 3) / 4 / 1024);

        resolve({
          dataUrl,
          sizeKb: approxSizeKb,
          dimensions: `${width} × ${height}px`,
          format,
        });
      };

      img.onerror = () => {
        const fallback = event.target?.result as string;
        resolve({
          dataUrl: fallback,
          sizeKb: Math.round(file.size / 1024),
          dimensions: 'Custom',
          format: file.type.replace('image/', '').toUpperCase(),
        });
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
