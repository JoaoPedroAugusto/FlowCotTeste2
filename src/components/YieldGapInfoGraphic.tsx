import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const YieldGapInfoGraphic: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const barVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: { duration: 1, delay: custom * 0.01 }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-primary-800">
        Entendendo o Yield Gap no Algodão
      </h3>
      
      <div className="space-y-10 my-8">
        {/* Produtividade Potencial */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Produtividade Potencial (PP)</span>
            <span className="font-bold text-primary-800">100%</span>
          </div>
          <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-600 rounded-full"
              custom={100}
              variants={barVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            O rendimento máximo teórico que poderia ser alcançado em condições ideais, sem limitações.
          </p>
        </div>
        
        {/* Produtividade Atingível */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Produtividade Atingível (PA)</span>
            <span className="font-bold text-accent-600">80%</span>
          </div>
          <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent-500 rounded-full"
              custom={80}
              variants={barVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            O rendimento máximo que poderia ser alcançado com as melhores práticas de manejo disponíveis.
          </p>
        </div>
        
        {/* Produtividade Real */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Produtividade Real (PR)</span>
            <span className="font-bold text-warning-600">50%</span>
          </div>
          <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-warning-500 rounded-full"
              custom={50}
              variants={barVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            O rendimento que os agricultores realmente alcançam nas condições atuais de cultivo.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-primary-50 rounded-lg">
        <h4 className="font-semibold text-primary-800 mb-2">Yield Gap = Produtividade Atingível - Produtividade Real</h4>
        <p className="text-gray-700">
          O "yield gap" representa a diferença entre o que poderia ser produzido (PA) e o que realmente é produzido (PR).
          Reduzir este gap significa aumentar a produtividade sem necessariamente expandir a área plantada.
        </p>
      </div>
    </motion.div>
  );
};

export default YieldGapInfoGraphic;