import { Show, For } from 'solid-js';
import { isModalOpen, setIsModalOpen, puntoActivo } from '../context/tiendaEstado';
import { productosData } from '../data/productos';

/**
 * Modal global del tótem.
 * Soporta uno o múltiples productos por punto anatómico.
 * Cada producto tiene su propio botón de navegación.
 */
export default function Modal() {
  return (
    <Show when={isModalOpen()}>
      {/* Overlay — absolute para quedar dentro del tótem */}
      <div class="absolute inset-0 bg-[#dfecfc]/20 backdrop-blur-sm z-50 flex items-center justify-center p-10">

        <div class="bg-[#dfecfc] w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">

          {/* Cabecera del punto anatómico */}
          <div class="bg-blue-900 px-10 py-8 flex justify-between items-start gap-6">
            <div>
              <h2 class="text-white text-4xl font-black leading-tight">
                {puntoActivo().nombre}
              </h2>
              <p class="text-blue-200 text-xl mt-2 leading-relaxed">
                {puntoActivo().desc}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              class="shrink-0 bg-white/20 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl border border-white/30 active:bg-white/40 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Lista de productos asociados al punto */}
          <div class="px-10 py-8 space-y-4">
            <p class="text-slate-500 text-lg uppercase tracking-widest font-bold mb-6">
              Producto{puntoActivo().productos?.length > 1 ? 's' : ''} recomendado{puntoActivo().productos?.length > 1 ? 's' : ''}
            </p>

            <For each={puntoActivo().productos}>
              {(productoId) => {
                const producto = productosData[productoId];
                if (!producto) return null;

                return (
                 
                  <a
                    href={`/producto/${productoId}`}
                    class="flex items-center gap-6 p-6 rounded-2xl border-2 border-slate-300 active:border-blue-500 active:bg-blue-50 transition-all group "
                  >
                    {/* Imagen del producto */}
                    <div class="w-28 h-28 shrink-0 bg-[#dfecfc] rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        class="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Info del producto */}
                    <div class="flex-1 min-w-0">
                      <span class="text-blue-600 text-2xl font-black block">{producto.sku}</span>
                      <span class="text-slate-800 text-xl font-bold block">{producto.nombre}</span>
                      <span class="text-slate-400 text-base">{producto.subtitulo}</span>
                      
                      {/* Preview de primeros dos beneficios */}
                      <ul class="mt-3 space-y-1">
                        {producto.beneficios?.slice(0, 2).map((b) => (
                          /* CORRECCIÓN: Se removió el atributo 'key' innecesario en SolidJS */
                          <li class="text-slate-600 text-base flex items-start gap-2">
                            <span>{b.icono}</span>
                            <span>{b.texto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Flecha de navegación */}
                    <div class="text-blue-500 text-3xl group-active:translate-x-1 transition-transform shrink-0">
                      →
                    </div>
                  </a>
                );
              }}
            </For>
          </div>

        </div>
      </div>
    </Show>
  );
}