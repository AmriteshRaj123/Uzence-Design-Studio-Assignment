import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /**
   * Badge label
   */
  children: React.ReactNode;
  /**
   * Badge color variant
   */
  variant?: BadgeVariant;
  /**
   * Badge size
   */
  size?: BadgeSize;
  /**
   * If true, the badge will have lighter background color
   */
  light?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  light = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };
  
  const lightVariantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
    neutral: 'bg-neutral-100 text-neutral-800',
  };
  
  const solidVariantStyles = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-white',
    accent: 'bg-accent-600 text-white',
    success: 'bg-success-600 text-white',
    warning: 'bg-warning-600 text-white',
    error: 'bg-error-600 text-white',
    neutral: 'bg-neutral-600 text-white',
  };
  
  const variantStyles = light ? lightVariantStyles : solidVariantStyles;
  
  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;