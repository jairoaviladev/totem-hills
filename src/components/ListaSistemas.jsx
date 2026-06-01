// src/components/ListaSistemas.jsx
import { setPuntoActivo, setIsModalOpen } from "../context/tiendaEstado";

export default function ListaSistemas(props) {
  /**
   * Sincroniza el punto clínico con las señales globales de tiendaEstado.js
   * Evita mutaciones y asegura que el Modal lea correctamente el arreglo de IDs.
   */

  /**
   * Mapa de colores seguros para Tailwind.
   */
  const COLOR_MAP = {
    "fill-blue-800": "bg-blue-800",
    "fill-cyan-500": "bg-cyan-500",
    "fill-green-500": "bg-green-500",
    "fill-red-600": "bg-red-600",
    "fill-amber-500": "bg-amber-500",
    "fill-pink-500": "bg-pink-500",
    "fill-purple-600": "bg-purple-600",
    "fill-teal-500": "bg-teal-500",
    "fill-orange-500": "bg-orange-500",
    "fill-blue-400": "bg-blue-400",
  };
  const handleTriggerFromList = (punto) => {
    setPuntoActivo({
      id: punto.id,
      nombre: punto.nombre,
      desc: punto.desc,
      productos: punto.productos,
    });
    setIsModalOpen(true);
  };

  return (
    <ul class="w-full space-y-3 list-none p-0 m-0">
      {props.puntos.map((punto) => {
        const totalProductos = punto.productos?.length || 0;

        return (
          <li>
            <button
              onClick={() => handleTriggerFromList(punto)}
              class=" flex px-5 mb-4 justify-center ml-7 transition-all text-left group cursor-pointer touch-manipulation"
            >
              <div class="flex items-center gap-5">
                <div
                  class={`w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-xl ${
                    COLOR_MAP[punto.color] ?? "bg-blue-600"
                  } group-active:opacity-80 transition-colors shrink-0 shadow-md`}
                >
                  {punto.id}
                </div>

                <div class="flex flex-col">
                  <span class="text-slate-500 text-2xl tracking-wide group-active:text-white transition-colors ">
                    {punto.nombre}
                  </span>
                  {/* <span class="text-slate-500 text-sm font-bold tracking-wider mt-0.5 group-active:text-slate-400">
                    {totalProductos === 1
                      ? '1 Producto Recomendado'
                      : `${totalProductos} Productos Recomendados`}
                  </span> */}
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
