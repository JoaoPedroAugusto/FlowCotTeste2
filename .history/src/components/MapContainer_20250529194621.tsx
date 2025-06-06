import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WaterAccessMap from './WaterAccessMap';
import MapLegend from './MapLegend';
import MapControls from './MapControls';
import { useAppContext } from '../context/AppContext';
import { RegionData } from '../types';

interface MapContainerProps {
  onSelectRegion: (region: RegionData | null) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ onSelectRegion }) => {
  const { isLoading, seasonType, setSeasonType } = useAppContext();

  return (
    <div className="relative w-full h-screen bg-sky-50 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">Carregando mapa...</p>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 20, 25], fov: 45 }}
        shadows
        className="w-full h-full"
      >
        <color attach="background" args={['#f0f9ff']} />
        <Suspense fallback={null}>
          <WaterAccessMap onSelectRegion={onSelectRegion} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={15}
            maxDistance={35}
          />
          <MapControls />
        </Suspense>
      </Canvas>

      {/* Legenda - adaptável */}
      <div className="absolute top-4 left-4 z-20 max-w-[90vw] sm:max-w-xs">
        <MapLegend />
      </div>

      {/* Seletor de estação - responsivo */}
      <div className="absolute top-4 right-4 z-20 w-36 sm:w-44">
        <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-md">
          <select
            value={seasonType}
            onChange={(e) => setSeasonType(e.target.value as 'dry' | 'wet')}
            className="w-full text-xs sm:text-sm p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dry">Estação Seca</option>
            <option value="wet">Estação Chuvosa</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
