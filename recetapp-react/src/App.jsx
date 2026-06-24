import { useState } from "react";
import { recetas } from "./data/recetas";
import ListaRecetas from "./components/ListaRecetas";
import FiltroCategoria from "./components/FiltroCategoria";

function App() {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  
  const manejarBusqueda = (e) => {
    let valor = e.target.value;

    valor = valor.trim().slice(0, 50); 

    setBusqueda(valor);
  };

  
  const recetasFiltradas = recetas.filter((receta) => {
    const coincideCategoria =
      filtro === "Todas" || receta.categoria === filtro;

    const coincideNombre = receta.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return coincideCategoria && coincideNombre;
  });

  return (
    <div>
      <h1>RecetApp</h1>

      {/*  Filtro por categoría */}
      <FiltroCategoria filtro={filtro} setFiltro={setFiltro} />

      {/*  Búsqueda controlada */}
      <input
        type="text"
        placeholder="Buscar receta..."
        value={busqueda}
        onChange={manejarBusqueda}
      />

      {/* Renderizado condicional */}
      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <p>No hay recetas que coincidan</p>
      )}
    </div>
  );
}

export default App;
