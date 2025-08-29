// src/components/Galaxy.js
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Galaxy({ solarSystemPosition = new THREE.Vector3(50, 0, 0) }) {
    const galaxyRef = useRef();
    const diskRef = useRef();
    const bulgeRef = useRef();

    // Load high-quality galaxy textures
    const {
        diskTexture,
        bulgeTexture,
        starfieldTexture
    } = useTexture({
        diskTexture: '/textures/milky_way.jpg',
        bulgeTexture: '/textures/milky_way.jpg',
        starfieldTexture: '/textures/stars.jpg'
    });

    // Create galaxy disk geometry
    const diskGeometry = useMemo(() => {
        return new THREE.RingGeometry(5, 100, 128, 1, 0, Math.PI * 2);
    }, []);

    // Create bulge geometry
    const bulgeGeometry = useMemo(() => {
        return new THREE.SphereGeometry(5, 32, 32);
    }, []);

    // Create custom material for galaxy disk
    const diskMaterial = useMemo(() => {
        return new THREE.MeshBasicMaterial({
            map: diskTexture,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });
    }, [diskTexture]);

    // Create material for galactic bulge
    const bulgeMaterial = useMemo(() => {
        return new THREE.MeshBasicMaterial({
            map: bulgeTexture,
            transparent: true,
            opacity: 1.0
        });
    }, [bulgeTexture]);

    // Animation for subtle galaxy rotation
    useFrame((state) => {
        if (diskRef.current) {
            // Very slow rotation to simulate galaxy movement
            diskRef.current.rotation.z = state.clock.getElapsedTime() * 0.001;
        }
    });

    return (
        <group ref={galaxyRef} rotation-x={-Math.PI / 2}>
            {/* Galaxy disk - main structure */}
            <mesh
                ref={diskRef}
                geometry={diskGeometry}
                material={diskMaterial}
            />

            {/* Galactic bulge - brighter center */}
            <mesh
                ref={bulgeRef}
                rotation-x={Math.PI / 2.1}
                rotation-y={Math.PI / 2}
                geometry={bulgeGeometry}
                material={bulgeMaterial}
                position={[0, 0, 0]}
            />

            {/* Star field layer for added depth */}
            <mesh position={[0, 1, 0]}>
                <planeGeometry args={[100, 100, 32, 32]} />
                <meshBasicMaterial
                    map={starfieldTexture}
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Solar system marker */}
            <group position={solarSystemPosition}>
                {/* Pulsing glow */}
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshBasicMaterial
                        color="#00FFFF"
                        transparent
                        opacity={0.3}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>

                {/* Solar system label */}
                {/* <Html distanceFactor={10}>
                    <div className="text-cyan-300 font-bold text-sm bg-black/50 px-2 py-1 rounded">
                        Solar System
                    </div>
                </Html> */}
            </group>
        </group>
    );
}