const CarritoModal = ({ carrito, mostrarModal, toggleModal }) => {
  if (!mostrarModal) return null;

  // Función para agrupar los artículos repetidos
  const agruparItems = (carrito) => {
    const itemsAgrupados = {};

    carrito.forEach(item => {
      if (itemsAgrupados[item.nombre]) {
        // Si el item ya existe, sumamos la cantidad
        itemsAgrupados[item.nombre].cantidad += item.cantidad ? item.cantidad : 1;
      } else {
        // Si no existe, lo agregamos al objeto
        itemsAgrupados[item.nombre] = { ...item, cantidad: item.cantidad ? item.cantidad : 1 };
      }
    });

    // Convertimos el objeto en un array
    return Object.values(itemsAgrupados);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precioNumerico = parseFloat(item.precio);
      const cantidad = parseInt(item.cantidad, 10) || 1;
      return total + (precioNumerico * cantidad);
    }, 0);
  };

  const itemsAgrupados = agruparItems(carrito); // Agrupamos los items antes de mostrarlos

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal} style={{ cursor: 'pointer' }}>&times;</span>
        <h2 className="modal-store-title">Detalle del Carrito</h2>
        <ul>
          {itemsAgrupados.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio} x {item.cantidad}
            </li>
          ))}
        </ul>
        <p className="totalxd">Total: ${calcularTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CarritoModal;
