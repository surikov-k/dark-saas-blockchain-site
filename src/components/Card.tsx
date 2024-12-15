import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import TextButton from './TextButton.tsx';

interface CardProps extends ComponentPropsWithoutRef<'article'> {
  color?: string,
  buttonText?: string,
}

export default function Card({color, children, className, buttonText}: CardProps) {
  return (
    <article className={twMerge(
      "relative z-0 p-8 md:p-10 group",
      className
    )}>
      <div className={twMerge(
        "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
        color === 'lime' && 'bg-lime-500',
        color === 'cyan' && 'bg-cyan-500',
        color === 'violet' && 'bg-violet-500',
      )}></div>
      <div className={twMerge(
        "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 top-1.5 right-1.5 -z-10  transition duration-300",
        color === 'lime' && "bg-lime-500 group-hover:bg-lime-300",
        color === 'cyan' && "bg-cyan-500 group-hover:bg-cyan-300",
        color === 'violet' && "bg-violet-500 group-hover:bg-violet-300",
      )}></div>

      <div className="absolute inset-0  bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      {children}
      <footer className="flex justify-between mt-12">
        <TextButton color={color}>{buttonText || "Learn more"}</TextButton>
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={2}
             stroke="currentColor"
             className="size-8 text-zinc-500 -translate-x-2 group-hover:translate-x-0 group-hover:text-zinc-300 transition duration-300">
          <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
        </svg>
      </footer>
    </article>
  );
}
