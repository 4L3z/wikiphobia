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
      <div className="iframe-container">
        <h2>COMPRA EL JUEGO AQUÍ!!</h2>
        <div className="responsive-iframe">
          <iframe 
            src="https://store.steampowered.com/widget/739630/" 
            frameBorder="0" 
            title="Compra el juego"
          ></iframe>
        </div>
      </div>
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
