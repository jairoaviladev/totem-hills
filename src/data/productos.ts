/**
 * Interfaces de tipado para los productos.
 * Garantizan autocompletado y validación en tiempo de compilación.
 */
interface Beneficio {
  icono: string;
  texto: string;
}

interface BadgeClinico {
  valor: string;
  unidad: string;
  
}

interface DatoClinico {
  icono: string;
  titulo: string;
  descripcion: string;
  badge: BadgeClinico;
  badgeDesc: string;
  bgColor:string;
 
}

export interface Producto {
  sku: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  especies: string[];
  beneficios: Beneficio[];
  datoClinico: DatoClinico;
  advertencia: string;
  imagen: string;
}

/**
 * Fuente única de verdad para todos los productos.
 * El tipo Record<string, Producto> permite indexar con cualquier string
 * Agregar un producto aquí genera su página automáticamente.
 */
export const productosData: Record<string, Producto> = {

  "cd-multicare": {
    sku: "C/D",
    nombre: "C/D Multicare",
    subtitulo: "Alimento seco para perro y gato",
    descripcion: "Nutrición clínicamente comprobada para disolver los cristales de estruvita en tan solo 7 días (promedio 27 días) y reducir el riesgo de recurrencia.",
    especies: ["perro", "gato"],
    beneficios: [
      { icono: "🫘", texto: "Disolución de urolitos de estruvita." },
      { icono: "⬇️", texto: "Prevención de formación de urolitos de estruvita y oxalato de calcio." },
      { icono: "✅", texto: "Apoya la salud del tracto urinario." },
      { icono: "🔗", texto: "Con L-triptófano y caseína hidrolizada que ayudan a controlar el estrés." }
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Nutrición clínicamente comprobada",
      descripcion: "Formulado por nutricionistas y veterinarios de Hill's para apoyar la salud urinaria de tu perro.",
      badge: { valor: "7", unidad: "días" },
      badgeDesc: "Disuelve los cristales de estruvita en tan solo 7 días (promedio 27 días).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/cd-multicare-perro.png"
  },

  "wd-multi-benefit": {
    sku: "W/D",
    nombre: "Multi-Benefit w/d",
    subtitulo: "Alimento seco para perro y gato",
    descripcion: "Nutrición terapéutica que apoya el control de peso, la diabetes y las enfermedades fibro-responsivas.",
    especies: ["perro", "gato"],
    beneficios: [
      { icono: "⚖️", texto: "Control de peso saludable." },
      { icono: "🩸", texto: "Manejo nutricional de la diabetes mellitus." },
      { icono: "🌿", texto: "Soporte en enfermedades fibro-responsivas." },
      { icono: "💪", texto: "Alta en fibra para mayor saciedad." }
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Fórmula clínicamente validada",
      descripcion: "Desarrollada por especialistas en nutrición veterinaria para el manejo integral del peso y metabolismo.",
      badge: { valor: "7", unidad: "Días" },
      badgeDesc: "Respaldada por estudios clínicos en nutrición veterinaria.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/producto-wd.png"
  },

  "kd-kidney-care": {
    sku: "K/D",
    nombre: "Kidney Care k/d",
    subtitulo: "Alimento seco para perro y gato",
    descripcion: "Nutrición especializada para el soporte de la función renal y la salud cardiovascular.",
    especies: ["perro", "gato"],
    beneficios: [
      { icono: "🫀", texto: "Soporte de la función renal crónica." },
      { icono: "⬇️", texto: "Reducción de fósforo para proteger los riñones." },
      { icono: "❤️", texto: "Soporte cardiovascular integrado." },
      { icono: "💧", texto: "Promueve la hidratación adecuada." }
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Respaldo clínico renal",
      descripcion: "Formulado para extender y mejorar la calidad de vida en pacientes con enfermedad renal.",
      badge: { valor: "ERC", unidad: "soporte" },
      badgeDesc: "Indicado para enfermedad renal crónica en todas sus etapas.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/producto-kd.png"
  }
};