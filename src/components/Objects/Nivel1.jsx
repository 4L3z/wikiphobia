import { useState, useEffect } from 'react';
import './Nivel.css';

const Nivel1 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/Objects/Nivel1.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="nivel-container">
      <h1>Objetos Tier 1</h1>
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

export default Nivel1;
