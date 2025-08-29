// src/data/planets.js

const rotatePeriod = 10

const planetData = [
    {
        name: "Mercury",
        size: 0.5,          // Slightly larger for visibility
        distance: 15,       // Increased distance from sun
        texture: "/textures/mercury.jpg",
        // orbitalPeriod: 0.24,
        orbitalPeriod: 0.24 * rotatePeriod,
        rotationPeriod: 58.6 * rotatePeriod
    },
    {
        name: "Venus",
        size: 0.9,          // Slightly larger
        distance: 22,       // Increased distance
        texture: "/textures/venus.jpg",
        // orbitalPeriod: 0.62,
        orbitalPeriod: 0.62 * rotatePeriod,
        rotationPeriod: -243 * rotatePeriod
    },
    {
        name: "Earth",
        size: 1,
        distance: 30,       // Increased distance
        texture: "/textures/earth.jpg",
        bumpMap: "/textures/earth_bump.jpg",
        // orbitalPeriod: 1,
        orbitalPeriod: 1 * rotatePeriod,
        rotationPeriod: 1 * rotatePeriod,
        moon: [
            {
                name: "Moon",
                size: 1 * 0.27,
                positionSize: 1 * 2.5,
                distance: 30,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 1 * rotatePeriod,
                rotationPeriod: 0.2,
            }
        ]
    },
    {
        name: "Mars",
        size: 0.6,          // Slightly larger
        distance: 40,       // Increased distance
        texture: "/textures/mars.jpg",
        // orbitalPeriod: 1.88,
        orbitalPeriod: 1.88 * rotatePeriod,
        rotationPeriod: 1.03 * rotatePeriod,
        moon: [
            {
                name: "Phobos",
                size: 0.6 * 0.27,
                positionSize: 1 * 2,
                distance: 40,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.0003 * rotatePeriod,
                rotationPeriod: 0.3,
            },
            {
                name: "Deimos",
                size: 0.6 * 0.17,
                positionSize: 1 * 2.5,
                distance: 40,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.0008 * rotatePeriod,
                rotationPeriod: 1.26,
            },
        ]
    },
    {
        name: "Jupiter",
        size: 6,            // Reduced size for better scale
        distance: 60,       // Adjusted distance
        texture: "/textures/jupiter.jpg",
        // orbitalPeriod: 11.86,
        orbitalPeriod: 11.86 * rotatePeriod,
        rotationPeriod: 0.41 * rotatePeriod,
        moon: [
            {
                name: "Io",
                size: 2 * 0.28,
                positionSize: 2 * 4.5,
                distance: 60,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.005 * rotatePeriod,
                rotationPeriod: 1.77,
            },
            {
                name: "Europa",
                size: 2 * 0.24,
                positionSize: 2 * 5.5,
                distance: 60,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.01 * rotatePeriod,
                rotationPeriod: 3.55,
            },
        ]
    },
    {
        name: "Saturn",
        size: 5,            // Reduced size
        distance: 80,       // Adjusted distance
        texture: "/textures/saturn.jpg",
        // orbitalPeriod: 29.46,
        orbitalPeriod: 29.46 * rotatePeriod,
        rotationPeriod: 0.44 * rotatePeriod,
        moon: [
            {
                name: "Titan",
                size: 2 * 0.2,
                positionSize: 2 * 5,
                distance: 80,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.04 * rotatePeriod,
                rotationPeriod: 3.95,
            },
        ]
    },
    {
        name: "Uranus",
        size: 2.5,          // Slightly larger
        distance: 100,      // Adjusted distance
        texture: "/textures/uranus.jpg",
        // orbitalPeriod: 84.01,
        orbitalPeriod: 84.01 * rotatePeriod,
        rotationPeriod: -0.72 * rotatePeriod,
        moon: [
            {
                name: "Titania",
                size: 2 * 0.12,
                positionSize: 2 * 2.5,
                distance: 100,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.05 * rotatePeriod,
                rotationPeriod: 1,
            },
        ]
    },
    {
        name: "Neptune",
        size: 2.4,          // Slightly larger
        distance: 120,      // Adjusted distance
        texture: "/textures/neptune.jpg",
        // orbitalPeriod: 164.8,
        orbitalPeriod: 164.8 * rotatePeriod,
        rotationPeriod: 0.67 * rotatePeriod,
        moon: [
            {
                name: "Triton",
                size: 2 * 0.1,
                positionSize: 2 * 2,
                distance: 120,       // Increased distance
                texture: "/textures/moon.jpg",
                orbitalPeriod: 0.02 * rotatePeriod,
                rotationPeriod: -2,
            },
        ]
    }
];

export default planetData;