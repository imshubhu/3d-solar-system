// src/components/Planet.js
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export default function Moon({
    name,
    size,
    positionSize,
    distance,
    orbitalPeriod,
    rotationPeriod,
    texture,
    onHover,
    onFocus
}) {
    const moonOrbitRef = useRef();

    // Animation for orbit
    useFrame((state, delta) => {
        // Moon animation
        if (moonOrbitRef.current) {
            moonOrbitRef.current.rotation.y = state.clock.getElapsedTime() * rotationPeriod;
        }
    });

    return (
        <group ref={moonOrbitRef} position={[distance, 0, 0]}>
            <mesh
                name="Moon"
                position={[positionSize, 0, 0]}
                onClick={(e) => {
                    e.stopPropagation();
                    onHover({
                        name: name,
                        size: size,
                        distance: distance + positionSize,
                        texture: texture,
                        orbitalPeriod: orbitalPeriod * 0.074,
                        rotationPeriod: 27.3
                    });
                    onFocus({
                        type: 'moon',
                        planet: 'Earth',
                        size: size
                    });
                }}
            >
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    map={useTexture(texture)}
                    roughness={0.8}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
}