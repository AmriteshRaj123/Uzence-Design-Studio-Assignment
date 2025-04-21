import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * If true, the button will take the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, the button will show a loading spinner
   */
  isLoading?: boolean;
  /**
   * Label for the loading state
   */
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Size styles
    const sizeStyles = {
      sm: 'text-sm px-3 py-1.5 h-8',
      md: 'text-base px-4 py-2 h-10',
      lg: 'text-lg px-6 py-3 h-12',
    };
    
    // Variant styles
    const variantStyles = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 focus:ring-secondary-500',
      accent: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 focus:ring-accent-500',
      outline: 'bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-neutral-500',
      ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-500',
      link: 'bg-transparent text-primary-600 hover:underline focus:ring-primary-500 p-0 h-auto',
    };
    
    // Disabled styles
    const disabledStyles = 'opacity-50 cursor-not-allowed';
    
    // Full width styles
    const widthStyles = fullWidth ? 'w-full' : '';
    
    // Loading spinner
    const LoadingSpinner = () => (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? widthStyles : ''} ${
          disabled || isLoading ? disabledStyles : ''
        } ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {isLoading && loadingText ? loadingText : children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;