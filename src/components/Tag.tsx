import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  color?: string;
}

export default function Tag({color, children, className}:TagProps) {
  return (
    <div className={twMerge(
      "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 rounded-full inline-flex",
      color === 'lime' && 'text-lime-500 bg-lime-500/15',
      color === 'cyan' && 'text-cyan-500 bg-cyan-500/15',
      color === 'violet' && 'text-violet-500 bg-violet-500/15',
      className
    )}>{children}</div>
  );
}
