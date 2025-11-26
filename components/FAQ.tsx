import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    id: '1',
    question: 'O aplicativo é gratuito?',
    answer: 'O Glowy oferece uma versão gratuita com recursos básicos de organização de guarda-roupa. A análise avançada de pele e o simulador de cabelo estão disponíveis no plano Premium.'
  },
  {
    id: '2',
    question: 'Minhas fotos ficam salvas no servidor?',
    answer: 'Privacidade é nossa prioridade. As fotos usadas para análise de pele e prova virtual são processadas localmente no seu dispositivo ou criptografadas temporariamente e deletadas imediatamente após a análise.'
  },
  {
    id: '3',
    question: 'O simulador de cabelo funciona em todos os tipos de cabelo?',
    answer: 'Sim! Nossa IA foi treinada com milhares de texturas diferentes, de liso a crespo (4C), garantindo resultados realistas para todas.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-slate-800">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
