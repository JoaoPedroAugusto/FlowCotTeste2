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
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          <div className="flex-1 relative h-[60vh] lg:h-auto">
            <MapContainer onSelectRegion={setSelectedRegion} />
          </div>
          <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white overflow-y-auto">
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
