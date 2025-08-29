// src/data/celestialBodies.js
const celestialBodies = [
    // SUN
    {
      name: "Sun",
      type: "star",
      size: 109, // Earth radii
      distance: 0,
      texture: "/textures/sun.jpg",
      orbitalPeriod: 0,
      rotationPeriod: 25,
      diameter: 1392700,
      mass: "1.989 × 10^30 kg",
      density: "1.408 g/cm³",
      surfaceTemp: "5,500°C",
      coreTemp: "15 million °C",
      age: "4.6 billion years",
      composition: "Hydrogen (74%), Helium (24%), Other elements (2%)",
      description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.",
      facts: [
        "The Sun accounts for 99.86% of the mass in the Solar System",
        "It takes about 8 minutes for sunlight to reach Earth",
        "The Sun's core temperature is about 15 million degrees Celsius",
        "The Sun is about 4.6 billion years old",
        "It will eventually expand into a red giant and engulf the inner planets"
      ]
    },
    
    // PLANETS
    {
      name: "Mercury",
      type: "planet",
      size: 0.38,
      distance: 15,
      texture: "/textures/mercury.jpg",
      orbitalPeriod: 0.24,
      rotationPeriod: 58.6,
      diameter: 4879,
      mass: "3.3 × 10^23 kg",
      density: "5.427 g/cm³",
      surfaceTemp: "-173°C to 427°C",
      moons: 0,
      atmosphere: "Trace amounts of oxygen, sodium, hydrogen, helium, and potassium",
      description: "Mercury is the smallest and innermost planet in the Solar System. It's named after the Roman deity Mercury, the messenger to the gods.",
      facts: [
        "Mercury has the most extreme temperature differences of any planet in our Solar System",
        "It has the shortest year of all planets at just 88 Earth days",
        "Mercury has no atmosphere to retain heat",
        "It's the second densest planet after Earth",
        "Mercury has a large iron core that makes up about 60% of its mass"
      ]
    },
    {
      name: "Venus",
      type: "planet",
      size: 0.95,
      distance: 22,
      texture: "/textures/venus.jpg",
      orbitalPeriod: 0.62,
      rotationPeriod: -243,
      diameter: 12104,
      mass: "4.87 × 10^24 kg",
      density: "5.243 g/cm³",
      surfaceTemp: "467°C",
      moons: 0,
      atmosphere: "Carbon dioxide (96.5%), Nitrogen (3.5%), Sulfur dioxide (0.015%)",
      description: "Venus is the second planet from the Sun. It's named after the Roman goddess of love and beauty.",
      facts: [
        "Venus is the hottest planet in our solar system",
        "A day on Venus is longer than its year",
        "Venus rotates in the opposite direction to most planets",
        "Its surface is hidden by thick clouds of sulfuric acid",
        "Venus has more volcanoes than any other planet in the Solar System"
      ]
    },
    {
      name: "Earth",
      type: "planet",
      size: 1,
      distance: 30,
      texture: "/textures/earth.jpg",
      bumpMap: "/textures/earth_bump.jpg",
      orbitalPeriod: 1,
      rotationPeriod: 1,
      diameter: 12742,
      mass: "5.97 × 10^24 kg",
      density: "5.514 g/cm³",
      surfaceTemp: "-89°C to 58°C",
      moons: 1,
      atmosphere: "Nitrogen (78%), Oxygen (21%), Argon (0.93%)",
      description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
      facts: [
        "Earth is the only planet not named after a god",
        "Earth has a powerful magnetic field",
        "Earth's atmosphere protects us from meteoroids",
        "Earth is the densest planet in the Solar System",
        "Earth is the only planet with liquid water on its surface"
      ]
    },
    {
      name: "Mars",
      type: "planet",
      size: 0.53,
      distance: 40,
      texture: "/textures/mars.jpg",
      orbitalPeriod: 1.88,
      rotationPeriod: 1.03,
      diameter: 6779,
      mass: "6.42 × 10^23 kg",
      density: "3.933 g/cm³",
      surfaceTemp: "-153°C to 20°C",
      moons: 2,
      atmosphere: "Carbon dioxide (95%), Nitrogen (2.8%), Argon (2%)",
      description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
      facts: [
        "Mars has the largest volcano in the solar system, Olympus Mons",
        "A day on Mars is called a sol and is 24 hours, 39 minutes, and 35 seconds long",
        "Mars has the largest canyon in the Solar System (Valles Marineris)",
        "Mars' atmosphere is too thin to retain heat",
        "Mars has polar ice caps made of water and carbon dioxide"
      ]
    },
    {
      name: "Jupiter",
      type: "planet",
      size: 6,
      distance: 60,
      texture: "/textures/jupiter.jpg",
      orbitalPeriod: 11.86,
      rotationPeriod: 0.41,
      diameter: 139820,
      mass: "1.90 × 10^27 kg",
      density: "1.326 g/cm³",
      surfaceTemp: "-145°C",
      moons: 95,
      atmosphere: "Hydrogen (90%), Helium (10%)",
      description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
      facts: [
        "Jupiter's Great Red Spot is a giant storm larger than Earth",
        "Jupiter has the strongest magnetic field of all planets",
        "Jupiter has faint rings around it",
        "Jupiter is 2.5 times more massive than all the other planets combined",
        "Jupiter has at least 95 moons"
      ]
    },
    {
      name: "Saturn",
      type: "planet",
      size: 5,
      distance: 80,
      texture: "/textures/saturn.jpg",
      orbitalPeriod: 29.46,
      rotationPeriod: 0.44,
      diameter: 116460,
      mass: "5.68 × 10^26 kg",
      density: "0.687 g/cm³",
      surfaceTemp: "-178°C",
      moons: 146,
      atmosphere: "Hydrogen (96%), Helium (3%)",
      description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
      facts: [
        "Saturn could float in water due to its extremely low density",
        "Saturn has the most extensive ring system of any planet",
        "Saturn has 146 confirmed moons",
        "Saturn's rings are made mostly of ice particles",
        "Saturn has a hexagonal storm pattern at its north pole"
      ]
    },
    {
      name: "Uranus",
      type: "planet",
      size: 2.5,
      distance: 100,
      texture: "/textures/uranus.jpg",
      orbitalPeriod: 84.01,
      rotationPeriod: -0.72,
      diameter: 50724,
      mass: "8.68 × 10^25 kg",
      density: "1.27 g/cm³",
      surfaceTemp: "-224°C",
      moons: 28,
      atmosphere: "Hydrogen (83%), Helium (15%), Methane (2.3%)",
      description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      facts: [
        "Uranus rotates on its side with an axial tilt of 98 degrees",
        "Uranus has 27 known moons",
        "Uranus has faint rings around it",
        "Uranus is the coldest planet in the Solar System",
        "Uranus has a blue-green color due to methane in its atmosphere"
      ]
    },
    {
      name: "Neptune",
      type: "planet",
      size: 2.4,
      distance: 120,
      texture: "/textures/neptune.jpg",
      orbitalPeriod: 164.8,
      rotationPeriod: 0.67,
      diameter: 49244,
      mass: "1.02 × 10^26 kg",
      density: "1.638 g/cm³",
      surfaceTemp: "-218°C",
      moons: 14,
      atmosphere: "Hydrogen (80%), Helium (19%), Methane (1.5%)",
      description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System.",
      facts: [
        "Neptune has the strongest winds in the solar system",
        "Neptune was the first planet located through mathematical predictions",
        "Neptune has 14 known moons",
        "Neptune has five main rings",
        "Neptune's blue color is due to methane in its atmosphere"
      ]
    },
    
    // MOONS
    {
      name: "Phobos",
      type: "moon",
      parent: "Mars",
      size: 0.0033,
      distance: 9.4,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 0.3189,
      rotationPeriod: 0.3189,
      diameter: 22.2,
      mass: "1.066 × 10^16 kg",
      density: "1.876 g/cm³",
      surfaceTemp: "-40°C",
      description: "Phobos is the larger and closer of the two natural satellites of Mars. It was discovered by Asaph Hall in 1877.",
      facts: [
        "Phobos orbits Mars three times a day",
        "It's slowly spiraling inward toward Mars and will crash into the planet in about 50 million years",
        "Phobos is one of the least reflective bodies in the Solar System",
        "It's covered in craters from impacts",
        "Phobos may be a captured asteroid"
      ]
    },
    {
      name: "Deimos",
      type: "moon",
      parent: "Mars",
      size: 0.0019,
      distance: 23.5,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 1.2624,
      rotationPeriod: 1.2624,
      diameter: 12.4,
      mass: "1.476 × 10^15 kg",
      density: "1.471 g/cm³",
      surfaceTemp: "-40°C",
      description: "Deimos is the smaller and outermost of the two moons of Mars. It was discovered by Asaph Hall in 1877.",
      facts: [
        "Deimos appears only slightly brighter than a star in Mars' sky",
        "It's too small to completely cover the Sun during an eclipse",
        "Deimos has a smoother surface than Phobos",
        "It's slowly moving away from Mars",
        "Deimos may also be a captured asteroid"
      ]
    },
    {
      name: "Io",
      type: "moon",
      parent: "Jupiter",
      size: 0.285,
      distance: 422,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 1.769,
      rotationPeriod: 1.769,
      diameter: 3643,
      mass: "8.93 × 10^22 kg",
      density: "3.528 g/cm³",
      surfaceTemp: "-130°C to 1600°C",
      description: "Io is the innermost of the four Galilean moons of Jupiter. It's the fourth-largest moon in the Solar System.",
      facts: [
        "Io is the most volcanically active body in the Solar System",
        "It has over 400 active volcanoes",
        "Io's surface is covered in sulfur and sulfur dioxide frost",
        "It's slightly larger than Earth's Moon",
        "Io's volcanic activity is caused by tidal heating from Jupiter"
      ]
    },
    {
      name: "Europa",
      type: "moon",
      parent: "Jupiter",
      size: 0.245,
      distance: 671,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 3.551,
      rotationPeriod: 3.551,
      diameter: 3122,
      mass: "4.80 × 10^22 kg",
      density: "3.013 g/cm³",
      surfaceTemp: "-160°C",
      description: "Europa is the smallest of the four Galilean moons orbiting Jupiter. It is the sixth-closest to the planet of all the 94 known moons.",
      facts: [
        "Europa has a subsurface ocean beneath its icy crust",
        "This ocean may contain twice as much water as Earth's oceans",
        "It has the smoothest surface of any known solid object in the Solar System",
        "Europa has a very thin oxygen atmosphere",
        "It's considered one of the most promising places in the Solar System to find extraterrestrial life"
      ]
    },
    {
      name: "Titan",
      type: "moon",
      parent: "Saturn",
      size: 0.404,
      distance: 1222,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 15.945,
      rotationPeriod: 15.945,
      diameter: 5149,
      mass: "1.35 × 10^23 kg",
      density: "1.879 g/cm³",
      surfaceTemp: "-179°C",
      description: "Titan is the largest moon of Saturn. It is the only moon known to have a dense atmosphere, and the only object in space other than Earth where clear evidence of stable bodies of surface liquid has been found.",
      facts: [
        "Titan is the second-largest moon in the Solar System",
        "It has lakes and rivers of liquid methane and ethane",
        "Titan's atmosphere is mostly nitrogen, like Earth's",
        "It's the only moon with a substantial atmosphere",
        "Titan is larger than the planet Mercury"
      ]
    },
    {
      name: "Titania",
      type: "moon",
      parent: "Uranus",
      size: 0.082,
      distance: 436,
      texture: "/textures/moon.jpg",
      orbitalPeriod: 8.706,
      rotationPeriod: 8.706,
      diameter: 1578,
      mass: "3.4 × 10^21 kg",
      density: "1.711 g/cm³",
      surfaceTemp: "-203°C",
      description: "Titania is the largest of the moons of Uranus and the eighth largest moon in the Solar System. It was discovered by William Herschel in 1787.",
      facts: [
        "Titania is composed of approximately equal amounts of ice and rock",
        "It has a system of enormous canyons and scarps",
        "Titania may have a subsurface ocean",
        "It has a thin carbon dioxide atmosphere",
        "Titania's surface is covered with impact craters"
      ]
    },
    {
      name: "Triton",
      type: "moon",
      parent: "Neptune",
      size: 0.212,
      distance: 355,
      texture: "/textures/moon.jpg",
      orbitalPeriod: -5.877,
      rotationPeriod: 5.877,
      diameter: 2707,
      mass: "2.14 × 10^22 kg",
      density: "2.061 g/cm³",
      surfaceTemp: "-235°C",
      description: "Triton is the largest natural satellite of the planet Neptune and the only moon of Neptune massive enough to be rounded under its own gravity.",
      facts: [
        "Triton orbits Neptune in a retrograde direction",
        "It's one of the coldest objects in the Solar System with surface temperatures around -235°C",
        "Triton has active geysers that spew nitrogen gas",
        "It may have a subsurface ocean",
        "Triton is likely a captured Kuiper Belt object"
      ]
    }
  ];
  
  export default celestialBodies;