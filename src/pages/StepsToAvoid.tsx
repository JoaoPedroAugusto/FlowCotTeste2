import React from 'react';
import SectionHeader from '../components/SectionHeader';

const StepsToAvoid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Steps to Avoid" 
        subtitle="Learn about common pitfalls and how to prevent yield gaps"
      />
      
      <div className="mt-8 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-700">Poor Soil Management</h3>
              <p className="text-gray-600 mt-2">
                Neglecting soil health and proper nutrient management can significantly impact crop yields.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-700">Incorrect Timing</h3>
              <p className="text-gray-600 mt-2">
                Planting or harvesting at suboptimal times can lead to reduced yields.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-700">Inadequate Water Management</h3>
              <p className="text-gray-600 mt-2">
                Both over and under-irrigation can cause significant yield gaps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">Regular Monitoring</h3>
              <p className="text-gray-600 mt-2">
                Implement consistent monitoring practices to catch issues early.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">Data-Driven Decisions</h3>
              <p className="text-gray-600 mt-2">
                Use agricultural data and analytics to make informed farming decisions.
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">Expert Consultation</h3>
              <p className="text-gray-600 mt-2">
                Regularly consult with agricultural experts and extension services.
              </p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">Technology Integration</h3>
              <p className="text-gray-600 mt-2">
                Adopt appropriate technology solutions for better farm management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToAvoid;