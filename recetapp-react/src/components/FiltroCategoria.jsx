function FiltroCategoria({ filtro, setFiltro }) {
    return (
      <div>
        <button onClick={() => setFiltro("Todas")}>Todas</button>
        <button onClick={() => setFiltro("Entrada")}>Entrada</button>
        <button onClick={() => setFiltro("Fondo")}>Fondo</button>
        <button onClick={() => setFiltro("Postre")}>Postre</button>
      </div>
    );
  }
  
  export default FiltroCategoria;