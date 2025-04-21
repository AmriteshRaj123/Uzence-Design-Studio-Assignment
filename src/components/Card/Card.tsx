import React from 'react';

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * If true, removes the shadow
   */
  flat?: boolean;
  /**
   * If true, adds a hover effect
   */
  hoverable?: boolean;
  /**
   * Card header
   */
  header?: React.ReactNode;
  /**
   * Card footer
   */
  footer?: React.ReactNode;
  /**
   * If true, the card will have a border instead of a shadow
   */
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  flat = false,
  hoverable = false,
  header,
  footer,
  bordered = false,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  const shadowStyles = flat ? '' : bordered ? 'border border-neutral-200' : 'shadow-md';
  const hoverStyles = hoverable
    ? 'transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${shadowStyles} ${hoverStyles} ${className}`} {...props}>
      {header && <div className="px-6 py-4 border-b border-neutral-200">{header}</div>}
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="px-6 py-4 border-t border-neutral-200">{footer}</div>}
    </div>
  );
};

export default Card;