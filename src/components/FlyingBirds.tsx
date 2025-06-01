import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';

const Bird = ({ delay = 0, reverse = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const flyAnimation = {
    y: [0, -15, 0],
    x: reverse ? [-1000, window.innerWidth + 100] : [window.innerWidth + 100, -1000],
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: reverse ? -100 : window.innerWidth + 100 }}
      animate={inView ? flyAnimation : {}}
      transition={{
        duration: 20,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute"
      style={{ top: `${Math.random() * 80}%` }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          animate={{ rotate: reverse ? [-5, 5, -5] : [5, -5, 5] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://lottie.host/2a41d144-a431-47f9-8afb-210c2a5e0677/kDSHlpH8Aq.json"
            style={{ width: '50px', height: '50px' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FlyingBirds: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <Bird key={i} delay={i * 2} reverse={i % 2 === 0} />
      ))}
    </div>
  );
};

export default FlyingBirds;