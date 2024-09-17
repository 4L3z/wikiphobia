import { useState, useEffect } from 'react';
import './Nivel.css';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
const Nivel3 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/path/to/nivel3.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="nivel-container">
        <nav className="navigation">
        <Link to="/nivel1" className='nav-link'>Ir a Tier 1</Link>
        <Link to="/nivel2" className='nav-link'>Ir a Tier 2</Link>
        <Link to="/" className='nav-link'>Volver al Inicio</Link>
      </nav>
      <h1 className='nivel-title' >Objetos Tier 3</h1>
      <div className="cards">
        {items.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nivel3;
