import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'outline' | 'dark';
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded transition-colors';

  const variants = {
    default: 'bg-[#EFEFED] text-[#5F5F58] border border-[#E4E4DF]',
    accent: 'bg-[#EEF2FF] text-[#315CFF] border border-[#C7D2FE]',
    success: 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]',
    outline: 'bg-transparent text-[#5F5F58] border border-[#E4E4DF]',
    dark: 'bg-[#181818] text-[#EAEAEA] border border-[#2E2E2E]',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}

