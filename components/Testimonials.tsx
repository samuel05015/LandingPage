import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ImageWithLoad } from './ImageWithLoad';

const testimonials = [
  {
    id: 1,
    name: 'Julia Mendes',
    role: 'Fashion Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'O Glowy mudou totalmente como eu me vejo. O recurso de Hair Studio me salvou de um corte que não combinaria com meu rosto!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amanda Costa',
    role: 'Arquiteta',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'Uso o Smart Closet todo dia de manhã. Economizo pelo menos 20 minutos escolhendo roupa antes de trabalhar.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carolina Silva',
    role: 'Estudante',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
    content: 'A análise de pele é assustadoramente precisa. As recomendações de produtos transformaram minha rotina de skincare.',
    rating: 4,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">Quem usa, ama ✨</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors duration-500 text-balance">Junte-se a mais de 50.000 pessoas descobrindo seu brilho.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-100 dark:ring-pink-900">
                  <ImageWithLoad 
                    src={t.image} 
                    alt={t.name} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white transition-colors duration-500">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-500">{t.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 dark:text-slate-700'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed transition-colors duration-500">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};