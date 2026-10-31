'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Plus,
  Trash2,
  Edit3,
  Eye,
  Copy,
  Download,
  RefreshCw,
  LogOut,
  Lock,
  Search,
  Check,
  ExternalLink,
  Star,
  Layers,
  Code,
  Sparkles,
  AlertTriangle,
  ArrowLeft,
  X,
  ChevronRight,
  Globe,
  SlidersHorizontal,
  FolderGit2,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  FileImage,
} from 'lucide-react';
import { Project, ProjectCategory } from '@/types';
import {
  getStoredProjects,
  saveStoredProjects,
  addProject,
  updateProject,
  deleteProject,
  resetToDefaultProjects,
  isAdminAuthenticated,
  setAdminAuthenticated,
  checkAdminPasscode,
  exportToTypeScriptCode,
  downloadFile,
} from '@/lib/projectStorage';
import { processImageFile, ProcessedImageResult } from '@/lib/imageUpload';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/projects/ProjectCard';

const CATEGORY_MAP: Record<Project['category'], string> = {
  wordpress: 'Premium Custom WordPress',
  laravel: 'Laravel Web Application',
  ecommerce: 'WooCommerce & eCommerce',
  'performance-seo': 'Core Web Vitals & Technical SEO',
  react: 'React & Next.js Front-End',
};

const COMMON_TECHS = [
  'WordPress',
  'Laravel',
  'PHP 8',
  'WooCommerce',
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'MySQL',
  'REST API',
  'ACF Pro',
  'Docker',
  'Nginx',
  'Redis',
  'Core Web Vitals',
];

