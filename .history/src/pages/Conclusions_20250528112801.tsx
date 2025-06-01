import React from 'react';
import { BookOpen, BarChart2, Lightbulb, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';

function Conclusions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Conclusions" 
        subtitle="Key takeaways about yield gap and its solutions"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <InfoCard
          title="Understanding Yield Gap"
          content="The yield gap represents the difference between potential and actual crop yields, influenced by various environmental, technological, and management factors."
          icon={BookOpen}
        />
        <InfoCard
          title="Solutions and Implementation"
          content="Addressing yield gaps requires a combination of improved farming practices, technology adoption, and knowledge sharing among agricultural communities."
          icon={BarChart2}
        />
        <InfoCard
          title="Future Outlook"
          content="Continuous research and development in agricultural practices will help reduce yield gaps and contribute to global food security."
          icon={Lightbulb}
        />
        <InfoCard
          title="Call to Action"
          content="Join us in our mission to minimize yield gaps and create a more sustainable agricultural future through education and implementation of best practices."
          icon={ArrowRight}
        />
      </div>
    </div>
  );
}

export default Conclusions;