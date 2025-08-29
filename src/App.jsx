// src/App.js
import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Html, 
  Loader,
  Environment,
  Stars,
  useTexture
} from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Planet from './components/Planet';
import PlanetInfo from './components/PlanetInfo';
import CameraController from './components/CameraController';
import Galaxy from './components/Galaxy';
import planetData from './data/planets';
import * as THREE from 'three';

function App() {
  const [activePlanet, setActivePlanet] = useState(null);
  const [focusTarget, setFocusTarget] = useState(null);
  const [viewMode, setViewMode] = useState('galaxy'); // 'galaxy' or 'solar-system'
  
  // Solar system position in the galaxy (26,000 light-years from center)
  // Scaled down to visible size in our scene
  const solarSystemPosition = useMemo(() => new THREE.Vector3(50, 0, 0), []);
  
  // Camera settings based on view mode
  const cameraSettings = useMemo(() => {
    switch (viewMode) {
      case 'galaxy':
        return { 
          position: [0, 50, 1500],
          fov: 45,
          near: 1,
          far: 5000
        };
      case 'solar-system':
      case 'solar-system-focused':
        return { 
          position: [0, 50, 150],
          fov: 60,
          near: 1,
          far: 1000
        };
      default:
        return { 
          position: [0, 50, 1500],
          fov: 45,
          near: 1,
          far: 5000
        };
    }
  }, [viewMode]);

  return (
    <div className="h-screen w-full bg-gray-900 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Canvas 
          camera={cameraSettings}
        >
          <color attach="background" args={['#000000']} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          
          {/* ONLY show galaxy when in galaxy view mode */}
          {viewMode === 'galaxy' && (
            <Galaxy solarSystemPosition={solarSystemPosition} />
          )}
          
          {/* ONLY show solar system when NOT in galaxy view mode */}
          {viewMode !== 'galaxy' && (
            <group>
              <Sun onHover={setActivePlanet} />
              
              {planetData.map((planet) => (
                <Planet 
                  key={planet.name} 
                  {...planet}
                  onHover={setActivePlanet}
                  onFocus={(target) => {
                    setFocusTarget(target);
                    setViewMode('solar-system-focused');
                  }}
                />
              ))}
            </group>
          )}
          
          {/* Galaxy view star field - ONLY in galaxy view */}
          {viewMode === 'galaxy' && (
            <Stars 
              radius={1000} 
              depth={100} 
              count={10000} 
              factor={8} 
              saturation={0} 
              fade 
              speed={2} 
            />
          )}
          
          {/* Solar system star field - ONLY in solar system view */}
          {viewMode !== 'galaxy' && (
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1} 
            />
          )}
          
          <Environment 
            preset="sunset" 
            background={false}
            resolution={256}
          />
          
          <OrbitControls 
            enableZoom
            enablePan
            minDistance={viewMode === 'galaxy' ? 100 : 5}
            maxDistance={viewMode === 'galaxy' ? 3000 : 500}
            autoRotate={viewMode === 'galaxy' || (viewMode !== 'galaxy' && !focusTarget)}
            autoRotateSpeed={viewMode === 'galaxy' ? 0.1 : (focusTarget ? 0 : 0.5)}
          />
          
          <EffectComposer>
            <Bloom intensity={viewMode === 'galaxy' ? 0.3 : 0.8} kernelSize={3} />
          </EffectComposer>
          
          {/* Camera controller */}
          <CameraController 
            focusTarget={focusTarget} 
            viewMode={viewMode}
            setViewMode={setViewMode}
            solarSystemPosition={solarSystemPosition}
          />
        </Canvas>
        <Loader />
      </div>

      <PlanetInfo 
        planet={activePlanet} 
        close={() => {
          setActivePlanet(null);
          
          if (viewMode === 'solar-system-focused') {
            setFocusTarget(null);
            setViewMode('solar-system');
          }
        }} 
        isFocused={viewMode === 'solar-system-focused'}
      />
      
      {/* Navigation controls */}
      <div className="fixed top-0 left-0 w-full z-50 p-4">
        <h1 className="text-3xl font-bold text-center text-yellow-300 bg-gray-900/70 backdrop-blur-sm p-3 rounded-xl shadow-lg">
          {viewMode === 'galaxy' ? 'Milky Way Galaxy' : 'Solar System'}
        </h1>
      </div>
      
      {/* View mode toggle */}
      <div className="fixed bottom-4 left-4 z-50">
        {viewMode === 'galaxy' ? (
          <button
            onClick={() => {
              // First transition to solar system overview
              setViewMode('solar-system');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Zoom to Solar System
          </button>
        ) : (
          <button
            onClick={() => {
              setFocusTarget(null);
              setViewMode('galaxy');
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Galaxy View
          </button>
        )}
      </div>
      
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-lg text-center max-w-md">
          <span className="font-semibold">Navigation:</span> 
          <span className="mx-2">•</span> 
          {viewMode === 'galaxy' ? (
            <>
              <span>Drag to rotate galaxy</span>
              <span className="mx-2">•</span> 
              <span>Scroll to zoom</span>
              <span className="mx-2">•</span> 
              <span>Click solar system marker to zoom in</span>
            </>
          ) : (
            <>
              <span>Click planets to focus</span>
              <span className="mx-2">•</span> 
              <span>Drag to rotate view</span>
              <span className="mx-2">•</span> 
              <span>Scroll to zoom</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Sun({ onHover }) {
  const sun_texture = useTexture('/textures/sun.jpg')
  return (
    <>
      {/* Sun body */}
      <mesh name="Sun" position={[0, 0, 0]} 
        onClick={(e) => {
          e.stopPropagation();
          onHover({ name: 'Sun' });
        }}
      >
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial 
          map={sun_texture} 
          emissive="#ffaa00"
          emissiveIntensity={2}
          transparent
        />
      </mesh>
      
      {/* Sun glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[8, 64, 64]} />
        <meshStandardMaterial 
          color="#ffff00"
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

export default App;