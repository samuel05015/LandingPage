import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Shirt, Sparkles, Scissors } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-slate-50 to-white">
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Sua Beleza, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600">
              Decodificada por IA.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            O app que une seu guarda-roupa, skincare e visagismo em uma experiência única. Descubra sua melhor versão hoje.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button icon={<ArrowRight size={18} />}>
              Começar Agora
            </Button>
            <Button variant="outline" href="#features">
              Saiba Mais
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3D Phone Mockup */}
        <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
          {/* Floating Icons */}
          <FloatingIcon icon={<Shirt size={24} className="text-violet-600" />} delay={0} x={-180} y={-150} />
          <FloatingIcon icon={<Sparkles size={24} className="text-pink-500" />} delay={1} x={180} y={-100} />
          <FloatingIcon icon={<Scissors size={24} className="text-indigo-500" />} delay={2} x={-150} y={150} />

          <motion.div
            initial={{ opacity: 0, rotateY: 30, rotateX: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: -10, rotateX: 5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-900 ring-1 ring-white/20 transform-gpu perspective-1000"
            style={{
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
            }}
          >
            {/* Screen Content */}
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
              {/* Fake UI Header */}
              <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10 p-6 flex justify-between items-start text-white">
                <span className="font-semibold text-sm">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-white/20"></div>
                  <div className="w-4 h-4 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* App Screenshot Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?w=600&q=80" 
                alt="App Interface" 
                className="w-full h-full object-cover"
              />

              {/* Fake UI Floating Card */}
              <motion.div 
                className="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Match Perfeito!</h4>
                    <p className="text-xs text-slate-500">Seu tom de pele combina com tons terrosos.</p>
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
    className="absolute z-20 bg-white p-4 rounded-2xl shadow-xl shadow-purple-500/10 hidden lg:block"
    initial={{ x: 0, y: 0 }}
    animate={{ 
      y: [0, -15, 0],
      x: x !== 0 ? x : 0 // Static X position, generic floating Y
    }}
    style={{ 
        left: '50%', 
        top: '50%',
        marginLeft: x, // Position relative to center
        marginTop: y 
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  >
    {icon}
  </motion.div>
);