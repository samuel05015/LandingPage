import React from 'react';
import { Sparkles } from 'lucide-react';
import { CTA_LINK } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white">
                <Sparkles size={18} fill="white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Glowy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Revolucionando sua rotina de beleza com inteligência artificial e estilo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Sobre</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Carreiras</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Central de Ajuda</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Contato</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Termos de Uso</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Privacidade</a></li>
              <li><a href={CTA_LINK} className="hover:text-pink-500 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Glowy App. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={CTA_LINK} className="hover:text-pink-500">Instagram</a>
            <a href={CTA_LINK} className="hover:text-pink-500">Twitter</a>
            <a href={CTA_LINK} className="hover:text-pink-500">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};