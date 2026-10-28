'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number; // px
  duration?: number; // ms
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 600,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [once]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'fade':
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
}

