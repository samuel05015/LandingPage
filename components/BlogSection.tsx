import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost, CTA_LINK } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { ImageWithLoad } from './ImageWithLoad';

const posts: BlogPost[] = [
  {
    id: '1',
    category: 'Estilo',
    title: 'Armário Cápsula: Como montar looks infinitos com 10 peças',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
  },
  {
    id: '2',
    category: 'Skincare',
    title: 'Morning vs. Night Routine: O guia definitivo',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&q=80',
  },
  {
    id: '3',
    category: 'Tecnologia',
    title: 'Como a IA está revolucionando a auto-estima',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">Glowy Insider</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-500 text-balance">Dicas & Tendências curadas para você.</p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href={CTA_LINK}>
              Ler mais no Blog
            </Button>
          </div>
        </div>

        {/* Scroll container for mobile, Grid for desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          {posts.map((post) => (
            <motion.a
              href={CTA_LINK}
              target="_blank"
              key={post.id}
              className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Card Container */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:border-pink-500/30">
                <div className="relative h-64 md:h-64 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <ImageWithLoad 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    containerClassName="h-full"
                  />
                  <span className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white transition-colors border border-white/20">
                    {post.category}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 px-2 pb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors flex-shrink-0">
                    <ArrowUpRight className="text-slate-400 dark:text-slate-500 group-hover:text-pink-600 dark:group-hover:text-pink-400 w-4 h-4 transition-all" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
             <Button variant="outline" href={CTA_LINK}>
              Ler mais no Blog
            </Button>
        </div>
      </div>
    </section>
  );
};