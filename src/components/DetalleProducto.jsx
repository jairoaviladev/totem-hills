export default function DetalleProducto(props) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-12 text-white">
        <div className="flex flex-col items-center mt-12">
          <div className="bg-white p-6 rounded-3xl shadow-inner mb-10 w-80 h-80 flex items-center justify-center">
            <img src={props.datos.imagen} alt={props.datos.nombre} className="max-h-full object-contain" />
          </div>
          <h1 className="text-6xl font-black text-blue-500 mb-4">{props.datos.sku}</h1>
          <h2 className="text-3xl font-bold text-slate-200 text-center">{props.datos.nombre}</h2>
        </div>
  
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-24">
          <h3 className="text-2xl font-bold text-slate-400 mb-6 uppercase tracking-wider">Beneficios Clave</h3>
          <ul className="space-y-4">
            {props.datos.indicaciones.map((item) => (
              <li className="flex items-start text-xl text-slate-200">
                <span className="text-blue-500 mr-4 text-2xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }