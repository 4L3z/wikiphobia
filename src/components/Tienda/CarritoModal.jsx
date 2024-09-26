

const CarritoModal = ({ carrito, mostrarModal, toggleModal }) => {
  if (!mostrarModal) return null;

  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precioNumerico = parseFloat(item.precio); // Convertimos el precio a número
      const cantidad = parseInt(item.cantidad, 10) || 1; // Aseguramos que la cantidad sea un número
      return total + (precioNumerico * cantidad);
    }, 0);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal} style={{ cursor: 'pointer' }}>&times;</span>
        <h2 className="modal-store-title">Detalle del Carrito</h2>
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio} x {item.cantidad ? item.cantidad : 1}
            </li>
          ))}
        </ul>
        <p className="totalxd">Total: ${calcularTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CarritoModal;
