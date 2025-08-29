// src/components/CameraController.js
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CameraController({ 
  focusTarget, 
  viewMode, 
  setViewMode,
  solarSystemPosition = new THREE.Vector3(50, 0, 0)
}) {
  const { scene, gl } = useThree();
  const controlsRef = useRef(null);
  const targetPosition = useRef(new THREE.Vector3());
  const targetDistance = useRef(150);
  const isTransitioning = useRef(false);
  
  // Get OrbitControls instance reliably
  useEffect(() => {
    const checkControls = () => {
      if (gl.domElement._controls) {
        controlsRef.current = gl.domElement._controls;
        return true;
      }
      return false;
    };

    if (!checkControls()) {
      const timer = setInterval(checkControls, 100);
      return () => clearInterval(timer);
    }
  }, [gl]);

  // Handle view mode changes
  useEffect(() => {
    if (viewMode === 'galaxy') {
      targetPosition.current.set(0, 0, 0);
      targetDistance.current = 1500;
    } else if (viewMode === 'solar-system') {
      targetPosition.current.copy(solarSystemPosition);
      targetDistance.current = 150;
    } else if (viewMode === 'solar-system-focused' && focusTarget) {
      // Get planet's position
      let targetObject;
      if (focusTarget.type === 'planet') {
        targetObject = scene.getObjectByName(focusTarget.name);
      } else if (focusTarget.type === 'moon' && focusTarget.planet === 'Earth') {
        targetObject = scene.getObjectByName('Moon');
      }
      
      if (targetObject) {
        targetObject.getWorldPosition(targetPosition.current);
        // Adjust position to be relative to solar system
        targetPosition.current.add(solarSystemPosition);
        
        // Set appropriate distance based on planet size
        const distance = focusTarget.type === 'planet' ? 
          Math.max(10, focusTarget.size * 15) : 
          Math.max(5, focusTarget.size * 5);
          
        targetDistance.current = distance;
      }
    }
    
    isTransitioning.current = true;
    setTimeout(() => isTransitioning.current = false, 1000);
  }, [viewMode, focusTarget, solarSystemPosition, scene]);

  useFrame((state) => {
    if (!controlsRef.current || !scene) return;
    
    const controls = controlsRef.current;
    
    // Update target position for moving objects in solar system view
    if (viewMode === 'solar-system-focused' && focusTarget) {
      let targetObject;
      if (focusTarget.type === 'planet') {
        targetObject = scene.getObjectByName(focusTarget.name);
      } else if (focusTarget.type === 'moon' && focusTarget.planet === 'Earth') {
        targetObject = scene.getObjectByName('Moon');
      }
      
      if (targetObject) {
        targetObject.getWorldPosition(targetPosition.current);
        // Adjust position to be relative to solar system
        targetPosition.current.add(solarSystemPosition);
      }
    }
    
    // Smoothly move camera target
    controls.target.lerp(targetPosition.current, 0.1);
    
    // Smoothly adjust distance
    const currentDistance = controls.object.position.distanceTo(controls.target);
    const newDistance = THREE.MathUtils.damp(
      currentDistance, 
      targetDistance.current, 
      10, 
      state.delta
    );
    
    // Move camera along the view direction
    const direction = new THREE.Vector3()
      .subVectors(controls.object.position, controls.target)
      .normalize();
      
    controls.object.position.copy(controls.target).add(
      direction.multiplyScalar(newDistance)
    );
    
    // Update controls
    controls.update();
  });

  return null;
}