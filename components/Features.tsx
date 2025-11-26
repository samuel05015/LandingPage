import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, ScanFace, Scissors } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'closet',
    title: 'Smart Closet',
    description: 'Organize suas roupas e receba sugestões de looks diários baseados no clima e no seu estilo.',
    icon: Shirt,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'skin',
    title: 'Skin Scan AI',
    description: 'Análise de pele profissional via câmera. Receba rotinas personalizadas e recomendações de produtos.',
    icon: ScanFace,
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 'hair',
    title: 'Hair Studio',
    description: 'Simulador realista de cortes e coloração. Teste o loiro platinado ou o corte bob antes de ir ao salão.',
    icon: Scissors,
    color: 'from-violet-400 to-purple-500'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-pink-500 tracking-wide uppercase">Recursos</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tecnologia que realça você
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Descubra os três pilares fundamentais da experiência Glowy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient Blob on Hover */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg relative z-10`}>
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};