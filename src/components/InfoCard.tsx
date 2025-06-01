import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description?: string;
  content?: string;
  icon?: LucideIcon;
  delay?: number;
  illustration?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  content, 
  icon: Icon, 
  delay = 0,
  illustration 
}) => {
  const displayText = description || content;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      zIndex: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    notHovered: {
      scale: 0.95,
      opacity: 0.7,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: (delay * 0.1) + 0.2,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
    >
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
      >
        {Icon && (
          <motion.div 
            variants={iconVariants}
            className="flex items-center mb-4"
          >
            <div className="bg-primary-100 p-3 rounded-lg">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
          </motion.div>
        )}
        
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: (delay * 0.1) + 0.3 }}
          className="text-xl font-semibold mb-2 text-gray-800"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: (delay * 0.1) + 0.4 }}
          className="text-gray-600"
        >
          {displayText}
        </motion.p>
      </motion.div>

      {illustration && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: (delay * 0.1) + 0.5 }}
          className="absolute -bottom-8 -right-8 w-32 h-32 pointer-events-none"
        >
          <img
            src={illustration}
            alt=""
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: (delay * 0.1) + 0.6 }}
        className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary-100 rounded-full opacity-10"
      />

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default InfoCard;