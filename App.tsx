import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { SocialHub } from './components/SocialHub';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-pink-100 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100 transition-colors duration-300">
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      {/* Ambient Background Orbs (Global) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
         <motion.div 
            animate={{ 
                x: [0, 50, 0], 
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-[120px]" 
         />
         <motion.div 
            animate={{ 
                x: [0, -40, 0], 
                y: [0, 40, 0],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-pink-300/20 dark:bg-pink-900/10 rounded-full blur-[100px]" 
         />
      </div>

      <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />
      <main className="relative z-0">
        <Hero />
        <HowItWorks />
        <Features />
        <BlogSection />
        <Testimonials />
        <SocialHub />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;