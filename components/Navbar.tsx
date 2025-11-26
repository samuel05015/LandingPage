import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Recursos', href: '#features' },
    { name: 'Blog', href: '#blog' },
    { name: 'Comunidade', href: '#social' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${
            isScrolled ? 'pt-4' : 'pt-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div 
            className={`pointer-events-auto w-[92%] max-w-6xl rounded-full border px-4 py-3 flex items-center justify-between transition-all duration-300
            ${isScrolled 
                ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-white/20 dark:border-slate-700 shadow-lg shadow-black/5' 
                : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-transparent shadow-none'
            }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer pl-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
              <Sparkles size={20} fill="white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 hidden sm:block">
              Glowy
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-full border border-white/10 dark:border-slate-700">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 pr-1">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button variant="primary" className="!px-6 !py-2.5 !text-sm !h-auto" href="https://samuel05015.github.io/radiant-you-style/">
              Baixar App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
             <button
              onClick={toggleTheme}
              className="p-3 rounded-full text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 dark:text-slate-200 p-3 rounded-full active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 rounded-3xl p-6 shadow-2xl flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-pink-50 dark:hover:bg-slate-800 text-lg font-medium text-slate-800 dark:text-slate-200 transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 text-pink-500 transition-opacity">→</span>
                </a>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
              <Button className="w-full justify-center !py-4" onClick={() => setMobileMenuOpen(false)}>
                Começar Agora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};