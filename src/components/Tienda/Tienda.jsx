import { useState } from 'react';
import objetosData from './Products.json';
import Objeto from './Objeto';
import Carrito from './Carrito';
import './tienda.css';

const Tienda = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (objeto) => {
    setCarrito([...carrito, objeto]);
  };

  return (
    <div className="tienda-container">
      <h1>TIENDA</h1>
      <Carrito carrito={carrito} />
      
      <div className="objetos-grid">
        {objetosData.map((objeto, index) => (
          <Objeto key={index} objeto={objeto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
};

export default Tienda;
