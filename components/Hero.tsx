import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Shirt, Sparkles, Scissors } from 'lucide-react';
import { ImageWithLoad } from './ImageWithLoad';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800/30 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles size={12} />
            Beauty Tech 2025
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 [text-wrap:balance]">
            Sua Beleza, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 animate-gradient-x">
              Decodificada por IA.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-light [text-wrap:balance]">
            O app que une seu guarda-roupa, skincare e visagismo em uma experiência única. Descubra sua melhor versão com a precisão da inteligência artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Glowing CTA Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button 
                className="relative w-full sm:w-auto !px-8 !py-4 !text-base shadow-2xl" 
                icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              >
                Começar Agora
              </Button>
            </div>
            
            <Button variant="ghost" href="#features" className="w-full sm:w-auto !px-8 !py-4 !text-base">
              Ver Recursos
            </Button>
          </div>
          
          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                        <ImageWithLoad src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <p>Usado por +50k pessoas</p>
          </div>
        </motion.div>

        {/* Right Column: 3D Phone Mockup with Breathing Animation */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center lg:justify-end perspective-1000">
          
          {/* Animated Background Elements behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] bg-gradient-to-tr from-pink-400/20 to-violet-400/20 rounded-full blur-[60px] animate-pulse" />
          </div>

          {/* Floating Icons */}
          <FloatingIcon icon={<Shirt size={24} className="text-violet-600" />} delay={0} x={-160} y={-180} />
          <FloatingIcon icon={<Sparkles size={24} className="text-pink-500" />} delay={1.5} x={180} y={-120} />
          <FloatingIcon icon={<Scissors size={24} className="text-indigo-500" />} delay={3} x={-140} y={160} />

          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            animate={{ 
                opacity: 1, 
                y: [0, -20, 0],
                rotateY: [15, 10, 15]
            }}
            transition={{ 
                opacity: { duration: 1 },
                default: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-slate-900 dark:border-slate-800 ring-1 ring-white/10"
            style={{
              boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px -10px rgba(236, 72, 153, 0.3)"
            }}
          >
            {/* Screen Content */}
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[2.8rem] overflow-hidden relative">
              {/* Fake UI Header */}
              <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent z-10 p-7 flex justify-between items-start text-white">
                <span className="font-semibold text-sm tracking-wide">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-md"></div>
                  <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-md"></div>
                </div>
              </div>

              {/* App Interface Image */}
              <ImageWithLoad 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" 
                alt="Glowy App Interface" 
                className="w-full h-full object-cover"
              />

              {/* Fake UI Floating Notification */}
              <motion.div 
                className="absolute bottom-10 left-5 right-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/40 dark:border-slate-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-0.5">Análise Concluída</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                      Sua paleta é <strong>Inverno Brilhante</strong>. Experimente usar tons de Azul Safira hoje.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingIcon = ({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: number, y: number }) => (
  <motion.div
    className="absolute z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-purple-500/10 dark:shadow-none hidden lg:flex items-center justify-center border border-white/20 dark:border-slate-700"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
    }}
    style={{ 
        left: '50%', 
        top: '50%',
        marginLeft: x, 
        marginTop: y 
    }}
    transition={{
      scale: { delay: delay, duration: 0.5 },
      opacity: { delay: delay, duration: 0.5 },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.5 // Offset float animation slightly
      }
    }}
  >
    {icon}
  </motion.div>
);