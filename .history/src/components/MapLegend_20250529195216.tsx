import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div
      className="
        bg-white/90 backdrop-blur-sm 
        p-3 sm:p-4 
        rounded-lg shadow-md 
        max-w-[95vw] xs:max-w-xs sm:max-w-sm 
        text-left 
        transform origin-top-left
        scale-[0.85] xs:scale-[0.9] sm:scale-95 md:scale-100
      "
    >
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">Acesso Hídrico</h3>

      <div className="space-y-1.5">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-green-500 mr-2 shrink-0"></div>
          <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700">Ótimo (80-100%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-blue-500 mr-2 shrink-0"></div>
          <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700">Bom (60-80%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-yellow-500 mr-2 shrink-0"></div>
          <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700">Moderado (40-60%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-orange-500 mr-2 shrink-0"></div>
          <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700">Deficiente (20-40%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-red-500 mr-2 shrink-0"></div>
          <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700">Crítico (0-20%)</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
