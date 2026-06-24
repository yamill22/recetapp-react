import PropTypes from "prop-types";

function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
}) {
  // Colores por categoría
  const obtenerColor = () => {
    switch (categoria) {
      case "Entrada":
        return "#4CAF50"; // verde
      case "Fondo":
        return "#2196F3"; // azul
      case "Postre":
        return "#FF9800"; // naranja
      default:
        return "#9E9E9E"; // gris
    }
  };

  const estiloCard = {
    border: `2px solid ${obtenerColor()}`,
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
  };

  const estiloCategoria = {
    backgroundColor: obtenerColor(),
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "inline-block",
    marginBottom: "10px",
  };

  return (
    <div style={estiloCard}>
      <h2>{nombre}</h2>

      <span style={estiloCategoria}>{categoria}</span>

      <p><strong>Origen:</strong> {origen}</p>
      <p><strong>Porciones:</strong> {porciones}</p>

      <p>{descripcion}</p>

      <h4>Ingredientes:</h4>
      <ul>
        {ingredientes.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Validación de props
RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.number,
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
};

// ✅ Valores por defecto
RecetaCard.defaultProps = {
  nombre: "Receta sin nombre",
  origen: "Desconocido",
  porciones: 1,
  categoria: "Sin categoría",
  descripcion: "Sin descripción",
  ingredientes: [],
};

export default RecetaCard;

