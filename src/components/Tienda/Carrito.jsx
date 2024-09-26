import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CarritoModal from './CarritoModal';

const Carrito = ({ carrito }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="carrito" onClick={toggleModal}>
      <div>
        <FaShoppingCart size={24} style={{ cursor: 'pointer' }}/>
        <span className='numerito'>{carrito.length}</span>
      </div>
      <CarritoModal carrito={carrito} mostrarModal={mostrarModal} toggleModal={toggleModal} />
    </div>
  );
};

export default Carrito;
