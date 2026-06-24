import RecetaCard from "./RecetaCard";

function ListaRecetas({ recetas }) {
  return (
    <div>
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id} 
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

export default ListaRecetas;