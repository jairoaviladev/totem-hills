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

"food-sensitive-small-perro": {
    sku: "z/d",
    nombre: "z/d FOOD SENSITIVITIES SMALL BITES",
    subtitulo: "Hill's z/d comida para perro sensibilidades alimentarias ",
    descripcion: "El alimento Hill's Prescription Diet z/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Mejora visible en la piel y el pelaje en 30 días." },
      { icono: iconMap.check, texto: "Clínicamente probado para ayudar a normalizar las heces." },
      { icono: iconMap.check, texto: "Ayuda a mantener un sistema inmunológico saludable." },
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
    imagen: "/images/productos-perro/z-d-food-sensitive-small-perro.png"
  },
  "food-sensitive-perro": {
    sku: "z/d",
    nombre: "z/d FOOD SENSITIVITIES",
    subtitulo: "Hill's z/d comida para perro sensibilidades alimentarias",
    descripcion: "El alimento Hill's Prescription Diet z/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Mejora visible en la piel y el pelaje en 30 días." },
      { icono: iconMap.check, texto: "Clínicamente probado para ayudar a normalizar las heces." },
      { icono: iconMap.check, texto: "Ayuda a mantener un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: " ",
      descripcion: "Hill's Prescription Diet w/d Multi-Benefit está formulado exclusivamente para beneficiar a tu mascota en múltiples aspectos: salud urinaria, salud digestiva, control del azúcar en la sangre y control del peso. Esta mezcla de nutrientes balanceados y fibras solubles e insolubles actúa en diferentes frentes para ayudar a las mascotas a vivir una vida feliz y saludable.",
      badge: { valor: "30", unidad: "Días" },
      badgeDesc: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/z-d-food-sensitive-perro.png"
  },
  "derm-complete-perro": {
    sku: " ",
    nombre: "DERM COMPLETE",
    subtitulo: "Hill's comida para perro Alergias Alimentarias y Ambientales.",
    descripcion: "El alimento Hill's Prescription Diet Derm Complete es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Mejora visible de la piel en 21 días en perros con sensibilidades alimentarias." },
      { icono: iconMap.check, texto: "Nutrición que demuestra una reducción del rascado nocturno y mejora la calidad del sueño." },
      { icono: iconMap.check, texto: "Apoya la barrera de la piel contra los irritantes ambientales - todo el año." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "proporciona toda la nutrición que tu perro necesita y puede ser utilizado a largo plazo.",
      badge: { valor: "21", unidad: "Días" },
      badgeDesc: "Esta comida para perro está diseñada para ayudar a mantener una piel saludable junto con un sistema inmune fuerte, mejora la calidad de las heces.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-perro/derm-complete.png"
  },
  "heart-care": {
    sku: "h/d",
    nombre: "h/d HEART CARE",
    subtitulo: "Hill's Prescription Diet h/d comida para perro cuidado cardiaco ",
    descripcion: "El alimento Hill's Prescription Diet h/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria. ",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Apoya la salud general del corazón." },
      { icono: iconMap.check, texto: "Ayuda a mantener la presión arterial normal y minimizar la retención de líquidos." },
      { icono: iconMap.check, texto: "Ayuda a reponer los nutrientes perdidos para los perros que reciben diuréticos." },
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
      { icono: iconMap.check, texto: "Ayuda a preservar el cartílago articular." },
      { icono: iconMap.check, texto: "Ayuda a construir músculo magro." },
      { icono: iconMap.check, texto: "Apoya un sistema inmunológico saludable." },
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
    subtitulo: "Hill's Prescription Diet l/d comida para perro Cuidado Hepático.",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a reducir la carga de trabajo del hígado permitiendo que el tejido hepático se regenere." },
      { icono: iconMap.check, texto: "Ayuda a evitar las deficiencias y excesos de nutrientes relacionados con el hígado." },
      { icono: iconMap.check, texto: "Respaldo al sistema inmunológico, crítico para perros con hígados comprometidos." },
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
  "k-d-kidney-care": {
    sku: "k/d",
    nombre: "K/d KIDNEY CARE",
    subtitulo: "Hill's Prescription Diet k/d Alimento húmedo para perro cuidado renal.",
    descripcion: "El alimento Hill's Prescription Diet k/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a proteger la función renal vital." },
      { icono: iconMap.check, texto: "Ayuda a controlar los cambios invisibles dentro del tracto intestinal que afectan la función renal." },
      { icono: iconMap.check, texto: " Ayuda a construir masa muscular y ayuda a mantener la energía y la fuerza." },
      { icono: iconMap.check, texto: "Estimula el apetito y fomenta la ingesta de alimentos." },
      { icono: iconMap.check, texto: "S+OXSHIELD: Formulado para promover un entorno urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clinico: ",
      descripcion: "Cuando los perros sufren daño en los tejidos renales, sus riñones no pueden funcionar tan eficientemente como antes para filtrar y reabsorber nutrientes.",
      badge: { valor: "K/d", unidad: " " },
      badgeDesc: "Hill's es la marca #1 recomendada por los veterinarios de EUA.).",
      bgColor: "bg-purple-600"
    },
    advertencia: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
    imagen: "/images/productos-perro/7_1.png"
  },
  "kd-kidney-care": {
    sku: "k/d",
    nombre: "k/d KIDNEY CARE ",
    subtitulo: "Hill's Prescription Diet k/d comida para perro cuidado renal.",
    descripcion: "El alimento Hill's Prescription Diet k/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a proteger la función renal vital." },
      { icono: iconMap.check, texto: "Ayuda a controlar los cambios invisibles dentro del tracto intestinal que afectan la función renal." },
      { icono: iconMap.check, texto: "Ayuda a construir masa muscular y ayuda a mantener la energía y la fuerza." },
      { icono: iconMap.check, texto: "Estimula el apetito y fomenta la ingesta de alimentos." },
      { icono: iconMap.check, texto: "S+OXSHIELD: Formulado para promover un entorno urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." }
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
    sku: "l/d",
    nombre: "GASTROINTESTINAL BIOME ",
    subtitulo: "Hill's Gastrointestinal Biome comida para perro Cuidado Digestivo.",
    descripcion: "El alimento Hill's Prescription Diet es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: " Funciona rápidamente para activar el microbioma intestinal y promover heces saludables." },
      { icono: iconMap.check, texto: "Promueve la actividad de las bacterias intestinales beneficiosas para mantener la salud digestiva." },
      { icono: iconMap.check, texto: "Ayuda a limitar la recurrencia de trastornos digestivos." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      badge: { valor: "l/d", unidad: " " },
      badgeDesc: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/biome-perro.png"
  },
  "digestive-care": {
    sku: "i/d",
    nombre: "DIGESTIVE CARE",
    subtitulo: "Hill's i/d comida para perro bajo en grasas Cuidado Digestivo.",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a mejorar la digestión, la absorción de nutrientes y reducir los niveles de grasa en la sangre." },
      { icono: iconMap.check, texto: "Promueve la actividad de las bacterias intestinales beneficiosas y mejora la calidad de las heces." },
      { icono: iconMap.check, texto: "Promueve un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Esta comida para perro altamente digerible está enriquecida con electrolitos y vitaminas del grupo B para asegurar una fácil absorción de nutrientes y reemplazar los nutrientes perdidos.",
      badge: { valor: "i/d", unidad: " " },
      badgeDesc: "Fabricado con la tecnología de ingredientes ActivBiome+ para favorecer la salud digestiva.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/6_1.png"
  },
  "digestive-care-2": {
    sku: "i/d",
    nombre: "DIGESTIVE CARE",
    subtitulo: "Hill's Prescription Diet i/d comida para perro Cuidado Digestivo ",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición altamente apetecible para reponer los nutrientes perdidos." },
      { icono: iconMap.check, texto: "Funciona rápidamente para promover heces saludables y ayudar a mejorar la digestión." },
      { icono: iconMap.check, texto: "Ayuda a restaurar el nivel de energía y promueve un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Hill's Prescription Diet i/d Dry Dog Food es una nutrición de gran sabor, clínicamente probada para aliviar los trastornos digestivos. Este alimento altamente digerible está enriquecido con electrolitos y vitaminas del grupo B",
      badge: { valor: "i/d", unidad: " " },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad, cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/6_2.png"
  },
  "digestive-care-5": {
    sku: "i/d",
    nombre: "DIGESTIVE CARE",
    subtitulo: "Hill's i/d Alimento húmedo para perro Cuidado Digestivo.",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para perros que necesitan un cuidado especial todos los días.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición altamente apetecible para reponer los nutrientes perdidos." },
      { icono: iconMap.check, texto: "Funciona rápidamente para promover heces saludables y ayudar a mejorar la digestión." },
      { icono: iconMap.check, texto: "Ayuda a restaurar el nivel de energía y promueve un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Hill's Prescription Diet i/d Wet Dog Food es una nutrición de gran sabor, clínicamente probada para ayudar a calmar los trastornos digestivos, apoyar la calidad óptima de las heces y promover la salud digestiva en general. ",
      badge: { valor: "i/d", unidad: " " },
      badgeDesc: "Esta comida para perro está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/6_5.png"
  },
  "r-d-weight-loss": {
    sku: "r/d",
    nombre: "WEIGHT LOSS ",
    subtitulo: "Hill's Prescription Diet r/d comida para perro control de peso ",
    descripcion: "El alimento Hill's Prescription Diet r/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.check, texto: "Ayuda a tu perro a sentirse lleno y satisfecho." },
      { icono: iconMap.check, texto: "Apoya un sistema inmunológico saludable." },
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
    sku: "c/d",
    nombre: "URINARY CARE",
    subtitulo: "Hill's Prescription Diet c/d comida para perro, cuidado urinario",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para perros que necesitan un cuidado especial todos los días. Ofrece una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Formulado para ayudar a disolver los cálculos de estruvita y reducir el riesgo de recurrencia." },
      { icono: iconMap.check, texto: "Reduce el riesgo de formación y recurrencia de cálculos dexalato de calcio." },
      { icono: iconMap.check, texto: "Ayuda a nutrir y mantener una vejiga saludable." },
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
    imagen: "/images/productos-perro/2_1.png"
  },
  "urinary-care-u-d": {
    sku: "u/d",
    nombre: "URINARY CARE",
    subtitulo: "Hill's Prescription Diet u/d comida para perro cuidado urinario.",
    descripcion: "El alimento Hill's Prescription Diet u/d Cuidado Urinario es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Niveles controlados de proteínas de alta calidad y fáciles de digerir." },
      { icono: iconMap.check, texto: "Promueve niveles deseables de pH en larina y es bajo en sodio." },
      { icono: iconMap.check, texto: " Contiene antioxidantes, incluida la vitamina E." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "El exceso de minerales puede favorecer la formación de cristales en la orina, lo que puede dar lugar a la aparición de cálculos vesicales.",
      badge: { valor: "u/d", unidad: " " },
      badgeDesc: "Los nutricionistas y veterinarios de Hill's han desarrollado una fórmula especializada para apoyar la salud urinaria de tu mascota, ayudando a prevenir la formación de cálculos y promoviendo una mejor calidad de vida.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/2.png"
  },
  "metabolic": {
    sku: " ",
    nombre: "METABOLIC",
    subtitulo: "Hill's Metabolic comida para perro mantenimiento y pérdida de peso",
    descripcion: "El alimento Hill's Prescription Diet Metabolic es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Formulado para ayudar a disolver los cálculos de estruvita y reducir el riesgo de recurrencia." },
      { icono: iconMap.check, texto: "Reduce el riesgo de formación y recurrencia de cálculos dexalato de calcio." },
      { icono: iconMap.check, texto: "Ayuda a nutrir y mantener una vejiga saludable." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Al igual que ocurre con la epidemia de obesidad en humanos, más del 55% de la población de mascotas tiene sobrepeso.",
      badge: { valor: " ", unidad: " " },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción. ",
      bgColor: "bg-transparent"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/1_.png"
  },
  "metabolic-mobility": {
    sku: "j/d",
    nombre: "METABOLIC MOBILITY",
    subtitulo: "Hill's Prescription Diet j/d comida para perro movilidad articular.",
    descripcion: "El alimento Hill's Prescription Diet Metabolic +j/d+ cuidado de articulaciones es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar a la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición comprobada para ayudar a los perros a perder peso en 2 meses." },
      { icono: iconMap.check, texto: "Apoya la capacidad de tu perro para correr, caminar y saltar." },
      { icono: iconMap.check, texto: "Ayuda a mantener el peso perdido y proporciona energía para el juego activo." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Al igual que ocurre con la epidemia de obesidad en humanos, más del 55% de la población de mascotas tiene sobrepeso.",
      badge: { valor: "j/d", unidad: " " },
      badgeDesc: "Los nutricionistas y veterinarios de Hill's han desarrollado esta fórmula especialmente para ayudar a controlar el peso y favorecer el bienestar integral de tu mascota. ",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/1_3.png"
  },
  "metabolic-chicken": {
    sku: "j/d",
    nombre: "METABOLIC Chicken Flavor",
    subtitulo: "Hill's Metabolic Alimento húmedo para perro pérdida de peso.",
    descripcion: "El alimento Hill's Prescription Diet Metabolic es la opción ideal para perros que necesitan un cuidado especial todos los días.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición comprobada para ayudar a los perros a perder peso en 2 meses." },
      { icono: iconMap.check, texto: "Apoya la capacidad de tu perro para correr, caminar y saltar." },
      { icono: iconMap.check, texto: "Ayuda a mantener el peso perdido y proporciona energía para el juego activo." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Al igual que ocurre con la epidemia de obesidad en humanos, más del 55% de la población de mascotas tiene sobrepeso.",
      badge: { valor: "j/d", unidad: " " },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción. ",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/1_4.png"
  },
  "onc-care": {
    sku: " ",
    nombre: "ONC CARE",
    subtitulo: "Hill's Onc Care comida para perro apoyo y recuperación cancer.",
    descripcion: "El alimento Hill's Prescription Diet ONC CARE Recuperación es la opción ideal para perros que necesitan un cuidado especial todos los días.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición óptima rica en calorías para apoyar su actividad diaria." },
      { icono: iconMap.check, texto: "Combinación única de prebióticos que se ha demostrado que proporciona una calidad de heces uniforme." },
      { icono: iconMap.check, texto: "El sabor irresistible en cada tazón fomenta un apetito entusiasta." },
      { icono: iconMap.check, texto: "Proteína altamente digerible para ayudar a mantener la fuerza y la energía." },
      { icono: iconMap.check, texto: "Fabricado con tecnología ActivBiome+ para nutrir el microbioma intestinal." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Cuando los perros tienen cáncer, es fundamental asegurarse de que se satisfagan todas sus necesidades nutricionales.",
      badge: { valor: "ONC", unidad: "CARE" },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-[#F76F6E]"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/10.png"
  },
  "urgent-care": {
    sku: "a/d",
    nombre: "URGENT CARE",
    subtitulo: "Hill's a/d Alimento húmedo para perro/gato en recuperación.",
    descripcion: "El alimento Hill's Prescription Diet a/d es la opción ideal para perros y gatos que requieren un cuidado especial todos los días.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Cantidad elevada de proteínas especiales para una pronta recuperación de las heridas y del sistema inmunitario." },
      { icono: iconMap.check, texto: "Combinación única de prebióticos que se ha demostrado que proporciona una calidad de heces uniforme." },
      { icono: iconMap.check, texto: "Ingredientes de fácil digestibilidad y calorías extra para mascotas en periodo de recuperación de unaperación quirúrgica algún problema serio de salud." },
      { icono: iconMap.check, texto: "Gran sabor con una textura suave que facilita que alimentes a tu mascota con una jeringuilla incluso con tu mano." },
      
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Los gatos y los perros pueden experimentar cambios metabólicos significativos cuando se recuperan de una cirugía, una enfermedad o una lesión.",
      badge: { valor: "a/d", unidad: " " },
      badgeDesc: "Esta comida está diseñada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados, para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/7.png"
  },
  "w-d-multibenefit": {
    sku: "w/d",
    nombre: "MULTIBENEFIT",
    subtitulo: "Hill's w/d comida para perro manejo de peso/glucosa.",
    descripcion: "El alimento Hill's Prescription Diet w/d es la opción ideal para perros que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Formulado para ayudar a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.check, texto: "Ayuda a controlar el azúcar en la sangre." },
      { icono: iconMap.check, texto: "Promueve una digestión saludable y heces formadas." },
      { icono: iconMap.check, texto: "Promueve la salud del tracto urinario." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Hill's Prescription Diet w/d Multi-Benefit está formulado exclusivamente para beneficiar a tu mascota en múltiples aspectos: salud urinaria, salud digestiva, control del azúcar en la sangre y control del peso.",
      badge: { valor: " ", unidad: " " },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/9_1.png"
  },
  "w-d-multibenefit-chicken": {
    sku: "w/d",
    nombre: "MULTIBENEFIT Chicken Flavor",
    subtitulo: "Hill's w/d comida para perro manejo de peso/glucosa.",
    descripcion: "El alimento Hill's Prescription Diet w/d es la opción ideal para perros que necesitan un cuidado especial todos los días.",
    especies: ["perro"],
    beneficios: [
      { icono: iconMap.check, texto: "Formulado para ayudar a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.check, texto: "Ayuda a controlar el azúcar en la sangre." },
      { icono: iconMap.check, texto: "Promueve una digestión saludable y heces formadas." },
      { icono: iconMap.check, texto: "Promueve la salud del tracto urinario." },
    ],
    datoClinico: {
      icono: "🔬",
      titulo: "Dato clinico",
      descripcion: "Hill's Prescription Diet w/d Multi-Benefit está formulado exclusivamente para beneficiar a tu mascota en múltiples aspectos: salud urinaria, salud digestiva, control del azúcar en la sangre y control del peso.",
      badge: { valor: "w/d", unidad: " " },
      badgeDesc: "Esta comida para perro está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Este producto debe ser utilizado bajo recomendación y supervisión del Médico Veterinario.",
    imagen: "/images/productos-perro/9.png"
  },


    // ================ GATOS =============

  "food-sensitive": {
    sku: "z/d",
    nombre: "z/d FOOD Sensitivities",
    subtitulo: "Sensibilidades Alimentarias, comida para Gato.",
    descripcion: "El alimento Hill's Prescription Diet z/d es la opción ideal para gatos que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Ayuda a eliminar las causas de irritación de la piel relacionadas con los alimentos." },
      { icono: iconMap.check, texto: "Promueve una barrera cutánea saludable." },
      { icono: iconMap.check, texto: "Ayuda a mantener un sistema inmunológico saludable." },
      { icono: iconMap.check, texto: " S+OXSHIELD: Formulado para promover un ambiente urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." }
    ],
    datoClinico: {
      icono: "🥣",
      titulo: " ",
      descripcion: "La sensibilidad y la intolerancia a los alimentos son problemas potencialmente graves que pueden provocar irritaciones en la piel, el pelaje y las orejas, e incluso molestias gastrointestinales.",
      badge: { valor: "z/d", unidad: " " },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-[#124776]"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/f-z_d-food-sensitive-hills.png"
  },

  "i-d-digestive-care": {
    sku: "i/d",
    nombre: "DIGESTIVE CARE",
    subtitulo: "Hill's Prescription Diet i/d comida para gato Cuidado Digestivo ",
    descripcion: "El alimento Hill's Prescription Diet i/d es la opción ideal para gatos que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar en la rutina diaria.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición altamente palatable para reponer los nutrientes perdidos." },
      { icono: iconMap.check, texto: "Promueve heces saludables y ayuda a mejorar la digestión." },
      { icono: iconMap.check, texto: "Ayuda a restaurar el nivel de energía y promueve un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "La salud digestiva de tu gato puede verse afectada negativamente por diversos factores y, cuando presenta malestar digestivo, puede ser una experiencia desagradable para todos los involucrados.",
      badge: { valor: "i/d", unidad: " " },
      badgeDesc: "Respaldada por estudios clínicos en nutrición veterinaria.",
      bgColor: "bg-[#8A2452]"
    },
    advertencia: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
    imagen: "/images/productos-gato/i-d-digestive-care.png"
  },
  "biome-gato": {
    sku: " ",
    nombre: "GASTROINTESTINAL BIOME",
    subtitulo: "Hill's Gastrointestinal Biome comida para gato Cuidado Digestivo ",
    descripcion: "El alimento Hill's Prescription Diet Gastrointestinal Biome es la opción ideal para gatos que necesitan un cuidado especial todos los días. Brinda una nutrición equilibrada y deliciosa, fácil de incorporar a la rutina diaria.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Funciona rápidamente para activar el microbioma intestinal y promover heces saludables." },
      { icono: iconMap.check, texto: "Promueve la actividad de las bacterias intestinales beneficiosas para mantener la salud digestiva." },
      { icono: iconMap.check, texto: "Ayuda a limitar la recurrencia de trastornos digestivos." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "La salud digestiva de tu gato puede verse afectada negativamente por diversos factores y, cuando presenta malestar digestivo, es una experiencia desagradable.",
      badge: { valor: "", unidad: "BIOME" },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción. ",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/biome-gato.png"
  },
  "metabolic-gato": {
    sku: " ",
    nombre: "METABOLIC",
    subtitulo: "Hill's Metabolic comida para gato pérdida y mantenimiento de peso.",
    descripcion: "El alimento Hill's Prescription Diet Metabolic es la opción ideal para gatos que buscan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "El 88% de las mascotas perdieron peso en casa en 2 meses." },
      { icono: iconMap.check, texto: "Ayuda a mantener el peso perdido y proporciona energía para el juego activo." },
      { icono: iconMap.check, texto: "Fácil pérdida de peso: los gatos pierden peso sin reducir excesivamente el tamaño de las porciones." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "Al igual que ocurre con la epidemia de obesidad en humanos, más del 55% de la población de mascotas tiene sobrepeso.",
      badge: { valor: "", unidad: " " },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/1.png"
  },
  "urinary-metabolic": {
    sku: "c/d",
    nombre: "URINARY METABOLIC",
    subtitulo: "Hill's Prescription Diet c/d comida para gato cuidado urinario.",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición para disolver cálculos de estruvita en tan solo 7 días" },
      { icono: iconMap.check, texto: "Nutrición para brindar 8 veces más éxito en la reducción de los signos urinarios." },
      { icono: iconMap.check, texto: "Los padres de mascotasbservaron una pérdida de peso visible con esta nutrición." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "Al igual que ocurre con la epidemia de obesidad en humanos, más del 55% de la población de mascotas tiene sobrepeso.",
      badge: { valor: "7", unidad: "Días" },
      badgeDesc: "Una vejiga saludable comienza con el equilibrio adecuado de nutrientes vitales.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/1_3.png"
  },
  "urinary-care": {
    sku: "c/d",
    nombre: "URINARY CARE",
    subtitulo: "Hill's Prescription Diet c/d comida para gato cuidado urinario.",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para gatos que necesitan un cuidado especial todos los días. ",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Formulado para reducir el estrés, un factor de riesgo para los signos urinarios comunes." },
      { icono: iconMap.check, texto: "Formulado para disolver cálculos de estruvita en tan solo 7 días (promedio de 27 días)." },
      { icono: iconMap.check, texto: "Formulado para disminuir el riesgo a largo plazo de cálculos dexalato de calcio cuando se alimenta diariamente." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "El exceso de minerales puede favorecer la formación de cristales en la orina, lo que puede llevar a la creación de cálculos en la vejiga.",
      badge: { valor: "27", unidad: "Días" },
      badgeDesc: "Una vejiga saludable comienza con el equilibrio adecuado de nutrientes vitales.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/2_1.png"
  },
  "urinary-care-cd": {
    sku: "c/d",
    nombre: "URINARY CARE",
    subtitulo: "Hill's Prescription Diet c/d comida para gato cuidado urinario.",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Disuelve los cálculos de estruvita en tan solo 7 días (promedio de 27 días)." },
      { icono: iconMap.check, texto: "Reduce el riesgo de cálculos de estruvita yxalato de calcio." },
      { icono: iconMap.check, texto: "La alimentación de por vida aporta beneficios a los gatos con signos urinarios." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "El exceso de minerales puede favorecer la formación de cristales en la orina, lo que puede llevar a la creación de cálculos en la vejiga.",
      badge: { valor: "27", unidad: "Días" },
      badgeDesc: "Una vejiga saludable comienza con el equilibrio adecuado de nutrientes vitales.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/2_2.png"
  },
  "multi-benefit": {
    sku: "w/d",
    nombre: "MULTI-BENEFIT",
    subtitulo: "Hill's w/d comida para gato manejo de peso/glucosa.",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: " Formulado para ayudar a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.check, texto: "Ayuda a controlar el azúcar en la sangre." },
      { icono: iconMap.check, texto: "Promueve una digestión saludable y heces formadas." },
      { icono: iconMap.check, texto: " Promueve la salud del tracto urinario." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "Hill's Prescription Diet w/d Multi-Benefit está formulado exclusivamente para beneficiar a tu mascota en múltiples aspectos: salud urinaria, salud digestiva, control del azúcar en la sangre y control del peso.",
      badge: { valor: "27", unidad: "Días" },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/4.png"
  },
  "kidney-care-gato": {
    sku: "k/d",
    nombre: "KIDNEY CARE",
    subtitulo: "Hill's Prescription Diet k/d comida para gato cuidado renal.",
    descripcion: "El alimento Hill's Prescription Diet c/d Multicare es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: " Formulado para ayudar a metabolizar la grasa y mantener el músculo magro." },
      { icono: iconMap.check, texto: "Ayuda a controlar los cambios invisibles dentro del tracto intestinal que afectan la función renal." },
      { icono: iconMap.check, texto: "Ayuda a construir masa muscular y ayuda a mantener la energía y la fuerza." },
      { icono: iconMap.check, texto: "Estimula el apetito y fomenta la ingesta de alimentos." },
      { icono: iconMap.check, texto: "S+OXSHIELD: Formulado para promover un entorno urinario que reduce el riesgo de desarrollar cristales de estruvita yxalato de calcio." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "La salud digestiva de tu gato puede verse afectada negativamente por diversas causas y, cuando presenta malestar digestivo, es una experiencia completamente desagradable para todos los involucrados.",
      badge: { valor: "k/d", unidad: " " },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/5.png"
  },
  "digestive-care-gato": {
    sku: "i/d",
    nombre: "DIGESTIVE CARE",
    subtitulo: "Hill's Prescription Diet i/d comida para gato Cuidado Digestivo.",
    descripcion: "El alimento Hill's Prescription Diet Gastrointestinal Biome es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: " Nutrición altamente palatable para reponer los nutrientes perdidos." },
      { icono: iconMap.check, texto: "Ayuda a controlar los cambios invisibles dentro del tracto intestinal que afectan la función renal." },
      { icono: iconMap.check, texto: "Promueve heces saludables y ayuda a mejorar la digestión." },
      { icono: iconMap.check, texto: "Ayuda a restaurar el nivel de energía y promueve un sistema inmunológico saludable." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "La salud digestiva de tu gato puede verse afectada negativamente por diversos factores y, cuando presenta malestar digestivo, es una experiencia completamente desagradable para todos los involucrados.",
      badge: { valor: "i/d", unidad: " " },
      badgeDesc: "Esta comida para gato está pensada para adaptarse fácilmente a la rutina diaria, ofreciendo ingredientes de alta calidad cuidadosamente seleccionados para que tu mascota reciba lo mejor en cada porción.",
      bgColor: "bg-purple-600"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/6.png"
  },
  "onc-care-gato": {
    sku: " ",
    nombre: "ONC CARE",
    subtitulo: "Hill's Onc Care Alimento para gato apoyo recuperación cancer.",
    descripcion: "El alimento Hill's Prescription Diet Onc Care Recuperación es la opción ideal para gatos que necesitan un cuidado especial todos los días.",
    especies: ["gato"],
    beneficios: [
      { icono: iconMap.check, texto: "Nutrición óptima rica en calorías para apoyar su actividad diaria." },
      { icono: iconMap.check, texto: "Combinación única de prebióticos que se ha demostrado que proporciona una calidad de heces uniforme." },
      { icono: iconMap.check, texto: " El sabor irresistible en cada tazón fomenta un apetito entusiasta." },
      { icono: iconMap.check, texto: "Proteína altamente digerible para ayudar a mantener la fuerza y la energía." },
      { icono: iconMap.check, texto: "Fabricado con tecnología ActivBiome+ para nutrir el microbioma intestinal." },
    ],
    datoClinico: {
      icono: "🥣",
      titulo: "Dato Clínico",
      descripcion: "Cuando los gatos tienen cáncer, es fundamental asegurarse de que se satisfagan todas sus necesidades nutricionales.",
      badge: { valor: "ONC", unidad: "CARE" },
      badgeDesc: "Los alimentos terapéuticos para gatos diagnosticados con cáncer están diseñados para ayudar a mantener su fuerza y energía, así como para estimular el apetito desde el primer plato.",
      bgColor: "bg-[#F76F6E]"
    },
    advertencia: "Pregunta a tu veterinario por instrucciones de alimentación específicas para tu mascota.",
    imagen: "/images/productos-gato/7_1.png"
  },

  
};