const PRESET_IMAGES = [
  { label: 'Cambridge Audio (WP)', path: '/projects/cambridge-car-audio.svg' },
  { label: 'STC360 LMS (Laravel)', path: '/projects/stc360-lms.svg' },
  { label: 'BD Budget Beauty (Woo)', path: '/projects/bd-budget-beauty.svg' },
  { label: 'Malomatia (Enterprise)', path: '/projects/malomatia.svg' },
  { label: 'DBL Group (Corporate)', path: '/projects/dbl-group.svg' },
  { label: 'POS System (Enterprise)', path: '/projects/pos-system.svg' },
  { label: 'Singer BD (Maintenance)', path: '/projects/singer-bd.svg' },
  { label: 'Auko-Tex (Industrial)', path: '/projects/auko-tex.svg' },
  { label: 'Ispahani (Corporate)', path: '/projects/ispahani-bd.svg' },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Form State
  const initialFormState: Project = {
    slug: '',
    title: '',
    tagline: '',
    client: '',
    category: 'wordpress',
    categoryLabel: CATEGORY_MAP['wordpress'],
    role: 'Lead Full-Stack Developer',
    timeline: '2024 - 2025',
    featured: true,
    liveUrl: '',
    repoUrl: '',
    coverImage: '/projects/cambridge-car-audio.svg',
    galleryImages: ['/projects/cambridge-car-audio.svg'],
    summary: '',
    challenge: '',
    solution: '',
    architectureNotes: '',
    technologies: ['WordPress', 'PHP 8', 'ACF Pro', 'Tailwind CSS'],
    results: [
      { metric: '< 0.9s', label: 'First Contentful Paint', verified: true },
      { metric: '98/100', label: 'Mobile Performance', verified: true },
    ],
    keyHighlights: [
      'Engineered bespoke architecture adhering strictly to modern standards.',
      'Optimized performance with zero page-builder bloat and sub-second renders.',
    ],
  };

  const [formData, setFormData] = useState<Project>(initialFormState);
  const [techInput, setTechInput] = useState('');

  // Image Upload State
  const [coverSourceTab, setCoverSourceTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [isProcessingCover, setIsProcessingCover] = useState(false);
  const [coverDragActive, setCoverDragActive] = useState(false);
  const [coverMeta, setCoverMeta] = useState<ProcessedImageResult | null>(null);

  const [galleryDragActive, setGalleryDragActive] = useState(false);
  const [isProcessingGallery, setIsProcessingGallery] = useState(false);

  const handleCoverFileSelect = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP, SVG)');
      return;
    }
    try {
      setIsProcessingCover(true);
      const res = await processImageFile(file);
      setFormData((prev) => ({
        ...prev,
        coverImage: res.dataUrl,
        galleryImages:
          prev.galleryImages.length === 0 || prev.galleryImages[0]?.startsWith('/projects/')
            ? [res.dataUrl]
            : prev.galleryImages,
      }));
      setCoverMeta(res);
    } catch (err) {
      console.error('Failed to process image:', err);
      alert('Could not process this image file. Please try another format.');
    } finally {
      setIsProcessingCover(false);
    }
  };

  const handleGalleryFilesSelect = async (files: FileList | File[]) => {
    const validFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (validFiles.length === 0) return;

    try {
      setIsProcessingGallery(true);
      const processed = await Promise.all(validFiles.map((f) => processImageFile(f)));
      const newUrls = processed.map((p) => p.dataUrl);
      setFormData((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, ...newUrls],
      }));
    } catch (err) {
      console.error('Failed to process gallery images:', err);
      alert('Could not process one or more gallery images.');
    } finally {
      setIsProcessingGallery(false);
    }
  };

  const handleRemoveGalleryImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== indexToRemove),
    }));
  };

  useEffect(() => {
    setIsAuthenticated(isAdminAuthenticated());
    setProjectsList(getStoredProjects());

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Project[]>;
      if (customEvent.detail) {
        setProjectsList(customEvent.detail);
      } else {
        setProjectsList(getStoredProjects());
      }
    };

    window.addEventListener('projects_updated', handleUpdate);
    return () => window.removeEventListener('projects_updated', handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkAdminPasscode(passcode)) {
      setAdminAuthenticated(true);
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Default is "razu2025"');
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setFormData(initialFormState);
    setEditingSlug(null);
    setCoverMeta(null);
    setCoverSourceTab('upload');
    setIsFormOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (project: Project) => {
    setFormData({ ...project });
    setEditingSlug(project.slug);
    setCoverMeta(null);
    setCoverSourceTab(
      project.coverImage.startsWith('data:')
        ? 'upload'
        : project.coverImage.startsWith('/projects/')
        ? 'presets'
        : 'url'
    );
    setIsFormOpen(true);
  };

  // Delete project
  const handleDelete = (slug: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteProject(slug);
    }
  };

  // Toggle Featured
  const handleToggleFeatured = (slug: string) => {
    const target = projectsList.find((p) => p.slug === slug);
    if (!target) return;
    updateProject(slug, { ...target, featured: !target.featured });
  };

  // Auto-generate slug from title
  const handleTitleChange = (newTitle: string) => {
    const autoSlug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: editingSlug ? prev.slug : autoSlug,
    }));
  };

  // Category change
  const handleCategoryChange = (cat: Project['category']) => {
    setFormData((prev) => ({
      ...prev,
      category: cat,
      categoryLabel: CATEGORY_MAP[cat] || cat,
    }));
  };

  // Add technology tag
  const handleAddTech = (tech: string) => {
    const trimmed = tech.trim();
    if (!trimmed || formData.technologies.includes(trimmed)) return;
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, trimmed],
    }));
    setTechInput('');
  };

  const handleRemoveTech = (techToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== techToRemove),
    }));
  };

  // Result metrics
  const handleAddResult = () => {
    setFormData((prev) => ({
      ...prev,
      results: [...prev.results, { metric: '', label: '', verified: true }],
    }));
  };

  const handleUpdateResult = (index: number, field: string, value: any) => {
    setFormData((prev) => {
      const updated = [...prev.results];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, results: updated };
    });
  };

  const handleRemoveResult = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      results: prev.results.filter((_, i) => i !== index),
    }));
  };

  // Key highlights
  const handleAddHighlight = () => {
    setFormData((prev) => ({
      ...prev,
      keyHighlights: [...prev.keyHighlights, ''],
    }));
  };

  const handleUpdateHighlight = (index: number, value: string) => {
    setFormData((prev) => {
      const updated = [...prev.keyHighlights];
      updated[index] = value;
      return { ...prev, keyHighlights: updated };
    });
  };

  const handleRemoveHighlight = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      keyHighlights: prev.keyHighlights.filter((_, i) => i !== index),
    }));
  };

  // Save project
  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please provide a project title');
      return;
    }

    if (editingSlug) {
      updateProject(editingSlug, formData);
    } else {
      addProject(formData);
    }
    setIsFormOpen(false);
  };

  // Copy code
  const handleCopyCode = () => {
    const code = exportToTypeScriptCode(projectsList);
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // Download projects.ts
  const handleDownloadCode = () => {
    const code = exportToTypeScriptCode(projectsList);
    downloadFile('projects.ts', code, 'text/typescript');
  };

  // Filtered list
  const filteredProjects = projectsList.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ----------------------------------------------------
  // GATED LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#0E0E12] text-white">
        <div className="w-full max-w-md bg-[#16161D] border border-[#2B2B38] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4FF00]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#22222E] border border-[#3A3A4C] flex items-center justify-center mx-auto text-[#D4FF00] shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] font-bold">
              Engineering Console
            </span>
            <h1 className="text-2xl font-bold font-['Montserrat'] tracking-tight">
              Portfolio Admin Access
            </h1>
            <p className="text-xs text-[#8A8A93] font-['Lato']">
              Manage, add, and publish case studies for Md Razib Ahmed Razu.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="passcode"
                className="block text-xs font-mono text-[#BCBCBF] uppercase tracking-wider mb-2 font-medium"
              >
                Admin Passcode
              </label>
              <input
                id="passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full bg-[#0E0E12] border border-[#2B2B38] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A5A66] focus:outline-none focus:border-[#D4FF00] transition-colors font-mono"
                autoFocus
              />
              <p className="text-[11px] text-[#71717A] mt-2 flex items-center justify-between">
                <span>Default passcode: <code className="text-[#D4FF00] font-mono">razu2025</code></span>
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#D4FF00] hover:bg-[#bfe600] text-[#141413] font-bold text-xs uppercase tracking-wider font-['Montserrat'] transition-colors shadow-lg cursor-pointer"
            >
              Authenticate & Enter
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#23232E] text-center">
            <Link
              href="/"
              className="text-xs text-[#8A8A93] hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // AUTHENTICATED DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#141413]">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 bg-[#141413] text-white border-b border-[#282828] shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-mono text-[#A0A09B] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Exit to Website</span>
            </Link>
            <div className="h-4 w-px bg-[#333333]" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-bold font-['Montserrat'] tracking-tight">
                Project CMS Dashboard
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#262626] text-[#D4FF00] border border-[#3A3A3A]">
                Local & Code Sync
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsExportOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2E2E2E] border border-[#3A3A3A] text-xs font-mono text-white transition-colors cursor-pointer"
              title="Export to TypeScript code for GitHub repository"
            >
              <Code className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span className="hidden md:inline">Export Code</span>
            </button>

            <button
              type="button"
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D4FF00] hover:bg-[#c2eb00] text-[#141413] text-xs font-bold font-['Montserrat'] uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Project</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="p-2 rounded-lg text-[#888880] hover:text-white hover:bg-[#242424] transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dashboard Banner & Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#E4E4DF] shadow-xs">
            <div className="flex items-center justify-between text-[#5F5F58] mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Total Projects</span>
              <Layers className="w-4 h-4 text-[#141413]" />
            </div>
            <div className="text-3xl font-extrabold font-['Montserrat'] text-[#141413]">
              {projectsList.length}
            </div>
            <p className="text-[11px] text-[#8C8C84] mt-1 font-mono">
              Live in active catalog
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E4E4DF] shadow-xs">
            <div className="flex items-center justify-between text-[#5F5F58] mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Featured on Home</span>
              <Star className="w-4 h-4 text-[#D97706]" />
            </div>
            <div className="text-3xl font-extrabold font-['Montserrat'] text-[#141413]">
              {projectsList.filter((p) => p.featured).length}
            </div>
            <p className="text-[11px] text-[#8C8C84] mt-1 font-mono">
              Appearing in dual carousel
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E4E4DF] shadow-xs">
            <div className="flex items-center justify-between text-[#5F5F58] mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">WordPress Core</span>
              <span className="text-xs font-bold text-[#2563EB]">WP</span>
            </div>
            <div className="text-3xl font-extrabold font-['Montserrat'] text-[#141413]">
              {projectsList.filter((p) => p.category === 'wordpress' || p.category === 'ecommerce').length}
            </div>
            <p className="text-[11px] text-[#8C8C84] mt-1 font-mono">
              Themes, Plugins & Woo
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E4E4DF] shadow-xs">
            <div className="flex items-center justify-between text-[#5F5F58] mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Laravel & Apps</span>
              <span className="text-xs font-bold text-[#DC2626]">LAR</span>
            </div>
            <div className="text-3xl font-extrabold font-['Montserrat'] text-[#141413]">
              {projectsList.filter((p) => p.category === 'laravel' || p.category === 'react').length}
            </div>
            <p className="text-[11px] text-[#8C8C84] mt-1 font-mono">
              Web apps & SaaS systems
            </p>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#E4E4DF] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#8C8C84] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, client, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-[#141413] placeholder-[#8C8C84] focus:outline-none focus:border-[#141413] transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {['all', 'wordpress', 'laravel', 'ecommerce', 'react'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141413] text-white font-bold'
                    : 'bg-[#F7F7F4] text-[#5F5F58] hover:text-[#141413]'
                }`}
              >
                {cat === 'all' ? 'All' : cat.toUpperCase()}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                if (confirm('Reset projects back to default data? Any unsaved local edits will be cleared.')) {
                  resetToDefaultProjects();
                }
              }}
              className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#8C8C84] hover:text-red-600 hover:bg-red-50 transition-colors ml-auto cursor-pointer"
              title="Reset to default static projects"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Table / Grid */}
        <div className="bg-white rounded-xl border border-[#E4E4DF] shadow-xs overflow-hidden">
          <div className="p-4 border-b border-[#E4E4DF] flex items-center justify-between">
            <h2 className="text-base font-bold font-['Montserrat'] text-[#141413] flex items-center gap-2">
              <span>Case Studies Catalog</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F7F7F4] text-[#5F5F58] border border-[#E4E4DF]">
                {filteredProjects.length}
              </span>
            </h2>

            <button
              type="button"
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#141413] hover:underline cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Case Study</span>
            </button>
          </div>

          <div className="divide-y divide-[#E4E4DF]">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center text-[#8C8C84] space-y-3 font-mono text-xs">
                <p>No projects match your filter query.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-[#141413] underline font-bold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAFAF8] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-[#E4E4DF] bg-[#0E0E12] shrink-0">
                      <Image
                        src={project.coverImage || '/projects/cambridge-car-audio.svg'}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold font-['Montserrat'] text-[#141413]">
                          {project.title}
                        </h3>
                        <Badge variant="outline" size="sm">
                          {project.categoryLabel || project.category}
                        </Badge>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#5F5F58] font-['Lato'] line-clamp-1 max-w-xl">
                        <span className="font-semibold text-[#141413]">{project.client}</span> — {project.tagline}
                      </p>

                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F0F0EC] text-[#55554E]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-[10px] font-mono text-[#8C8C84]">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => handleToggleFeatured(project.slug)}
                      className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                        project.featured
                          ? 'bg-[#FEF3C7] border-[#FDE68A] text-[#92400E]'
                          : 'bg-white border-[#E4E4DF] text-[#8C8C84] hover:text-[#141413]'
                      }`}
                      title={project.featured ? 'Remove from Featured' : 'Mark as Featured'}
                    >
                      <Star className={`w-3.5 h-3.5 ${project.featured ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPreviewProject(project);
                        setIsPreviewOpen(true);
                      }}
                      className="p-2 rounded-lg bg-white border border-[#E4E4DF] text-[#5F5F58] hover:text-[#141413] transition-colors cursor-pointer"
                      title="Preview Card"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      href={`/work/${project.slug}`}
                      target="_blank"
                      className="p-2 rounded-lg bg-white border border-[#E4E4DF] text-[#5F5F58] hover:text-[#141413] transition-colors cursor-pointer"
                      title="View Live Page"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleOpenEdit(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141413] text-white text-xs font-mono font-medium hover:bg-[#2A2A28] transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(project.slug, project.title)}
                      className="p-2 rounded-lg bg-white border border-[#E4E4DF] text-[#8C8C84] hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* ---------------------------------------------------- */}
      {/* ADD / EDIT MODAL                                      */}
      {/* ---------------------------------------------------- */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#E4E4DF] shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#E4E4DF] flex items-center justify-between bg-[#FAFAF8]">
              <div>
                <h3 className="text-lg font-bold font-['Montserrat'] text-[#141413]">
                  {editingSlug ? `Edit: ${formData.title}` : 'Add New Project Case Study'}
                </h3>
                <p className="text-xs text-[#5F5F58] font-mono">
                  {editingSlug ? `Slug: /work/${formData.slug}` : 'Creates a new case study across your portfolio'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="p-2 rounded-lg text-[#8C8C84] hover:text-[#141413] hover:bg-[#EAEAE6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveForm} className="overflow-y-auto p-6 space-y-6 flex-1 text-xs">
              {/* SECTION: BASIC INFO */}
              <div className="space-y-4">
                <h4 className="font-mono uppercase tracking-wider text-[#141413] font-bold pb-1 border-b border-[#E4E4DF]">
                  1. Core Metadata
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. Cambridge Car Audio"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-['Montserrat'] font-bold text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                      placeholder="e.g. cambridge-car-audio"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Client / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.client}
                      onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                      placeholder="e.g. Cambridge Car Audio (UK)"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Timeline / Delivery Year
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="e.g. 2024 - 2025"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleCategoryChange(e.target.value as Project['category'])}
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    >
                      <option value="wordpress">WordPress (Theme & Plugins)</option>
                      <option value="laravel">Laravel (Web App & SaaS)</option>
                      <option value="ecommerce">WooCommerce & Store</option>
                      <option value="react">React / Next.js</option>
                      <option value="performance-seo">Performance & SEO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Engineering Role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Lead WordPress Developer"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="rounded border-[#E4E4DF] text-[#141413] focus:ring-0 w-4 h-4"
                      />
                      <span className="text-xs font-semibold text-[#141413]">
                        Showcase on Homepage (Featured)
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141413] mb-1">
                    Tagline (1-line hook) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    placeholder="e.g. Premium custom WordPress website with bespoke theme architecture and speed tuning."
                    className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Live Project URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.liveUrl || ''}
                      onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      Repository URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.repoUrl || ''}
                      onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: MEDIA */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-[#E4E4DF]">
                  <h4 className="font-mono uppercase tracking-wider text-[#141413] font-bold">
                    2. Project Artwork & Screenshots
                  </h4>
                  <span className="text-[11px] font-mono text-[#5F5F58]">
                    PNG, JPG, WebP, SVG
                  </span>
                </div>

                {/* Primary Cover Image Preview & Selector */}
                <div className="bg-[#FAFAF8] border border-[#E4E4DF] rounded-xl p-4 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-[#141413] font-mono uppercase tracking-wider">
                      Cover Image / Browser Mockup *
                    </label>

                    {/* Source Tabs */}
                    <div className="flex items-center gap-1 bg-[#EAEAE6] p-1 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setCoverSourceTab('upload')}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                          coverSourceTab === 'upload'
                            ? 'bg-[#141413] text-white font-bold shadow-xs'
                            : 'text-[#5F5F58] hover:text-[#141413]'
                        }`}
                      >
                        <Upload className="w-3 h-3" />
                        <span>Upload File</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCoverSourceTab('url')}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                          coverSourceTab === 'url'
                            ? 'bg-[#141413] text-white font-bold shadow-xs'
                            : 'text-[#5F5F58] hover:text-[#141413]'
                        }`}
                      >
                        <Globe className="w-3 h-3" />
                        <span>Image URL</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCoverSourceTab('presets')}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                          coverSourceTab === 'presets'
                            ? 'bg-[#141413] text-white font-bold shadow-xs'
                            : 'text-[#5F5F58] hover:text-[#141413]'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Presets</span>
                      </button>
                    </div>
                  </div>

                  {/* TAB 1: UPLOAD FROM DEVICE */}
                  {coverSourceTab === 'upload' && (
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setCoverDragActive(true);
                      }}
                      onDragLeave={() => setCoverDragActive(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setCoverDragActive(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                          handleCoverFileSelect(e.dataTransfer.files[0]);
                        }
                      }}
                      className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                        coverDragActive
                          ? 'border-[#141413] bg-[#ECFDF5]'
                          : 'border-[#D4D4CE] hover:border-[#141413] bg-white'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleCoverFileSelect(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />

                      <div className="space-y-2 pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-[#F7F7F4] border border-[#E4E4DF] flex items-center justify-center mx-auto text-[#141413]">
                          {isProcessingCover ? (
                            <RefreshCw className="w-5 h-5 animate-spin text-[#10B981]" />
                          ) : (
                            <Upload className="w-5 h-5" />
                          )}
                        </div>
                        <p className="text-xs font-bold text-[#141413] font-['Montserrat']">
                          {isProcessingCover ? 'Optimizing image...' : 'Click to browse or drag & drop image here'}
                        </p>
                        <p className="text-[11px] text-[#71717A] font-mono">
                          PNG, JPG, WebP, or SVG • Auto-resizes and optimizes for instant page loads
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: URL INPUT */}
                  {coverSourceTab === 'url' && (
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.coverImage}
                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                        placeholder="https://images.unsplash.com/... or /projects/my-artwork.svg"
                        className="w-full bg-white border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                      />
                      <p className="text-[11px] text-[#71717A] mt-1 font-mono">
                        Supports external HTTPS images, Unsplash URLs, or local paths.
                      </p>
                    </div>
                  )}

                  {/* TAB 3: PRESETS */}
                  {coverSourceTab === 'presets' && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {PRESET_IMAGES.map((img) => (
                        <button
                          key={img.path}
                          type="button"
                          onClick={() => setFormData({ ...formData, coverImage: img.path })}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors cursor-pointer ${
                            formData.coverImage === img.path
                              ? 'bg-[#141413] text-white border-[#141413]'
                              : 'bg-white text-[#5F5F58] border-[#E4E4DF] hover:bg-[#F0F0EC]'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Live Thumbnail Preview */}
                  {formData.coverImage && (
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-lg border border-[#E4E4DF]">
                      <div className="relative w-28 h-20 rounded-md overflow-hidden bg-[#101014] border border-[#22222E] shrink-0">
                        <Image
                          src={formData.coverImage}
                          alt="Cover preview"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <div className="space-y-1 flex-1 text-left w-full">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#141413] flex items-center gap-1 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                            <span>Active Cover Selected</span>
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0F0EC] text-[#55554E]">
                            {formData.coverImage.startsWith('data:')
                              ? 'Direct Upload'
                              : formData.coverImage.startsWith('/projects/')
                              ? 'Preset SVG'
                              : 'Remote URL'}
                          </span>
                        </div>
                        {coverMeta && (
                          <p className="text-[11px] text-[#71717A] font-mono">
                            Resolution: {coverMeta.dimensions} • Optimized: {coverMeta.sizeKb} KB ({coverMeta.format})
                          </p>
                        )}
                        <p className="text-[10px] text-[#8C8C84] truncate font-mono max-w-md">
                          {formData.coverImage.slice(0, 80)}...
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, coverImage: '/projects/cambridge-car-audio.svg' });
                          setCoverMeta(null);
                        }}
                        className="text-xs font-mono text-red-600 hover:underline cursor-pointer shrink-0"
                      >
                        Reset Cover
                      </button>
                    </div>
                  )}
                </div>

                {/* Additional Gallery Screenshots */}
                <div className="bg-[#FAFAF8] border border-[#E4E4DF] rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-xs font-bold text-[#141413] font-mono uppercase tracking-wider block">
                        Gallery Screenshots (Optional)
                      </label>
                      <span className="text-[11px] text-[#71717A] font-mono">
                        Additional project screenshots shown on the case study page
                      </span>
                    </div>

                    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E4E4DF] text-xs font-mono text-[#141413] hover:bg-[#F0F0EC] transition-colors cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{isProcessingGallery ? 'Uploading...' : 'Upload Screenshots'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        onChange={(e) => {
                          if (e.target.files) {
                            handleGalleryFilesSelect(e.target.files);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.galleryImages.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {formData.galleryImages.map((imgUrl, gIdx) => (
                        <div
                          key={gIdx}
                          className="group relative aspect-[16/10] rounded-lg overflow-hidden border border-[#E4E4DF] bg-[#101014]"
                        >
                          <Image
                            src={imgUrl}
                            alt={`Gallery ${gIdx + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(gIdx)}
                            className="absolute top-1.5 right-1.5 p-1 rounded bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 cursor-pointer"
                            title="Remove screenshot"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION: TECHNOLOGIES */}
              <div className="space-y-4">
                <h4 className="font-mono uppercase tracking-wider text-[#141413] font-bold pb-1 border-b border-[#E4E4DF]">
                  3. Technology Stack Tags
                </h4>

                <div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTech(techInput);
                        }
                      }}
                      placeholder="Type technology (e.g. Redis) and press Enter..."
                      className="flex-1 bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddTech(techInput)}
                      className="px-4 py-2 bg-[#141413] text-white rounded-lg text-xs font-mono font-medium hover:bg-[#2A2A28] cursor-pointer"
                    >
                      Add
                    </button>
                  </div>

                  {/* Selected Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {formData.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-[#141413] text-white"
                      >
                        <span>{t}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTech(t)}
                          className="hover:text-red-400 cursor-pointer"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>

                  {/* Common Chips */}
                  <div className="flex flex-wrap gap-1 pt-3 items-center">
                    <span className="text-[11px] text-[#8C8C84] mr-1">Quick add:</span>
                    {COMMON_TECHS.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleAddTech(tech)}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E4E4DF] text-[#5F5F58] hover:bg-[#F0F0EC] transition-colors cursor-pointer"
                      >
                        +{tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION: MEASURABLE RESULTS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-[#E4E4DF]">
                  <h4 className="font-mono uppercase tracking-wider text-[#141413] font-bold">
                    4. Measurable Engineering Results
                  </h4>
                  <button
                    type="button"
                    onClick={handleAddResult}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#141413] hover:underline cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Metric</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {formData.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={res.metric}
                        onChange={(e) => handleUpdateResult(idx, 'metric', e.target.value)}
                        placeholder="Metric (e.g. < 0.9s)"
                        className="w-28 bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-[#141413]"
                      />
                      <input
                        type="text"
                        value={res.label}
                        onChange={(e) => handleUpdateResult(idx, 'label', e.target.value)}
                        placeholder="Label (e.g. First Contentful Paint)"
                        className="flex-1 bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-1.5 text-xs text-[#141413]"
                      />
                      <label className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5F5F58] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={res.verified}
                          onChange={(e) => handleUpdateResult(idx, 'verified', e.target.checked)}
                          className="rounded text-[#141413]"
                        />
                        <span>Verified</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => handleRemoveResult(idx)}
                        className="p-1.5 text-[#8C8C84] hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: SCOPE & CASE STUDY DETAILS */}
              <div className="space-y-4">
                <h4 className="font-mono uppercase tracking-wider text-[#141413] font-bold pb-1 border-b border-[#E4E4DF]">
                  5. Deep-Dive Case Study Content
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-[#141413] mb-1">
                    Project Summary *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Comprehensive 2-3 sentence technical overview of what was engineered..."
                    className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg p-3 text-xs text-[#141413] focus:outline-none focus:border-[#141413] font-['Lato']"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      The Challenge / Problem Statement
                    </label>
                    <textarea
                      rows={3}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="What was broken or sluggish in the client's previous setup?"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg p-3 text-xs text-[#141413] focus:outline-none focus:border-[#141413] font-['Lato']"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141413] mb-1">
                      The Solution / Architecture Strategy
                    </label>
                    <textarea
                      rows={3}
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      placeholder="How did you architect the custom code, database, or server?"
                      className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg p-3 text-xs text-[#141413] focus:outline-none focus:border-[#141413] font-['Lato']"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141413] mb-1">
                    Architecture & Implementation Notes
                  </label>
                  <input
                    type="text"
                    value={formData.architectureNotes || ''}
                    onChange={(e) => setFormData({ ...formData, architectureNotes: e.target.value })}
                    placeholder="e.g. Built with custom PHP templates utilizing modular partials and ACF Pro JSON synchronization."
                    className="w-full bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-2 text-xs font-mono text-[#141413] focus:outline-none focus:border-[#141413]"
                  />
                </div>

                {/* Key Highlights list */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-[#141413]">
                      Key Engineering Highlights (Bullet Points)
                    </label>
                    <button
                      type="button"
                      onClick={handleAddHighlight}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#141413] hover:underline cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Bullet</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {formData.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={hl}
                          onChange={(e) => handleUpdateHighlight(i, e.target.value)}
                          placeholder="e.g. Implemented sub-second query indexing across 50k items"
                          className="flex-1 bg-[#F7F7F4] border border-[#E4E4DF] rounded-lg px-3 py-1.5 text-xs text-[#141413]"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(i)}
                          className="p-1.5 text-[#8C8C84] hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-[#E4E4DF] flex items-center justify-end gap-3 sticky bottom-0 bg-white py-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#E4E4DF] text-xs font-mono text-[#5F5F58] hover:bg-[#F7F7F4] transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#141413] hover:bg-[#2A2A28] text-white text-xs font-bold font-['Montserrat'] uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  {editingSlug ? 'Save Changes' : 'Publish Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* EXPORT MODAL (TypeScript Code for projects.ts)       */}
      {/* ---------------------------------------------------- */}
      {isExportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-[#E4E4DF] shadow-2xl max-w-3xl w-full flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-[#E4E4DF] flex items-center justify-between bg-[#FAFAF8]">
              <div>
                <h3 className="text-base font-bold font-['Montserrat'] text-[#141413] flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#10B981]" />
                  <span>Export Code for GitHub Repository</span>
                </h3>
                <p className="text-xs text-[#5F5F58] font-mono">
                  Replace <code className="text-[#141413] font-bold">src/data/projects.ts</code> to permanently push your updates to GitHub.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsExportOpen(false)}
                className="p-2 rounded-lg text-[#8C8C84] hover:text-[#141413] hover:bg-[#EAEAE6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-4 rounded-xl bg-[#0E0E12] text-white font-mono text-[11px] leading-relaxed max-h-96 overflow-y-auto border border-[#22222E]">
                <pre>{exportToTypeScriptCode(projectsList)}</pre>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs space-y-1">
                <p className="font-bold">How to make your new projects permanently live on GitHub:</p>
                <ol className="list-decimal pl-4 space-y-0.5 text-[11px] text-[#1E3A8A]">
                  <li>Click <strong>Copy Code</strong> below.</li>
                  <li>Paste it into <code className="bg-white px-1 rounded">src/data/projects.ts</code> in your project.</li>
                  <li>Commit and push to GitHub: <code className="bg-white px-1 rounded">git commit -am &quot;update projects&quot; &amp;&amp; git push</code>.</li>
                  <li>GitHub Actions will automatically build and publish the live pages!</li>
                </ol>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#E4E4DF] flex items-center justify-between bg-[#FAFAF8]">
              <span className="text-xs font-mono text-[#8C8C84]">
                {projectsList.length} total projects in export
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadCode}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#E4E4DF] text-xs font-mono text-[#141413] hover:bg-[#F7F7F4] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download projects.ts</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#141413] hover:bg-[#2A2A28] text-white text-xs font-bold font-['Montserrat'] uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* PREVIEW CARD MODAL                                   */}
      {/* ---------------------------------------------------- */}
      {isPreviewOpen && previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-[#E4E4DF] shadow-2xl max-w-xl w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E4DF]">
              <h3 className="text-sm font-bold font-['Montserrat'] text-[#141413]">
                Live Card Preview
              </h3>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="p-1 rounded-lg text-[#8C8C84] hover:text-[#141413] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <ProjectCard project={previewProject} />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 bg-[#141413] text-white text-xs font-mono rounded-lg hover:bg-[#2A2A28] cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

