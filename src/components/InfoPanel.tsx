import React from 'react';
import { Droplets, AlertTriangle, AreaChart, Info } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import WaterAccessChart from './WaterAccessChart';

const InfoPanel: React.FC = () => {
  const { regions, seasonType } = useAppContext();

  const avgWaterAccess =
    regions.reduce((sum, region) => sum + region[seasonType].waterAccessLevel, 0) / regions.length;

  const deficitRegions = regions.filter(r => r[seasonType].waterAccessLevel < 40).length;
  const deficitPercentage = (deficitRegions / regions.length) * 100;

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Visão Geral</h2>

      {/* Métricas resumidas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
          <Droplets className="h-6 w-6 text-blue-500 mb-2" />
          <p className="text-sm sm:text-base text-gray-500">Acesso Hídrico Médio</p>
          <p className="text-lg sm:text-xl font-semibold text-gray-800">{avgWaterAccess.toFixed(1)}%</p>
        </div>

        <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-orange-500 mb-2" />
          <p className="text-sm sm:text-base text-gray-500">Regiões com Déficit</p>
          <p className="text-lg sm:text-xl font-semibold text-gray-800">{deficitPercentage.toFixed(0)}%</p>
        </div>
      </div>

      {/* Gráfico */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <AreaChart className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-base font-medium text-gray-700">Distribuição de Acesso Hídrico</h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <WaterAccessChart />
        </div>
      </div>

      {/* Informações */}
      <div>
        <div className="flex items-center mb-3">
          <Info className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-base font-medium text-gray-700">Informações</h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 text-sm sm:text-base text-gray-600 space-y-3 leading-relaxed">
          <p>
            O mapa mostra a análise de acesso hídrico para plantação de algodão.
            As regiões são coloridas de acordo com o nível de acesso à água.
          </p>
          <p>
            Selecione uma região no mapa para ver detalhes específicos e recomendações
            de como melhorar o acesso hídrico em áreas com déficit.
          </p>
          <p>
            Use o controle de temporada para alternar entre estação seca e chuvosa
            e ver como o acesso hídrico varia durante o ano.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
