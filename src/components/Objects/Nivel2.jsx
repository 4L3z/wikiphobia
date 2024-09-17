import { useState, useEffect } from 'react';
import './Nivel.css';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom

const Nivel2 = () => {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    fetch('/Objects/Nivel2.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Configura la imagen seleccionada
  };

  const handleCloseClick = () => {
    setSelectedImage(null); // Cierra la imagen en pantalla completa
  };

  return (
<div className="nivel-container">
  <h1 className='nivel-title'>Objetos Tier 2</h1>
  <nav className="navigation">
        <Link to="/nivel1" className='nav-link'>Ir a Tier 1</Link>
        <Link to="/nivel3" className='nav-link'>Ir a Tier 3</Link>
        <Link to="/" className='nav-link'>Volver al Inicio</Link>
      </nav>
  <div className="cards">
    {items.map(item => (
      <div key={item.id} className={`card ${item.consumable ? 'consumable' : ''}`}>
        <img src={item.image} alt={item.title} onClick={() => handleImageClick(item.image)}  />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <span className="category">{item.category}</span>
        {item.consumable && <span className="consumable-badge">Consumible</span>}
      </div>
    ))}
  </div>
  {selectedImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseClick}>
              X
            </button>
            <img src={selectedImage} alt="Selected Object" className="modal-image" />
          </div>
        </div>
      )}
</div>

  );
};

export default Nivel2;
