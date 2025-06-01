import React from 'react';
import SectionHeader from '../components/SectionHeader';

function MinecraftYieldGap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Minecraft & Yield Gap" 
        subtitle="Understanding agricultural concepts through gaming"
      />
      
      <div className="mt-8 prose prose-lg max-w-none">
        <p className="text-gray-700">
          Minecraft serves as an innovative educational tool for understanding agricultural yield gaps. 
          Through its farming mechanics, players can experience firsthand the challenges and factors 
          that affect crop yields in a simplified but engaging way.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 my-8">
          <h3 className="text-xl font-semibold mb-4">Key Learning Points in Minecraft Farming</h3>
          <ul className="space-y-3">
            <li>Resource management and irrigation systems</li>
            <li>Impact of environmental conditions on crop growth</li>
            <li>Importance of soil fertility and crop spacing</li>
            <li>Basic concepts of agricultural optimization</li>
          </ul>
        </div>

        <p className="text-gray-700">
          By bridging the gap between gaming and agricultural education, Minecraft provides an 
          accessible platform for students and enthusiasts to learn about yield gap concepts 
          in an interactive environment.
        </p>
      </div>
    </div>
  );
}

export default MinecraftYieldGap;