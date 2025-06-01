import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import WhatIsYieldGap from './pages/WhatIsYieldGap';
import HistoricalEvolution from './pages/HistoricalEvolution';
import ToolsForYieldGap from './pages/ToolsForYieldGap';
import SolveYieldGap from './pages/SolveYieldGap';
import MinecraftYieldGap from './pages/MinecraftYieldGap';
import StepsToAvoid from './pages/StepsToAvoid';
import AboutUs from './pages/AboutUs';
import Conclusions from './pages/Conclusions';
import NotFound from './pages/NotFound';
import ParrotMascot from './components/ParrotMascot';
import AnimatedBackground from './components/AnimatedBackground';
import FlyingBirds from './components/FlyingBirds';
import MapaPage from './pages/MapaDinamico';

function App() {
  return (
    <>
      <AnimatedBackground />
      <FlyingBirds />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="what-is-yield-gap" element={<WhatIsYieldGap />} />
          <Route path="historical-evolution" element={<HistoricalEvolution />} />
          <Route path="tools-for-yield-gap" element={<ToolsForYieldGap />} />
          <Route path="solve-yield-gap" element={<SolveYieldGap />} />
          <Route path="minecraft-yield-gap" element={<MinecraftYieldGap />} />
          <Route path="steps-to-avoid" element={<StepsToAvoid />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="conclusions" element={<Conclusions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="mapa" element={<MapaPage />} />
        </Route>
      </Routes>
      <ParrotMascot />
    </>
  );
}

export default App;