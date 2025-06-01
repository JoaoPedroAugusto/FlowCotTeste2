import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-primary-800">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 mt-3 ${centered ? 'max-w-3xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-600 mt-4 rounded ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionHeader;