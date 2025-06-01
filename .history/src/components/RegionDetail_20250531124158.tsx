import React from 'react';
import { ChevronLeft, Droplets, CloudRain, Thermometer, Wind, ArrowUpRight } from 'lucide-react';
import { RegionData } from '../types';
import SolutionRecommendations from './SolutionRecommendations';

interface RegionDetailProps {
  region: RegionData;
}

const RegionDetail: React.FC<RegionDetailProps> = ({ region }) => {
  const { name, currentData } = region;
  const { waterAccessLevel, precipitation, temperature, soilMoisture } = currentData;

  const getAccessLevelCategory = (level: number): string => {
    if (level >= 80) return 'Ótimo';
    if (level >= 60) return 'Bom';
    if (level >= 40) return 'Moderado';
    if (level >= 20) return 'Deficiente';
    return 'Crítico';
  };

  const getAccessLevelColor = (level: number): string => {
    if (level >= 80) return 'text-green-600/70';
    if (level >= 60) return 'text-blue-600/70';
    if (level >= 40) return 'text-yellow-600/70';
    if (level >= 20) return 'text-orange-600/70';
    return 'text-red-600/70';
  };

  return (
    <div className="p-4 max-w-full sm:max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => window.history.back()}
          className="p-1 rounded-full hover:bg-gray-100 mr-2"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 break-words">
          Região {name}
        </h2>
      </div>

      {/* Acesso Hídrico */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-sm text-gray-600">Acesso Hídrico</span>
          </div>
          <span className={`text-lg sm:text-xl font-bold ${getAccessLevelColor(waterAccessLevel)}`}>
            {waterAccessLevel}%
          </span>
        </div>

        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${waterAccessLevel}%`,
                backgroundColor:
                  waterAccessLevel >= 80 ? 'rgb(34 197 94 / 50%)' :
                  waterAccessLevel >= 60 ? 'rgb(59 130 246 / 70%)' :
                  waterAccessLevel >= 40 ? 'rgb(234 179 8 / 70%)' :
                  waterAccessLevel >= 20 ? 'rgb(249 115 22 / 70%)' : 'rgb(239 68 68 / 70%)'
              }}
            />
          </div>
          <p className="text-sm mt-1 text-gray-600">
            Classificação:{' '}
            <span className={`font-medium ${getAccessLevelColor(waterAccessLevel)}`}>
              {getAccessLevelCategory(waterAccessLevel)}
            </span>
          </p>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CloudRain className="h-5 w-5 text-blue-500 mr-1" />
            <p className="text-sm text-gray-600">Precipitação</p>
          </div>
          <p className="text-lg font-medium">{precipitation} mm</p>
        </div>

        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Thermometer className="h-5 w-5 text-orange-500 mr-1" />
            <p className="text-sm text-gray-600">Temperatura</p>
          </div>
          <p className="text-lg font-medium">{temperature}°C</p>
        </div>

        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Wind className="h-5 w-5 text-teal-500 mr-1" />
            <p className="text-sm text-gray-600">Umidade do Solo</p>
          </div>
          <p className="text-lg font-medium">{soilMoisture}%</p>
        </div>

        <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-center">
          <button className="text-blue-600 text-sm font-medium flex items-center">
            Ver dados históricos
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Recomendações (condicional) */}
      {waterAccessLevel < 60 && (
        <SolutionRecommendations waterAccessLevel={waterAccessLevel} />
      )}
    </div>
  );
};

export default RegionDetail;
