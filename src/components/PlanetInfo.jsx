// src/components/PlanetInfo.js
import { motion } from 'framer-motion';
import celestialBodies from '../data/info';

export default function PlanetInfo({ planet, close, isFocused }) {
  if (!planet) return null;

  const planetData = celestialBodies.find(e => e.name === planet.name);

  // Determine if it's a planet, moon, or star
  const isStar = planetData.type === 'star';
  const isMoon = planetData.type === 'moon';
  const isPlanet = planetData.type === 'planet';
  
  // Define stats based on type
  const stats = [
    { label: "Diameter", value: `${planetData.diameter} km` },
    { label: "Mass", value: planetData.mass },
    { label: "Density", value: planetData.density },
    { label: isStar ? "Surface Temp" : "Avg Surface Temp", value: planetData.surfaceTemp },
    ...(!isStar ? [{ label: "Moons", value: planetData.moons || "N/A" }] : []),
    ...(isStar ? [{ label: "Core Temp", value: planetData.coreTemp }] : []),
    { label: "Age", value: planetData.age }
  ].filter(stat => stat.value !== undefined && stat.value !== null);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 w-80 bg-gray-800/90 backdrop-blur-md border-l-4 border-yellow-400 rounded-l-xl shadow-2xl z-50 overflow-hidden"
    >
      <div className="p-6 h-[90vh] overflow-y-scroll">
        <div className="flex items-center mb-4">
          <img 
            src={planetData.texture} 
            alt={planetData.name}
            className={`w-16 h-16 rounded-full mr-4 object-cover border-2 ${
              isStar ? 'border-yellow-400/50' : 
              isMoon ? 'border-gray-400/50' : 
              'border-blue-400/50'
            }`}
          />
          <div>
            <h2 className="text-2xl font-bold text-yellow-300">{planetData.name}</h2>
            <p className="text-gray-300 italic">
              {isStar && "The Solar System's star"}
              {isPlanet && `The ${planetData.name} planet`}
              {isMoon && `Moon of ${planetData.parent}`}
            </p>
          </div>
          <button 
            onClick={close}
            className="ml-auto text-gray-400 hover:text-white transition-colors"
            title="Back to previous view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-700/50 p-3 rounded-lg">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-lg font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-700/30 p-4 rounded-lg mb-4">
          <h3 className="font-bold text-yellow-300 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Overview
          </h3>
          <p className="text-sm text-gray-300">{planetData.description}</p>
        </div>
        
        <div className="bg-gray-700/30 p-4 rounded-lg">
          <h3 className="font-bold text-yellow-300 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3 8l4.586-4.586a2 2 0 012.828 0L15 8l-4.586 4.586a2 2 0 01-2.828 0L3 8z" clipRule="evenodd" />
            </svg>
            Did you know?
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {planetData.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
        
        {isFocused && (
          <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500 rounded-lg">
            <p className="text-sm text-blue-300">
              <strong>Viewing close-up:</strong> The camera is following this celestial body as it moves through space. 
              Use mouse drag to rotate around it and scroll to zoom in/out.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}