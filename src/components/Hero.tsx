import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary-800 font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={ctaLink} className="btn btn-primary">
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink} className="btn btn-outline">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={imageUrl}
              alt="Cotton field"
              className="rounded-lg shadow-xl w-full object-cover h-80 lg:h-96"
            />
            <div className="absolute inset-0 bg-primary-600 opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;