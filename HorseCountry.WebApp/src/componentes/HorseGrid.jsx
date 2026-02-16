import { useEffect, useState } from 'react';

const HorseGrid = () => {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usamos el puerto donde viste el JSON (5233)
    fetch("http://localhost:5233/api/horses")
      .then((res) => res.json())
      .then((data) => {
        setHorses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al buscar caballos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Cargando ejemplares...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros ejemplares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {horses.map((horse) => (
          <div key={horse.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Aquí irá la imagen después, por ahora un placeholder */}
              <span className="text-gray-400 text-5xl">🐴</span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{horse.name}</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                  {horse.status?.description || 'Disponible'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{horse.breed?.description} • {horse.color?.description}</p>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {horse.descriprtion} {/* Usamos el typo 'r' para que coincida con tu API */}
              </p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-extrabold text-blue-600">${horse.price.toLocaleString()}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorseGrid;