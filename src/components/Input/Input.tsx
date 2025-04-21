import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error message to display below the input
   */
  error?: string;
  /**
   * If true, the input will be marked as required
   */
  required?: boolean;
  /**
   * Icon to display at the left of the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display at the right of the input
   */
  rightIcon?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      required,
      leftIcon,
      rightIcon,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    
    const inputBaseStyles = 'w-full rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
    const inputSizeStyles = 'px-4 py-2';
    const inputStateStyles = hasError
      ? 'border-error-500 text-error-900'
      : 'border-neutral-300 text-neutral-900';
    const iconStyles = 'absolute top-1/2 transform -translate-y-1/2 text-neutral-500';
    const leftIconStyles = 'left-3';
    const rightIconStyles = 'right-3';

    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-medium mb-1 ${
              hasError ? 'text-error-600' : 'text-neutral-700'
            }`}
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className={`${iconStyles} ${leftIconStyles}`}>{leftIcon}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`${inputBaseStyles} ${inputSizeStyles} ${inputStateStyles} ${
              leftIcon ? 'pl-10' : ''
            } ${rightIcon ? 'pr-10' : ''}`}
            aria-invalid={hasError}
            aria-describedby={helperText || error ? `${inputId}-description` : undefined}
            required={required}
            {...props}
          />
          {rightIcon && (
            <div className={`${iconStyles} ${rightIconStyles}`}>{rightIcon}</div>
          )}
        </div>
        {(helperText || error) && (
          <p
            id={`${inputId}-description`}
            className={`mt-1 text-sm ${
              hasError ? 'text-error-600' : 'text-neutral-500'
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;