import React from 'react';
import { Sparkles } from 'lucide-react';
import { CTA_LINK } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white">
                <Sparkles size={18} fill="white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">Glowy</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-500">
              Revolucionando sua rotina de beleza com inteligência artificial e estilo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Sobre</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Carreiras</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Suporte</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Central de Ajuda</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Contato</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Termos de Uso</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Privacidade</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">
          <p>&copy; {currentYear} Glowy App. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Instagram</a>
            <a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Twitter</a>
            <a href={CTA_LINK} className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};