'use client';

import { Project } from '@/types';
import { projects as defaultProjects } from '@/data/projects';

const STORAGE_KEY = 'razu_portfolio_custom_projects';
const AUTH_KEY = 'razu_portfolio_admin_auth';
const PASSCODE_KEY = 'razu_portfolio_admin_passcode';
const DEFAULT_PASSCODE = 'razu2025';

export function getStoredProjects(): Project[] {
  if (typeof window === 'undefined') return defaultProjects;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProjects;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to parse custom projects from storage:', err);
  }
  return defaultProjects;
}

export function saveStoredProjects(projectsList: Project[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsList));
    window.dispatchEvent(new CustomEvent('projects_updated', { detail: projectsList }));
  } catch (err) {
    console.error('Failed to save projects to storage:', err);
  }
}

export function addProject(project: Project): void {
  const current = getStoredProjects();
  // Check if slug exists, if so generate a unique suffix
  let slug = project.slug.trim().toLowerCase();
  if (!slug) {
    slug = project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  const existingIdx = current.findIndex((p) => p.slug === slug);
  if (existingIdx >= 0) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }
  const newProject = { ...project, slug };
  saveStoredProjects([newProject, ...current]);
}

export function updateProject(oldSlug: string, updated: Project): void {
  const current = getStoredProjects();
  const next = current.map((p) => (p.slug === oldSlug ? updated : p));
  saveStoredProjects(next);
}

export function deleteProject(slug: string): void {
  const current = getStoredProjects();
  const next = current.filter((p) => p.slug !== slug);
  saveStoredProjects(next);
}

export function resetToDefaultProjects(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('projects_updated', { detail: defaultProjects }));
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export function setAdminAuthenticated(auth: boolean): void {
  if (typeof window === 'undefined') return;
  if (auth) {
    localStorage.setItem(AUTH_KEY, 'true');
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function checkAdminPasscode(input: string): boolean {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem(PASSCODE_KEY) || DEFAULT_PASSCODE;
  return input.trim() === stored.trim();
}

export function setCustomPasscode(newCode: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PASSCODE_KEY, newCode.trim());
}

export function exportToTypeScriptCode(projectsList: Project[]): string {
  const json = JSON.stringify(projectsList, null, 2);
  return `import { Project } from '@/types';\n\nexport const projects: Project[] = ${json};\n`;
}

export function downloadFile(filename: string, content: string, contentType = 'text/plain') {
  if (typeof window === 'undefined') return;
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
