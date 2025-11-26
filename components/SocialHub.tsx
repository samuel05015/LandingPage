import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import { CTA_LINK } from '../types';
import { ImageWithLoad } from './ImageWithLoad';

// Custom TikTok icon since Lucide doesn't have a perfect match often
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 7.7 6.1l.02-.9V9.03a4.88 4.88 0 0 0 4.16 1.97v-4.3z"/>
  </svg>
);

const socialImages = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
];

export const SocialHub: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors duration-500">Junte-se à Comunidade <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">#GlowyApp</span></h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-500 text-balance">Siga-nos para inspirações diárias e compartilhe seu glow.</p>

        {/* Mock Instagram Feed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {socialImages.map((src, idx) => (
            <div key={idx} className="aspect-square relative group overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-xl cursor-pointer">
              <ImageWithLoad 
                src={src} 
                alt="Community post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Social Buttons - Explicit Styling for High Visibility */}
        <div className="flex flex-wrap justify-center gap-4">
            <SocialLink 
                href={CTA_LINK}
                icon={<Instagram className="w-5 h-5" />} 
                label="Instagram" 
                className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white shadow-lg shadow-pink-500/20"
            />
            <SocialLink 
                href={CTA_LINK}
                icon={<TikTokIcon />} 
                label="TikTok" 
                className="bg-black text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 dark:hover:bg-slate-700 dark:border dark:border-slate-800"
            />
             <SocialLink 
                href={CTA_LINK}
                icon={<MessageCircle className="w-5 h-5" />} 
                label="Pinterest" 
                className="bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700"
            />
            <SocialLink 
                href={CTA_LINK}
                icon={<Twitter className="w-5 h-5" />} 
                label="Twitter" 
                className="bg-black text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 dark:hover:bg-slate-700 dark:border dark:border-slate-800"
            />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, label, className, href }: { icon: React.ReactNode, label: string, className?: string, href: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${className}`}
  >
    {icon} {label}
  </motion.a>
);