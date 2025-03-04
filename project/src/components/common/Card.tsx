import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export default function Card({ 
  className, 
  title, 
  description, 
  children, 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          {title && (
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}