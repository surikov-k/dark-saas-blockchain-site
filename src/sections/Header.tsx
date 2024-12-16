import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

import CutCornerButton from '../components/CutCornerButton.tsx';
import Hexagon from '../components/Hexagon.tsx';

const navLinks = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
  {name: 'Careers', href: '/careers'},
  {name: 'Contact', href: '/contact'},
]

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-lg">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/images/logo.svg"
                   alt="Bloclforge Loglo"/>
            </div>
            <div className="flex gap-4 items-center">
              <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="size-10 relative"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge(
                    "w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500",
                    isOpen && 'translate-y-0 -rotate-45',
                  )}></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge(
                    "w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500",
                    isOpen && 'translate-y-0 rotate-45',
                  )}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed size-full top-0 left-0  z-30 bg-zinc-900"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">

              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2  -z-10">
                <Hexagon
                  size={700}
                  reverse
                />
              </div>
              <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={1100}/>
              </div>

              <div className="h-full flex flex-col justify-center items-center">
                <nav className="flex flex-col gap-12 md:gap-16 items-center ">
                  {navLinks.map(({name, href}, index) => (
                    <motion.a
                      key={name}
                      href={href}
                      className=""
                      initial={{opacity: 0, y: 24}}
                      animate={{opacity: 1, y: 0}}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: index * 0.25
                      }}
                    >
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading  font-black text-zinc-500 hover:text-zinc-300 transition duration-300">{name}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>)}</AnimatePresence>
    </>

  );
}
