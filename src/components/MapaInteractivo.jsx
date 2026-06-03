import { setPuntoActivo, setIsModalOpen } from "../context/tiendaEstado";
import { anatomiaData } from "../data/anatomia";

/**
 * Renderiza la imagen base de la especie con sus puntos interactivos.
 * Cada punto puede abrir un modal con uno o múltiples productos.
 */
export default function MapaInteractivo(props) {
  const puntosClinicos = anatomiaData[props.especie] || [];

  const handleTriggerPoint = (punto) => {
    setPuntoActivo({
      id: punto.id,
      nombre: punto.nombre,
      desc: punto.desc,
      productos: punto.productos, // array de IDs de productos
    });
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Imagen anatómica base */}
      <img
        src={`/images/${props.especie}-base.png`}
        alt={`Anatomía clínica: ${props.especie}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
      />

      {/* SVG de puntos interactivos sobre canvas 1000×2000 */}
      <svg
        viewBox="0 0 1000 2000"
        className="absolute inset-0 w-full h-full z-10"
      >
        {puntosClinicos.map((punto) => (
          <g
            key={punto.id}
            role="button"
            tabIndex="0"
            onClick={() => handleTriggerPoint(punto)}
            className="cursor-pointer group"
          >
            {/* Círculo exterior con color por sistema */}
            <circle
              cx={punto.cx}
              cy={punto.cy}
              r="44"
              className={`${punto.color} stroke-white stroke-2 group-active:opacity-80 transition-opacity`}
            />
            {/* Número identificador o ícono si existe */}
            {punto.icono ? (
              <image
                href={punto.icono}
                x={punto.cx - 25}
                y={punto.cy - 25}
                width={50}
                height={50}
              />
            ) : (
              <text
                x={punto.cx - 10}
                y={punto.cy + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                className="totem-punto-text"
              >
                {punto.id}
              </text>
            )}
            {/* Hitbox táctil extendido */}
            <circle
              cx={punto.cx}
              cy={punto.cy}
              r="75"
              className="fill-transparent"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
