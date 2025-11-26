import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageWithLoadProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const ImageWithLoad: React.FC<ImageWithLoadProps> = ({ containerClassName = "", className = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 ${containerClassName}`}>
      {/* Skeleton Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-slate-200 dark:bg-slate-800" />
      )}
      
      {/* Image with Fade In */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
};