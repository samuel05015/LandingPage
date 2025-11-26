import React from 'react';
import { motion } from 'framer-motion';
import { CTA_LINK } from '../types';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href = CTA_LINK,
  onClick,
  icon
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:brightness-110",
    outline: "bg-transparent border-2 border-slate-200 text-slate-700 hover:border-violet-500 hover:text-violet-600",
    ghost: "bg-transparent text-slate-600 hover:text-pink-500 hover:bg-pink-50"
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </Component>
  );
};