import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TextButton({color, className, children}: ComponentPropsWithoutRef<'button'> & {color?: string}) {
  return (
    <button className={twMerge(
      "text-sm font-heading uppercase text-fuchsia-500 font-extrabold tracking-wider",
      color === 'lime' && "text-lime-500",
      color === 'cyan' && "text-cyan-500",
      color === 'violet' && "text-violet-500",
      className
    )}>
      {children}
    </button>
  );
}

