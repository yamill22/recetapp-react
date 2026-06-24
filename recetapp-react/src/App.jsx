import { recetas } from "./data/recetas";
import ListaRecetas from "./components/ListaRecetas";

function App() {
  console.log(recetas);

  return (
    <div>
      <h1>RecetApp</h1>

      <ListaRecetas recetas={recetas} />
    </div>
  );
}

export default App;
