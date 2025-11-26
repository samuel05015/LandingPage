import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: string;
  category: 'Estilo' | 'Skincare' | 'Tecnologia';
  title: string;
  image: string;
  link?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CTA_LINK = "https://samuel05015.github.io/radiant-you-style/";