import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const YieldGapChart: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const years = ['2000', '2005', '2010', '2015', '2020', '2025'];
  
  const data = {
    labels: years,
    datasets: [
      {
        label: 'Produtividade Potencial (PP)',
        data: [5400, 5500, 5600, 5700, 5800, 5900],
        borderColor: 'rgba(46, 125, 50, 0.8)',
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        borderWidth: 3,
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Produtividade Atingível (PA)',
        data: [4300, 4400, 4500, 4600, 4700, 4800],
        borderColor: 'rgba(219, 123, 34, 0.8)',
        backgroundColor: 'rgba(219, 123, 34, 0.1)',
        borderWidth: 3,
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Produtividade Real (PR)',
        data: [2600, 2900, 3200, 3400, 3600, 3800],
        borderColor: 'rgba(255, 152, 0, 0.8)',
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        borderWidth: 3,
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} kg/ha`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 2000,
        title: {
          display: true,
          text: 'Produtividade (kg/ha)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Ano',
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-primary-800 text-center">Evolução do Yield Gap no Algodão Brasileiro (2000-2025)</h3>
      
      <div className="mt-4">
        <Line options={options} data={data} />
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-primary-50 rounded-lg">
          <p className="font-semibold text-primary-800">Yield Gap 2000</p>
          <p className="text-2xl font-bold text-primary-700">1700 kg/ha</p>
        </div>
        <div className="p-3 bg-primary-50 rounded-lg">
          <p className="font-semibold text-primary-800">Yield Gap 2025</p>
          <p className="text-2xl font-bold text-primary-700">1000 kg/ha</p>
        </div>
        <div className="p-3 bg-success-50 rounded-lg">
          <p className="font-semibold text-success-600">Redução do Gap</p>
          <p className="text-2xl font-bold text-success-600">41%</p>
        </div>
      </div>
      
      <p className="mt-6 text-sm text-gray-600 italic">
        Nota: Os dados são baseados em estimativas e projeções de pesquisas agrícolas brasileiras. O yield gap está diminuindo, mas ainda há um potencial significativo para aumentar a produtividade real.
      </p>
    </motion.div>
  );
};

export default YieldGapChart;