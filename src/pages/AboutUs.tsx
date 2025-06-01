import React from 'react';
import SectionHeader from '../components/SectionHeader';

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="About Us" 
        subtitle="Learn more about our team and mission"
      />
      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-lg text-gray-700 mb-6">
          We are a dedicated team of agricultural researchers and technology enthusiasts working to bridge the yield gap in global agriculture. Our mission is to help farmers and agricultural professionals understand and overcome the challenges that prevent achieving optimal crop yields.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Through research, education, and innovative tools, we strive to make agricultural best practices more accessible and help create a more sustainable and productive farming future.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;