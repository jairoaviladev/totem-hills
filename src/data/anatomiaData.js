export const anatomiaData = {
    perro: [
      { id: 1, cx: 300, cy: 320, nombre: "Cerebro y función cognitiva", desc: "Nutrición avanzada para soporte neuronal.", productoId: "multi-benefit" },
      { id: 5, cx: 560, cy: 830, nombre: "Hígado", desc: "Soporte metabólico y depuración de toxinas.", productoId: "cd-multicare" },
      { id: 7, cx: 720, cy: 780, nombre: "Riñones y vías urinarias", desc: "Clínicamente comprobado para disolver cristales de estruvita.", productoId: "cd-multicare" },
      { id: 10, cx: 660, cy: 960, nombre: "Control de peso y metabolismo", desc: "Regulación de saciedad y quema de grasas.", productoId: "multi-benefit" }
    ],
    gato: [
      { id: 7, cx: 700, cy: 800, nombre: "Riñones y vías urinarias (Felino)", desc: "Control del pH urinario óptimo.", productoId: "cd-multicare" },
      { id: 10, cx: 620, cy: 980, nombre: "Control de peso (Felino)", desc: "Manejo nutricional de la diabetes mellitus.", productoId: "multi-benefit" }
    ]
  };
  
  export const productosData = {
    "multi-benefit": {
      sku: "W/D",
      nombre: "Multi-Benefit w/d",
      indicaciones: ["Diabetes Mellitus (peso normal o sobrepeso)", "Control de Peso", "Enfermedades fibro-responsivas"],
      imagen: "/images/producto-wd.png"
    },
    "cd-multicare": {
      sku: "C/D",
      nombre: "C/D Multicare Urinary Care",
      indicaciones: ["Disolución de urolitos de estruvita", "Prevención de oxalato de calcio", "Apoyo al tracto urinario"],
      imagen: "/images/producto-cd.png"
    }
  };