import { recetas } from "./data/recetas";
import RecetaCard from "./components/RecetaCard";

function App() {
  console.log(recetas);

  return (
    <div>
      <h1>RecetApp</h1>

      {recetas.map((receta, index) => (
        <RecetaCard
          key={index}
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
        />
      ))}
    </div>
  );
}

export default App;
