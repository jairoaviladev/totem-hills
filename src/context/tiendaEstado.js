import { createSignal } from 'solid-js';

/**
 * Estado global reactivo del tótem.
 * Maneja qué punto está activo y si el modal está visible.
 * Un punto puede tener múltiples productos asociados.
 */
const [isModalOpen, setIsModalOpen] = createSignal(false);

const [puntoActivo, setPuntoActivo] = createSignal({
  nombre: '',
  desc: '',
  productos: []   // array de IDs — soporta uno o múltiples productos
});

export { isModalOpen, setIsModalOpen, puntoActivo, setPuntoActivo };