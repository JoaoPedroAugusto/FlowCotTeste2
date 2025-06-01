import React, { useRef, useState, useEffect, memo, useMemo } from 'react';
import { useFrame, ThreeEvent, useThree, extend } from '@react-three/fiber';
import { useAppContext } from '../context/AppContext';
import { RegionData } from '../types';
import { getRegionColor } from '../utils/colorUtils';
import * as THREE from 'three';
import { Cloud, shaderMaterial, Text } from '@react-three/drei'; // Import Text

// --- Custom Shader Material for Terrain ---
const TerrainShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColorA: new THREE.Color('#a1c05a'), // Lighter green
    uColorB: new THREE.Color('#7d9a4c')  // Darker green
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying float vElevation;
    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vElevation = worldPosition.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;
    varying float vElevation;

    float random (vec2 st) {
        return fract(sin(dot(st.xy,
                             vec2(12.9898,78.233)))*
            43758.5453123);
    }

    void main() {
      float mixFactor = smoothstep(0.0, 0.5, vUv.y);
      vec3 color = mix(uColorA, uColorB, mixFactor);
      float noise = random(vUv * 20.0 + uTime * 0.1) * 0.05;
      color += noise;
      gl_FragColor = vec4(color, 1.0);
    }
  `
);
extend({ TerrainShaderMaterial });
// --- End Custom Shader ---

interface WaterAccessMapProps {
  onSelectRegion: (region: RegionData | null) => void;
};

// --- Componente Planta de Algodão ---
const CottonPlant: React.FC<{ position: [number, number, number], scale?: number }> = ({ position, scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Animação sutil (opcional)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={[scale, scale, scale]}>
      {/* Caule */}
      <mesh castShadow position={[0, 0.3 * scale, 0]}>
        <cylinderGeometry args={[0.05 * scale, 0.07 * scale, 0.6 * scale, 8]} />
        <meshStandardMaterial color="#5a4a3a" roughness={0.8} />
      </mesh>
      {/* Bolas de Algodão (Esferas) */}
      {[...Array(5)].map((_, i) => (
        <mesh castShadow key={i} position={[
          ( - 0.5) * 0.3 * scale,
          (0.6 * 0.3) * scale, // Posiciona acima do caule
          (  0.5) * 0.3 * scale
        ]}>
          <sphereGeometry args={[0.1 * scale + Math.random() * 0.05 * scale, 12, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
        </mesh>
      ))}
      {/* Folhas (Planos ou formas simples) - Opcional */}
      <mesh position={[0.1 * scale, 0.4 * scale, 0]} rotation={[0, 0, Math.PI / 6]}>
         <planeGeometry args={[0.2 * scale, 0.1 * scale]} />
         <meshStandardMaterial color="#3e7d32" side={THREE.DoubleSide} roughness={0.7}/>
      </mesh>
       <mesh position={[-0.1 * scale, 0.3 * scale, 0.1 * scale]} rotation={[0, Math.PI / 2, -Math.PI / 5]}>
         <planeGeometry args={[0.15 * scale, 0.08 * scale]} />
         <meshStandardMaterial color="#4caf50" side={THREE.DoubleSide} roughness={0.7}/>
      </mesh>
    </group>
  );
};
// --- Fim Componente Planta de Algodão ---

// Componente para o modelo do Estábulo
const Stable: React.FC<{ position: [number, number, number] }> = ({ position }) => (
  <group position={position}>
    <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[4, 3, 6]} />
      <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
    </mesh>
    <mesh position={[0, 4.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
      <coneGeometry args={[3.5, 3, 4]} />
      <meshStandardMaterial color="#A0522D" roughness={0.8} metalness={0.1} />
    </mesh>
    <mesh position={[0, 0.75, 3.01]} castShadow receiveShadow>
      <boxGeometry args={[1.5, 2, 0.05]} />
      <meshStandardMaterial color="#5a2d00" />
    </mesh>
  </group>
);

// Componente para o Sol
const Sun: React.FC<{ position: [number, number, number] }> = ({ position }) => (
  <mesh position={position}>
    <sphereGeometry args={[2, 32, 32]} />
    <meshBasicMaterial color="#FFD700" /> 
  </mesh>
);

// Componente separado para gerenciar e renderizar as nuvens
const CloudsComponent: React.FC = () => {
  const cloudData = useRef<{ position: [number, number, number]; scale: [number, number, number] }[]>([]);
  useEffect(() => {
    if (cloudData.current.length === 0) {
      cloudData.current = Array.from({ length: 8 }).map(() => ({
        position: [ Math.random() * 60 - 30, 12 + Math.random() * 6, Math.random() * 60 - 30 ],
        scale: [Math.random() * 3 + 2, Math.random() * 2 + 1, Math.random() * 3 + 2]
      }));
    }
  }, []);
  return (
    <group>
      {cloudData.current.map((cloud, i) => (
        <Cloud key={i} {...cloud} opacity={0.6} speed={0.05} width={cloud.scale[0] * 2} depth={cloud.scale[2]} segments={20} color="#ffffff" />
      ))}
    </group>
  );
};

// Componente para as gotas de chuva
const Rain: React.FC = () => {
  const rainRef = useRef<THREE.Points>(null);
  const numDrops = 5000;
  const positions = useMemo(() => {
    const posArray = new Float32Array(numDrops * 3);
    for (let i = 0; i < numDrops; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 80;
      posArray[i * 3 + 1] = Math.random() * 40;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return posArray;
  }, []);
  const rainMaterial = useMemo(() => new THREE.PointsMaterial({ color: '#a0c0ff', size: 0.15, transparent: true, opacity: 0.5, sizeAttenuation: true }), []);
  useFrame((_, delta) => {
    if (rainRef.current) {
      const positions = rainRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < numDrops; i++) {
        positions[i * 3 + 1] -= 30 * delta;
        if (positions[i * 3 + 1] < -2) { positions[i * 3 + 1] = 40; }
      }
      rainRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <points ref={rainRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={numDrops} array={positions} itemSize={3} />
      </bufferGeometry>
      <primitive attach="material" object={rainMaterial} />
    </points>
  );
};

const WaterAccessMap: React.FC<WaterAccessMapProps> = ({ onSelectRegion }) => {
  const { regions, seasonType } = useAppContext();
  const terrainGroup = useRef<THREE.Group>(null);
  const terrainMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const { scene } = useThree();

  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(1.5);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(0.4);
  const [fogColor, setFogColor] = useState(new THREE.Color('#f0f9ff'));
  const [fogNear, setFogNear] = useState(35);
  const [fogFar, setFogFar] = useState(60);

  const treeData = useRef<{ x: number; z: number; scale: number }[]>([]);
  const cottonPlantData = useRef<{ x: number; z: number; scale: number }[]>([]); // Data for cotton plants

  useEffect(() => {
    // Generate tree data only once
    if (treeData.current.length === 0) {
      const generatedTrees = Array.from({ length: 50 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 12 + Math.random() * 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const scale = 1.2 + Math.random() * 0.6;
        if (Math.sqrt(x*x + z*z) > 5) { return { x, z, scale }; }
        return null;
      }).filter(t => t !== null) as { x: number; z: number; scale: number }[];
      treeData.current = generatedTrees;
    }
    // Generate cotton plant data only once
    if (cottonPlantData.current.length === 0) {
        const generatedPlants = Array.from({ length: 30 }).map(() => { // Number of cotton plants
            const angle = Math.random() * Math.PI * 2;
            const radius = 5 + Math.random() * 10; // Place them closer to the center/regions
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const scale = 0.8 + Math.random() * 0.4; // Scale for cotton plants
            // Ensure they don't overlap too much with trees or regions (simple check)
            if (Math.sqrt(x*x + z*z) < 15) { // Example constraint
                 return { x, z, scale };
            }
            return null;
        }).filter(p => p !== null) as { x: number; z: number; scale: number }[];
        cottonPlantData.current = generatedPlants;
    }
  }, []);

  useEffect(() => {
    if (seasonType === 'wet') {
      setDirectionalLightIntensity(0.7);
      setAmbientLightIntensity(0.5);
      setFogColor(new THREE.Color('#b0c4de'));
      setFogNear(30); setFogFar(55);
    } else {
      setDirectionalLightIntensity(1.5);
      setAmbientLightIntensity(0.4);
      setFogColor(new THREE.Color('#e6f7ff'));
      setFogNear(40); setFogFar(70);
    }
  }, [seasonType]);

  useEffect(() => {
    scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);
  }, [fogColor, fogNear, fogFar, scene]);

  useFrame(({ clock }) => {
    if (terrainMaterialRef.current) {
      terrainMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  const handleRegionClick = (event: ThreeEvent<MouseEvent>, region: RegionData) => {
    event.stopPropagation();
    onSelectRegion(region);
  };

  const createTree = (scale = 1) => (
    <group scale={[scale, scale, scale]}>
      <mesh position={[0, 0.75 * scale, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15 * scale, 0.2 * scale, 1.5 * scale, 8]} />
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.75 * scale, 0]} castShadow receiveShadow>
        <coneGeometry args={[0.6 * scale, 2 * scale, 8]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.8} />
      </mesh>
    </group>
  );

  const createRiverSegment = (position: [number, number, number]) => (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} position-y={0.05}>
      <planeGeometry args={[2, 4]} />
      <meshStandardMaterial color="#60a5fa" transparent={true} opacity={0.7} metalness={0.2} roughness={0.4} />
    </mesh>
  );

  const createMountain = (position: [number, number, number], scale = 1) => (
    <group position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, 2 * scale * 0.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[3 * scale, 6 * scale, 16]} />
        <meshStandardMaterial color="#8c8c8c" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, (2 * scale * 0.5) + (1.5 * scale * 0.5) - 0.5 , 0]} castShadow receiveShadow>
        <coneGeometry args={[1 * scale, 2 * scale, 8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.05} />
      </mesh>
    </group>
  );

  return (
    <group ref={terrainGroup} position={[0, -2, 0]}>
      {/* Plano de base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60, 128, 128]} />
        {/* @ts-ignore */} 
        <terrainShaderMaterial ref={terrainMaterialRef} />
      </mesh>

      {/* Rio */}
      <group position={[0, 0.1, 0]}>
        {createRiverSegment([0, 0, -12])} {createRiverSegment([1.5, 0, -8])} {createRiverSegment([0.5, 0, -4])}
        {createRiverSegment([-0.5, 0, 0])} {createRiverSegment([-1.5, 0, 4])} {createRiverSegment([0, 0, 8])}
        {createRiverSegment([1, 0, 12])}
      </group>

      {/* Regiões */}
      {regions.map((region) => {
        const regionData = region[seasonType];
        const baseColor = getRegionColor(regionData.waterAccessLevel);
        const elevation = 0.2 + (regionData.waterAccessLevel / 100) * 0.5;
        return (
          <group key={region.id} position={[region.x, 0.1, region.z]}>
            <mesh
              castShadow receiveShadow
              onClick={(e) => handleRegionClick(e, { ...region, currentData: regionData })}
              onPointerOver={(e) => {
                document.body.style.cursor = 'pointer';
                if (e.object instanceof THREE.Mesh && e.object.material instanceof THREE.MeshStandardMaterial) {
                  e.object.userData.originalColor = e.object.material.color.clone();
                  e.object.material.color.lerp(new THREE.Color(0xffffff), 0.3);
                }
                e.object.scale.y = 1.15;
              }}
              onPointerOut={(e) => {
                document.body.style.cursor = 'default';
                if (e.object instanceof THREE.Mesh && e.object.material instanceof THREE.MeshStandardMaterial && e.object.userData.originalColor) {
                  e.object.material.color.copy(e.object.userData.originalColor);
                }
                e.object.scale.y = 1;
              }}
            >
              <boxGeometry args={[region.width, elevation, region.depth]} />
              <meshStandardMaterial color={baseColor} roughness={0.7} metalness={0.1} />
            </mesh>
            {/* Adiciona Texto com nome da região acima do bloco */}
            <Text
              position={[0, elevation / 2 + 0.5, 0]} // Posição acima do centro do bloco
              color="#222222" 
              fontSize={0.4}
              maxWidth={region.width * 1.5}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign={'center'}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#ffffff"
            >
              {region.name}
            </Text>
          </group>
        );
      })}

      {/* Árvores */}
      {treeData.current.map((tree, i) => (
        <group key={`tree-${i}`} position={[tree.x, 0, tree.z]}>
          {createTree(tree.scale)}
        </group>
      ))}
      
      {/* Plantas de Algodão */}
      {cottonPlantData.current.map((plant, i) => (
          <CottonPlant key={`cotton-${i}`} position={[plant.x, 0.1, plant.z]} scale={plant.scale} />
      ))}

      {/* Estábulo */}
      <Stable position={[12, 0, -14]} />

      {/* Montanhas */}
      {createMountain([-22, 0, -20], 2.5)} {createMountain([20, 0, -18], 1.8)}
      {createMountain([-18, 0, 22], 2.0)} {createMountain([15, 0, 20], 2.4)}

      {/* Sol */}
      {seasonType === 'dry' && <Sun position={[30, 25, -30]} />}

      {/* Nuvens */}
      <CloudsComponent />

      {/* Chuva */}
      {seasonType === 'wet' && <Rain />}

      {/* Luzes */}
      <directionalLight position={[15, 20, 10]} intensity={directionalLightIntensity} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-25} shadow-camera-right={25} shadow-camera-top={25} shadow-camera-bottom={-25} />
      <directionalLight position={[-10, 15, -10]} intensity={directionalLightIntensity * 0.3} />
      <ambientLight intensity={ambientLightIntensity} />

    </group>
  );
};

export default memo(WaterAccessMap);

