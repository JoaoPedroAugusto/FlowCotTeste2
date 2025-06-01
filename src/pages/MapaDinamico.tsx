import React from 'react';
import { AppProvider } from '../context/AppContext';
import Header from '../components/Header';
import MapContainer from '../components/MapContainer';
import InfoPanel from '../components/InfoPanel';
import RegionDetail from '../components/RegionDetail';
import { RegionData } from '../types';

function MapaDinamico() {
  const [selectedRegion, setSelectedRegion] = React.useState<RegionData | null>(null);
  
  return (
    <AppProvider>
      {/* Use h-screen para garantir que o layout ocupe toda a altura da tela */}
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header pode precisar de ajustes de z-index se sobrepor o conteúdo */}
        <Header /> 
        {/* Flex-1 garante que esta div ocupe o espaço restante 
            Overflow-hidden previne barras de rolagem indesejadas no container principal 
            Flex-col para empilhar verticalmente em mobile, lg:flex-row para lado a lado em telas grandes */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Mapa: flex-1 para ocupar espaço disponível. 
              h-[60vh] define altura fixa em mobile/telas menores. 
              lg:h-auto permite que a altura seja automática em telas grandes (ocupando toda a altura disponível) */}
          <div className="flex-1 relative h-[60vh] lg:h-full">
            <MapContainer onSelectRegion={setSelectedRegion} />
          </div>
          {/* Painel de Informações: 
              w-full em mobile, lg:w-96 largura fixa em telas grandes.
              border-t/lg:border-l para bordas responsivas.
              overflow-y-auto para permitir rolagem interna se o conteúdo exceder a altura. 
              h-auto em mobile (altura baseada no conteúdo), lg:h-full para ocupar altura total em telas grandes */}
          <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white overflow-y-auto h-auto lg:h-full">
            {selectedRegion ? (
              <RegionDetail region={selectedRegion} />
            ) : (
              <InfoPanel />
            )}
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default MapaDinamico;

