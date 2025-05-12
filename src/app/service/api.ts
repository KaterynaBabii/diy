// const BASE_URL = '';
// const fetchData = async <T>(endpoint: string, parameters: object = {}): Promise<never | T> => {
//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(parameters),
//     });
//
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   };

  export const brands = [
  {
    "value": "toyota",
    "label": "Toyota",
    "models": [
      { "value": "camry", "label": "Camry" },
      { "value": "corolla", "label": "Corolla" },
      { "value": "rav4", "label": "RAV4" },
      { "value": "prius", "label": "Prius" },
      { "value": "highlander", "label": "Highlander" },
      { "value": "tacoma", "label": "Tacoma" },
      { "value": "tundra", "label": "Tundra" },
      { "value": "4runner", "label": "4Runner" },
      { "value": "sienna", "label": "Sienna" },
      { "value": "supra", "label": "Supra" }
    ]
  },
  {
    "value": "honda",
    "label": "Honda",
    "models": [
      { "value": "accord", "label": "Accord" },
      { "value": "civic", "label": "Civic" },
      { "value": "cr-v", "label": "CR-V" },
      { "value": "pilot", "label": "Pilot" },
      { "value": "odyssey", "label": "Odyssey" },
      { "value": "fit", "label": "Fit" },
      { "value": "ridgeline", "label": "Ridgeline" },
      { "value": "passport", "label": "Passport" },
      { "value": "hr-v", "label": "HR-V" },
      { "value": "insight", "label": "Insight" }
    ]
  },
  {
    "value": "ford",
    "label": "Ford",
    "models": [
      { "value": "f-150", "label": "F-150" },
      { "value": "mustang", "label": "Mustang" },
      { "value": "escape", "label": "Escape" },
      { "value": "explorer", "label": "Explorer" },
      { "value": "edge", "label": "Edge" },
      { "value": "fusion", "label": "Fusion" },
      { "value": "expedition", "label": "Expedition" },
      { "value": "ranger", "label": "Ranger" },
      { "value": "bronco", "label": "Bronco" },
      { "value": "maverick", "label": "Maverick" }
    ]
  },
  {
    "value": "chevrolet",
    "label": "Chevrolet",
    "models": [
      { "value": "silverado", "label": "Silverado" },
      { "value": "malibu", "label": "Malibu" },
      { "value": "equinox", "label": "Equinox" },
      { "value": "tahoe", "label": "Tahoe" },
      { "value": "traverse", "label": "Traverse" },
      { "value": "camaro", "label": "Camaro" },
      { "value": "blazer", "label": "Blazer" },
      { "value": "trailblazer", "label": "Trailblazer" },
      { "value": "colorado", "label": "Colorado" },
      { "value": "suburban", "label": "Suburban" }
    ]
  },
  {
    "value": "bmw",
    "label": "BMW",
    "models": [
      { "value": "3-series", "label": "3 Series" },
      { "value": "5-series", "label": "5 Series" },
      { "value": "7-series", "label": "7 Series" },
      { "value": "x3", "label": "X3" },
      { "value": "x5", "label": "X5" },
      { "value": "x7", "label": "X7" },
      { "value": "i3", "label": "i3" },
      { "value": "i4", "label": "i4" },
      { "value": "i8", "label": "i8" },
      { "value": "z4", "label": "Z4" }
    ]
  },
  {
    "value": "mercedes-benz",
    "label": "Mercedes-Benz",
    "models": [
      { "value": "c-class", "label": "C-Class" },
      { "value": "e-class", "label": "E-Class" },
      { "value": "s-class", "label": "S-Class" },
      { "value": "glc", "label": "GLC" },
      { "value": "gle", "label": "GLE" },
      { "value": "gls", "label": "GLS" },
      { "value": "a-class", "label": "A-Class" },
      { "value": "cla", "label": "CLA" },
      { "value": "g-class", "label": "G-Class" },
      { "value": "eqs", "label": "EQS" }
    ]
  },
  {
    "value": "audi",
    "label": "Audi",
    "models": [
      { "value": "a3", "label": "A3" },
      { "value": "a4", "label": "A4" },
      { "value": "a6", "label": "A6" },
      { "value": "a8", "label": "A8" },
      { "value": "q3", "label": "Q3" },
      { "value": "q5", "label": "Q5" },
      { "value": "q7", "label": "Q7" },
      { "value": "q8", "label": "Q8" },
      { "value": "tt", "label": "TT" },
      { "value": "e-tron", "label": "e-tron" }
    ]
  },
  {
    "value": "nissan",
    "label": "Nissan",
    "models": [
      { "value": "altima", "label": "Altima" },
      { "value": "sentra", "label": "Sentra" },
      { "value": "maxima", "label": "Maxima" },
      { "value": "rogue", "label": "Rogue" },
      { "value": "murano", "label": "Murano" },
      { "value": "pathfinder", "label": "Pathfinder" },
      { "value": "armada", "label": "Armada" },
      { "value": "frontier", "label": "Frontier" },
      { "value": "titan", "label": "Titan" },
      { "value": "leaf", "label": "LEAF" }
    ]
  },
  {
    "value": "hyundai",
    "label": "Hyundai",
    "models": [
      { "value": "elantra", "label": "Elantra" },
      { "value": "sonata", "label": "Sonata" },
      { "value": "tucson", "label": "Tucson" },
      { "value": "santa-fe", "label": "Santa Fe" },
      { "value": "palisade", "label": "Palisade" },
      { "value": "kona", "label": "Kona" },
      { "value": "venue", "label": "Venue" },
      { "value": "ioniq", "label": "Ioniq" },
      { "value": "ioniq-5", "label": "Ioniq 5" },
      { "value": "ioniq-6", "label": "Ioniq 6" }
    ]
  },
  {
    "value": "kia",
    "label": "Kia",
    "models": [
      { "value": "optima", "label": "Optima" },
      { "value": "k5", "label": "K5" },
      { "value": "sorento", "label": "Sorento" },
      { "value": "sportage", "label": "Sportage" },
      { "value": "telluride", "label": "Telluride" },
      { "value": "seltos", "label": "Seltos" },
      { "value": "soul", "label": "Soul" },
      { "value": "niro", "label": "Niro" },
      { "value": "stinger", "label": "Stinger" },
      { "value": "carnival", "label": "Carnival" }
    ]
  },
  {
    "value": "volkswagen",
    "label": "Volkswagen",
    "models": [
      { "value": "jetta", "label": "Jetta" },
      { "value": "passat", "label": "Passat" },
      { "value": "golf", "label": "Golf" },
      { "value": "tiguan", "label": "Tiguan" },
      { "value": "atlas", "label": "Atlas" },
      { "value": "taos", "label": "Taos" },
      { "value": "arteon", "label": "Arteon" },
      { "value": "beetle", "label": "Beetle" },
      { "value": "id.4", "label": "ID.4" },
      { "value": "e-golf", "label": "e-Golf" }
    ]
  }
  ]

