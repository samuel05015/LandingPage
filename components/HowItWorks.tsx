import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Wand2, Heart } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Faça o Upload',
    description: 'Tire uma selfie ou carregue uma foto do seu guarda-roupa. Nossa câmera inteligente detecta iluminação e texturas.',
    icon: Camera,
  },
  {
    id: 2,
    title: 'A Mágica da IA',
    description: 'Nossos algoritmos analisam seu tom de pele, formato de rosto e peças de roupa para encontrar combinações harmônicas.',
    icon: Wand2,
  },
  {
    id: 3,
    title: 'Seu Look Ideal',
    description: 'Receba sugestões completas de outfit, maquiagem e cabelo prontas para usar ou comprar.',
    icon: Heart,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 dark:via-pink-900/30 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 tracking-wider uppercase bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-full">
            Passo a Passo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-500">
            Como o Glowy funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-pink-50 dark:border-slate-700 shadow-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-pink-200 dark:group-hover:border-pink-900/50 transition-all duration-300">
                <step.icon size={32} className="text-slate-700 dark:text-slate-200 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-500">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto transition-colors duration-500 text-balance">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};