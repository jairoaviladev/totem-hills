/// <reference types="astro/client" />

/**
 * Interfaces de tipado para los productos.
 * Garantizan autocompletado y validación en tiempo de compilación.
 */


import { iconMap } from '../assets/icons/index';
import type { ImageMetadata } from 'astro';

interface Beneficio {
  icono: ImageMetadata;
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

    // ================ PERROS =============

"food-sensitive-perro": {
    sku: "z/d",
    nombre: "z/d FOOD Sensitivities",
    subtitulo: "Hill's z/d comida para perro sensibilidades alimentarias ",
    descripcion: "El alimento Hill's Prescription Diet z/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.corazon, texto: "Mejora visible en la piel y el pelaje en 30 días." },
      { icono: iconMap.calculo, texto: "Clínicamente probado para ayudar a normalizar las heces." },
      { icono: iconMap.bload, texto: "Ayuda a mantener un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: " ",
      descripcion: "Alimento para perros, Prescripción, Alimento seco, Perro, Hills Prescription Diet, Prescription Diet, Dieta veterinaria, Nutrición Terapéutica para Perro, Alergias Alimentarias, Alergia, Cuidado de la Piel, Comezón, Picazón, Hidrolizado, Piel, Concentrado para perro.",
      badge: { valor: "30", unidad: "Días" },
      badgeDesc: "Disuelve los cristales de estruvita en tan solo 7 días (promedio 27 días).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/z-d-food-sensitive-perro.png"
  },
  "heart-care": {
    sku: "h/d",
    nombre: "h/d HEART CARE",
    subtitulo: "Hill's Prescription Diet h/d comida para perro cuidado cardiaco ",
    descripcion: "El alimento Hill's Prescription Diet h/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria. ",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.corazon, texto: "Apoya la salud general del corazón." },
      { icono: iconMap.bload, texto: "Ayuda a mantener la presión arterial normal y minimizar la retención de líquidos." },
      { icono: iconMap.bload, texto: "Ayuda a reponer los nutrientes perdidos para los perros que reciben diuréticos." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Importante: ",
      descripcion: "La mala salud cardíaca puede afectar el estilo de vida, la felicidad y la calidad de vida de tu perro.",
      badge: { valor: "h/d", unidad: " " },
      badgeDesc: "Hill's es la marca #1 recomendada por los veterinarios de EUA.).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/heart-care-hd.png"
  },
  "j-d-mobility": {
    sku: "j/d",
    nombre: "j/d MOBILITY",
    subtitulo: "Hill's Prescription Diet j/d comida para perro cuidado articular.",
    descripcion: "El alimento Hill's Prescription Diet j/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.articulacion, texto: "Ayuda a preservar el cartílago articular." },
      { icono: iconMap.hueso, texto: "Ayuda a construir músculo magro." },
      { icono: iconMap.corazon, texto: "Apoya un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clinico: ",
      descripcion: "Esta comida para perro está pensada para adaptarse a la rutina de manera sencilla, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción. Con un sabor que encanta incluso a los más exigentes, ayuda a mantener su energía, felicidad y bienestar.",
      badge: { valor: "21", unidad: "Días" },
      badgeDesc: "Hill's es la marca #1 recomendada por los veterinarios de EUA.).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/j-d-mobility.png"
  },
  "j-d-liver-care": {
    sku: "l/d",
    nombre: "l/d LIVER CARE",
    subtitulo: "HHill's Prescription Diet l/d comida para perro Cuidado Hepático.",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.corazon, texto: "Ayuda a reducir la carga de trabajo del hígado permitiendo que el tejido hepático se regenere." },
      { icono: iconMap.urinary, texto: "Ayuda a evitar las deficiencias y excesos de nutrientes relacionados con el hígado." },
      { icono: iconMap.hueso, texto: "Respaldo al sistema inmunológico, crítico para perros con hígados comprometidos." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clinico: ",
      descripcion: "El hígado es el órgano interno más grande de tu perro y cumple numerosas funciones, como la metabolización y conversión de nutrientes, la eliminación de sustancias tóxicas de la sangre y el almacenamiento de vitaminas y minerales.",
      badge: { valor: "l/d", unidad: " " },
      badgeDesc: "Hill's es la marca #1 recomendada por los veterinarios de EUA.).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/l-d-liver-care.png"
  },
  "kd-kidney-care": {
    sku: "k/d",
    nombre: "k/d KIDNEY CARE ",
    subtitulo: "Hill's Prescription Diet k/d comida para perro cuidado renal.",
    descripcion: "El alimento Hill's Prescription Diet k/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.urinary, texto: "Ayuda a proteger la función renal vital." },
      { icono: iconMap.calculo, texto: "Ayuda a controlar los cambios invisibles dentro del tracto intestinal que afectan la función renal." },
      { icono: iconMap.urinary, texto: "Ayuda a construir masa muscular y ayuda a mantener la energía y la fuerza." },
      { icono: iconMap.urinary, texto: "Estimula el apetito y fomenta la ingesta de alimentos." },
      { icono: iconMap.urinary, texto: "S+OXSHIELD: Formulado para promover un entorno urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." }
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "La salud renal de tu perro es fundamental para su calidad de vida. Los perros con enfermedad renal crónica pueden beneficiarse de una nutrición específica que ayude a manejar la carga de trabajo de sus riñones y a mantener su bienestar general.",
      badge: { valor: "k/d", unidad: " " },
      badgeDesc: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/k-d-kidney-care.png"
  },
  "biome": {
    sku: "Gastrointestinal",
    nombre: "Biome ",
    subtitulo: "Hill's Gastrointestinal Biome comida para perro Cuidado Digestivo.",
    descripcion: "El alimento Hill's Prescription Diet es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.urinary, texto: " Funciona rápidamente para activar el microbioma intestinal y promover heces saludables." },
      { icono: iconMap.calculo, texto: "Promueve la actividad de las bacterias intestinales beneficiosas para mantener la salud digestiva." },
      { icono: iconMap.urinary, texto: "Ayuda a limitar la recurrencia de trastornos digestivos." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      badge: { valor: "", unidad: "Biome" },
      badgeDesc: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/biome-perro.png"
  },
  "r-d-weight-loss": {
    sku: "r/d",
    nombre: "WEIGHT LOSS ",
    subtitulo: "Hill's Prescription Diet r/d comida para perro control de peso ",
    descripcion: "El alimento Hill's Prescription Diet r/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.corazon, texto: "Ayuda a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.bload, texto: "Ayuda a tu perro a sentirse lleno y satisfecho." },
      { icono: iconMap.urinary, texto: "Apoya un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Al igual que sucede con la epidemia de obesidad en humanos, más del 50% de la población de mascotas tiene sobrepeso. Incluso un poco de peso adicional puede afectar la calidad de vida de tu mascota y su relación con la familia",
      badge: { valor: "", unidad: "Biome" },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/r-d-weight-loss.png"
  },
  "c-d-urinary-care": {
    sku: "r/d",
    nombre: "URINARY CARE",
    subtitulo: "Hill's Prescription Diet c/d comida para perro, cuidado urinario",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para perros que necesitan un cuidado especial todos los días. Ofrece una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.calculo, texto: "Formulado para ayudar a disolver los cálculos de estruvita y reducir el riesgo de recurrencia." },
      { icono: iconMap.calculo, texto: "Reduce el riesgo de formación y recurrencia de cálculos dexalato de calcio." },
      { icono: iconMap.urinary, texto: "Ayuda a nutrir y mantener una vejiga saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Los cálculos en la vejiga son acumulaciones de cristales minerales que se forman en el tracto urinario. Estos pueden causar molestias y provocar problemas más graves que requieren la atención de un veterinario.",
      badge: { valor: "c/d", unidad: " " },
      badgeDesc: "Esta comida para perros está diseñada para integrarse fácilmente en la vida diaria de tu mascota, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/c-d-urinary-care.png"
  },



    // ================ GATOS =============

  "food-sensitive": {
    sku: "z/d",
    nombre: "z/d FOOD Sensitivities",
    subtitulo: "Sensibilidades Alimentarias, comida para Gato, 1.8 kg",
    descripcion: "El alimento Hill's Prescription Diet z/d es la opción ideal para gatos que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.bload, texto: "Ayuda a eliminar las causas de irritación de la piel relacionadas con los alimentos." },
      { icono: iconMap.bload, texto: "Promueve una barrera cutánea saludable." },
      { icono: iconMap.bload, texto: "Ayuda a mantener un sistema inmunológico saludable." },
      { icono: iconMap.bload, texto: " S+OXSHIELD: Formulado para promover un ambiente urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." }
    ],
    datoClinico: {
      icono: "🥣",
      titulo: " ",
      descripcion: "Alimento para gatos, Prescripción, Alimento seco, Gato, Hills Prescription Diet, Prescription Diet, Dieta veterinaria, Nutrición Terapéutica para Gato, Alergias Alimentarias, Alergia, Cuidado de la Piel, Comezón, Picazón, Hidrolizado, Piel",
      badge: { valor: "z/d", unidad: " " },
      badgeDesc: "Disuelve los cristales de estruvita en tan solo 7 días (promedio 27 días).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/f-z_d-food-sensitive-hills.png"
  },

  "wd-multi-benefit": {
    sku: "W/D",
    nombre: "Multi-Benefit w/d",
    subtitulo: "Alimento seco para perro y gato",
    descripcion: "Nutrición terapéutica que apoya el control de peso, la diabetes y las enfermedades fibro-responsivas.",
    especies: ["perro", "gato"],
    beneficios: [
      { icono: iconMap.pulmon, texto: "Control de peso saludable." },
      { icono: iconMap.bload, texto: "Manejo nutricional de la diabetes mellitus." },
      { icono: iconMap.articulacion, texto: "Soporte en enfermedades fibro-responsivas." },
      { icono: iconMap.calculo, texto: "Alta en fibra para mayor saciedad." }
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

  
};