// src/components/ListaSistemas.jsx
import { For } from 'solid-js';
import { setPuntoActivo, setIsModalOpen } from '../context/tiendaEstado';

/**
 * Componente interactivo inferior para el Tótem Vertical.
 * Mapea los sistemas de la especie y comparte la misma firma de datos 
 * que el mapa SVG para abrir el modal multi-producto de forma idéntica.
 */
export default function ListaSistemas(props) {
  
  /**
   * Sincroniza el punto clínico con las señales globales de tiendaEstado.js
   * Evita mutaciones y asegura que el Modal lea correctamente el arreglo de IDs.
   */
  const handleTriggerFromList = (punto) => {
    setPuntoActivo({
      nombre: punto.nombre,
      desc: punto.desc,
      productos: punto.productos // Mapea directamente el array de strings, ej: ["wd-multi-benefit", "kd-kidney-care"]
    });
    setIsModalOpen(true);
  };

  return (
    <div class="w-full space-y-3">
      <For each={props.puntos}>
        {(punto) => {
          // Extrae el conteo real de productos recomendados declarados por punto
          const totalProductos = punto.productos?.length || 0;

          return (
            <button
              onClick={() => handleTriggerFromList(punto)}
              class="w-full flex items-center justify-between p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 active:bg-blue-950/60 active:border-blue-500/80 transition-all text-left group cursor-pointer touch-manipulation"
            >
              {/* Contenedor de Información e Identificador Numérico */}
              <div class="flex items-center gap-5">
                
                {/* ID del Punto Clínico (Sincronizado con los números del mapa) */}
                <div class="w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-xl bg-blue-600 group-active:bg-blue-500 transition-colors shrink-0 shadow-md">
                  {punto.id}
                </div>
                
                {/* Textos Informativos del Sistema de Órganos */}
                <div class="flex flex-col">
                  <span class="text-slate-200 text-2xl font-black tracking-wide group-active:text-white transition-colors uppercase">
                    {punto.nombre}
                  </span>
                  
                  {/* Etiqueta Dinámica de Fórmulas Clínicas */}
                  <span class="text-slate-500 text-sm font-bold tracking-wider mt-0.5 group-active:text-slate-400">
                    {totalProductos === 1 
                      ? '1 Producto Recomendado' 
                      : `${totalProductos} Productos Recomendados`
                    }
                  </span>
                </div>
              </div>

              {/* Icono de Acción con micro-interacción de empuje */}
              <div class="text-slate-600 group-active:text-blue-400 group-active:translate-x-1.5 transition-all text-3xl pr-2 select-none" aria-hidden="true">
                →
              </div>
            </button>
          );
        }}
      </For>
    </div>
  );
}