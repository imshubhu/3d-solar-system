// src/components/Planet.js
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Moon from './Moon';

export default function Planet({
  name,
  size,
  distance,
  texture,
  bumpMap,
  orbitalPeriod,
  rotationPeriod,
  moon = [],
  onHover,
  onFocus
}) {
  const planetRef = useRef();
  const orbitRef = useRef();

  // Load main texture
  const mapTexture = useTexture(texture, (t) => {
    t.flipY = false;
    t.colorSpace = THREE.SRGBColorSpace;
  });

  const bumpTexture = bumpMap ? useTexture(bumpMap, (t) => {
    t.flipY = false;
    t.colorSpace = THREE.SRGBColorSpace;
  }) : null;

  // Create material
  const planetMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: mapTexture,
      bumpMap: bumpTexture,
      bumpScale: bumpTexture ? 0.05 : 0,
      roughness: 0.7,
      metalness: 0.05,
      color: new THREE.Color(1, 1, 1)
    });
  }, [mapTexture, bumpTexture]);

  // Animation for orbit
  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta / orbitalPeriod;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += delta / rotationPeriod;
    }
  });

  return (
    <group ref={orbitRef}>
      {/* Orbit path */}
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[distance, 0.1, 16, 100]} />
        <meshBasicMaterial color="#4a5568" transparent opacity={0.3} />
      </mesh>

      {/* Planet */}
      <mesh
        ref={planetRef}
        name={name}
        position={[distance, 0, 0]}
        rotation-x={Math.PI / 1}
        onClick={(e) => {
          e.stopPropagation();
          onHover({ name, size, distance, texture, orbitalPeriod, rotationPeriod });
          onFocus({
            type: 'planet',
            name,
            size,
            distance
          });
        }}
        scale={1}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <primitive object={planetMaterial} attach="material" />
      </mesh>

      {/* Saturn's rings */}
      {name === 'Saturn' && (
        <mesh
          rotation-x={Math.PI / 2.1}
          position={[distance, 0, 0]}
          scale={[0.8, 0.2, 2.2]}
        >
          <ringGeometry args={[size * 1.7, size * 2.8, 64]} />
          <meshStandardMaterial
            map={useTexture('/textures/saturn_ring.png')}
            transparent
            opacity={0.8}
            roughness={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {
        moon.map((mo) => (
          <Moon
            key={mo.name}
            {...mo}
            onHover={onHover}
            onFocus={onFocus}
          />
        ))
      }
    </group>
  );
}