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
        cx: 600, cy: 960,
        color: "fill-blue-800",
        bgColor: "bg-blue-800",
        escala:1.2,
        nombre: "Obesidad y Control de Péso",
        desc: "Fórmula especializada para apoyar el control de peso y favorecer el bienestar integral de tu mascota.",
        productos: ["r-d-weight-loss","metabolic","metabolic-mobility","metabolic-chicken"]
      },
      {
        id: 2,
        cx: 880, cy: 780,
        color: "fill-cyan-500",
        bgColor: "bg-cyan-500",
        nombre: "Calculos Urinarios",
        desc: "Fórmulas que ayudan a reducir el sarro y mantener la salud bucal.",
        productos: ["c-d-urinary-care","urinary-care-u-d"]
      },
      {
        id: 3,
        cx: 30, cy: 850,
        color: "fill-green-500",
        bgColor: "bg-green-500",
        nombre: "Alergias",
        desc: "La sensibilidad e intolerancia a los alimentos son problemas potencialmente graves que pueden provocar irritaciones en la piel, el pelaje y las orejas.",
        productos: ["food-sensitive-perro", "food-sensitive-small-perro", "derm-complete-perro"]
      },
      {
        id: 4,
        cx: 250, cy: 990,
        color: "fill-red-600",
        bgColor: "bg-red-600",
        nombre: "Cardíaca",
        desc: "Hill's Prescription Diet h/d comida para perro cuidado cardiaco",
        productos: ["heart-care"]
      },
      {
        id: 5,
        cx: 450, cy: 880,
        color: "fill-amber-500",
        bgColor: "bg-amber-500",
        nombre: "Enfermedades Hepáticas",
        desc: "Transtornos del Hígado",
        productos: ["j-d-liver-care"]
      },
      {
        id: 6,
        cx: 720, cy: 860,
        color: "fill-pink-500",
        bgColor: "bg-nk-500",
        nombre: "Gastrointestinal",
        desc: "Ayuda a tu perro a sentirse mejor con un alimento que revoluciona la forma de abordar los problemas gastrointestinales sensibles.",
        productos: ["biome","digestive-care","digestive-care-2","digestive-care-5"]
      },
      {
        id: 7,
        cx: 550, cy: 750,
        color: "fill-purple-600",
        bgColor: "bg-purple-600",
        nombre: "Afecciones Renales",
        desc: "En Hill's, los nutricionistas y veterinarios han desarrollado Hill's Prescription Diet k/d, una fórmula clínicamente probada para apoyar la salud renal.",
        productos: ["kd-kidney-care","k-d-kidney-care"]
      },
      {
        id: 8,
        cx: 230, cy: 1250,
        color: "fill-teal-500",
        bgColor: "bg-teal-500",
        nombre: "Articulaciones y movilidad",
        desc: "Hill's Prescription Diet j/d comida para perro cuidado articular.",
        productos: ["j-d-mobility"]
      },
      {
        id: 9,
        cx: 580, cy: 850,
        color: "fill-orange-500",
        bgColor: "bg-orange-500",
        nombre: "Diabetes",
        desc: "Con un sabor que encanta incluso a los paladares más exigentes, ayuda a mantener su energía, felicidad y bienestar.",
        productos: ["w-d-multibenefit","w-d-multibenefit-chicken"]
      },
      {
        id: 10,
        cx: 650, cy: 1300,
        color: "fill-blue-900",
        bgColor: "bg-blue-400",
        nombre: "Cancer",
        desc: "Regulación de saciedad y quema de grasas con fórmula clínica.",
        productos: ["onc-care"],
        icono: "/images/cancer-icon.png"
      }
    ],
  
    gato: [
      {
        id: 1,
        cx: 500, cy: 1060,
        color: "fill-blue-800",
        bgColor: "bg-blue-800",
        nombre: "Obesidad y Control de Péso",
        desc: "Fórmula especializada para apoyar el control de peso y favorecer el bienestar integral de tu mascota.",
        productos: ["metabolic-gato","urinary-metabolic"]
      },
      {
        id: 2,
        cx: 850, cy: 900,
        color: "fill-cyan-500",
        bgColor: "bg-cyan-500",
        nombre: "Calculos Urinarios",
        desc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria.",
        productos: ["urinary-care","urinary-care-cd"]
      },
      {
        id: 3,
        cx: 20, cy: 900,
        color: "fill-green-500",
        bgColor: "bg-green-500",
        nombre: "Alergias",
        desc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria.",
        productos: ["food-sensitive"]
      },
      {
        id: 4,
        cx: 580, cy: 930,
        color: "fill-red-600",
        bgColor: "bg-red-600",
        nombre: "Diabetes",
        desc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria.",
        productos: ["multi-benefit"]
      },
      {
        id: 5,
        cx: 600, cy: 800,
        color: "fill-amber-500",
        bgColor: "bg-amber-500",
        nombre: "Afecciones Renales",
        desc: "Cuidado renal.",
        productos: ["kidney-care-gato"]
      },
      {
        id: 6,
        cx: 700, cy: 980,
        color: "fill-pink-500",
        bgColor: "bg-pink-500",
        nombre: "Gastrointestinal",
        desc: "Los nutricionistas y veterinarios de Hill's desarrollaron la nutrición clínica de Hill's Prescription Diet Recuperación, formulada especialmente para apoyar a los gatos en estos momentos delicados.",
        productos: ["i-d-digestive-care", "biome-gato"]
      },
      {
        id: 7,
        cx: 550, cy: 1350,
        color: "fill-purple-900",
        bgColor: "bg-purple-900",
        nombre: "Cancer",
        desc: "Los nutricionistas y veterinarios de Hill's desarrollaron la nutrición clínica de Hill's Prescription Diet Recuperación, formulada especialmente para apoyar a los gatos en estos momentos delicados.",
        productos: ["onc-care-gato"],
        icono: "/images/cancer-icon.png"
      },
      // {
      //   id: 8,
      //   cx: 250, cy: 1250,
      //   color: "fill-teal-500",
      //   bgColor: "bg-teal-500",
      //   nombre: "Articulaciones y movilidad",
      //   desc: "Soporte articular para gatos activos y senior.",
      //   productos: ["wd-multi-benefit"]
      // },
      // {
      //   id: 9,
      //   cx: 950, cy: 1050,
      //   color: "fill-orange-500",
      //   bgColor: "bg-orange-500",
      //   nombre: "Huesos y músculos",
      //   desc: "Balance mineral para estructura ósea y masa muscular.",
      //   productos: ["wd-multi-benefit"]
      // },
      // {
      //   id: 10,
      //   cx: 800, cy: 1100,
      //   color: "fill-blue-400",
      //   bgColor: "bg-blue-400",
      //   nombre: "Control de peso y metabolismo",
      //   desc: "Manejo nutricional de la diabetes mellitus felina.",
      //   productos: ["wd-multi-benefit", "cd-multicare"]
      // }
    ]
  };