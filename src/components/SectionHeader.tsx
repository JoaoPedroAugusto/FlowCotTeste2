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
      className={`mb-8 sm:mb-12 px-4 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-800 break-words">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg text-gray-600 mt-3 leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`h-1 mt-4 rounded ${
          centered ? 'mx-auto' : ''
        } bg-primary-600`}
        style={{ width: centered ? '4rem' : '3rem' }}
      ></div>
    </motion.div>
  );
};

export default SectionHeader;
