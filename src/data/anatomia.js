/**
 * Mapa de puntos interactivos por especie.
 * Cada punto puede referenciar uno o múltiples productos.
 * cx/cy: coordenadas sobre canvas 1000×2000px.
 * color: clase Tailwind para el círculo del punto.
 */
export const anatomiaData = {
    perro: [
      {
        id: 1,
        cx: -90, cy: 450,
        color: "fill-blue-800",
        bgColor: "bg-blue-800",
        escala:1.2,
        nombre: "Cerebro y función cognitiva",
        desc: "Nutrición avanzada para soporte neuronal y función cognitiva.",
        productos: ["wd-multi-benefit", "kd-kidney-care"]
      },
      {
        id: 2,
        cx: -280, cy: 660,
        color: "fill-cyan-500",
        bgColor: "bg-cyan-500",
        nombre: "Salud dental y oral",
        desc: "Fórmulas que ayudan a reducir el sarro y mantener la salud bucal.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 3,
        cx: 20, cy: 780,
        color: "fill-green-500",
        bgColor: "bg-green-500",
        nombre: "Piel y pelaje",
        desc: "Ácidos grasos esenciales para una piel sana y pelaje brillante.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 4,
        cx: 250, cy: 990,
        color: "fill-red-600",
        bgColor: "bg-red-600",
        nombre: "Corazón",
        desc: "Soporte cardiovascular con taurina y carnitina.",
        productos: ["kd-kidney-care"]
      },
      {
        id: 5,
        cx: 530, cy: 960,
        color: "fill-amber-500",
        bgColor: "bg-amber-500",
        nombre: "Hígado",
        desc: "Soporte metabólico y depuración de toxinas.",
        productos: ["wd-multi-benefit", "cd-multicare"]
      },
      {
        id: 6,
        cx: 720, cy: 860,
        color: "fill-pink-500",
        bgColor: "bg-nk-500",
        nombre: "Sistema digestivo",
        desc: "Fibras prebióticas para una digestión saludable y microbioma equilibrado.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 7,
        cx: 780, cy: 700,
        color: "fill-purple-600",
        bgColor: "bg-purple-600",
        nombre: "Riñones y vías urinarias",
        desc: "Clínicamente comprobado para disolver cristales de estruvita.",
        productos: ["cd-multicare", "kd-kidney-care"]
      },
      {
        id: 8,
        cx: 230, cy: 1250,
        color: "fill-teal-500",
        bgColor: "bg-teal-500",
        nombre: "Articulaciones y movilidad",
        desc: "Glucosamina y condroitina para articulaciones saludables.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 9,
        cx: 1020, cy: 1100,
        color: "fill-orange-500",
        bgColor: "bg-orange-500",
        nombre: "Huesos y músculos",
        desc: "Calcio y fósforo balanceados para estructura ósea óptima.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 10,
        cx: 850, cy: 900,
        color: "fill-blue-400",
        bgColor: "bg-blue-400",
        nombre: "Control de peso y metabolismo",
        desc: "Regulación de saciedad y quema de grasas con fórmula clínica.",
        productos: ["wd-multi-benefit"]
      }
    ],
  
    gato: [
      {
        id: 1,
        cx: -90, cy: 520,
        color: "fill-blue-800",
        bgColor: "bg-blue-800",
        nombre: "Cerebro y función cognitiva",
        desc: "Nutrición avanzada para soporte neuronal felino.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 2,
        cx: -180, cy: 700,
        color: "fill-cyan-500",
        bgColor: "bg-cyan-500",
        nombre: "Salud dental y oral",
        desc: "Fórmulas que ayudan a reducir el sarro en felinos.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 3,
        cx: 30, cy: 850,
        color: "fill-green-500",
        bgColor: "bg-green-500",
        nombre: "Piel y pelaje",
        desc: "Ácidos grasos esenciales para pelaje sedoso y piel sana.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 4,
        cx: 300, cy: 1000,
        color: "fill-red-600",
        bgColor: "bg-red-600",
        nombre: "Corazón",
        desc: "Taurina esencial para la salud cardiovascular del gato.",
        productos: ["kd-kidney-care"]
      },
      {
        id: 5,
        cx: 480, cy: 1000,
        color: "fill-amber-500",
        bgColor: "bg-amber-500",
        nombre: "Hígado",
        desc: "Soporte hepático y metabólico para felinos.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 6,
        cx: 700, cy: 980,
        color: "fill-pink-500",
        bgColor: "bg-pink-500",
        nombre: "Sistema digestivo",
        desc: "Digestión óptima con fibras fermentables selectivas.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 7,
        cx: 800, cy: 780,
        color: "fill-purple-600",
        bgColor: "bg-purple-600",
        nombre: "Riñones y vías urinarias",
        desc: "Control del pH urinario óptimo para felinos.",
        productos: ["cd-multicare", "kd-kidney-care"]
      },
      {
        id: 8,
        cx: 250, cy: 1250,
        color: "fill-teal-500",
        bgColor: "bg-teal-500",
        nombre: "Articulaciones y movilidad",
        desc: "Soporte articular para gatos activos y senior.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 9,
        cx: 950, cy: 1050,
        color: "fill-orange-500",
        bgColor: "bg-orange-500",
        nombre: "Huesos y músculos",
        desc: "Balance mineral para estructura ósea y masa muscular.",
        productos: ["wd-multi-benefit"]
      },
      {
        id: 10,
        cx: 800, cy: 1100,
        color: "fill-blue-400",
        bgColor: "bg-blue-400",
        nombre: "Control de peso y metabolismo",
        desc: "Manejo nutricional de la diabetes mellitus felina.",
        productos: ["wd-multi-benefit", "cd-multicare"]
      }
    ]
  };