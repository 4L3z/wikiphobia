
const Objeto = ({ objeto, agregarAlCarrito }) => {
  return (
    <div className="objeto-card">
      <img src={objeto.imagen} alt={objeto.nombre} />
      <h3>{objeto.nombre}</h3>
      <p>Precio: ${objeto.precio}</p>
      <button onClick={() => agregarAlCarrito(objeto)}>Agregar al Carrito</button>
    </div>
  );
};

export default Objeto;
