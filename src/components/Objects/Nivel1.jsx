import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import './Nivel.css';

const Nivel1 = () => {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  useEffect(() => {
    fetch('/Objects/Nivel1.json')
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
      <h1 className='nivel-title'>Objetos Tier 1</h1>

      {/* Enlaces a otras secciones */}
      <nav className="navigation">
        <Link to="/nivel2" className='nav-link'>Ir a Tier 2</Link>
        <Link to="/nivel3" className='nav-link'>Ir a Tier 3</Link>
        <Link to="/" className='nav-link'>Volver al Inicio</Link>
      </nav>

      <div className="cards">
        {items.map(item => (
          <div key={item.id} className={`card ${item.consumable ? 'consumable' : ''}`}>
            <img src={item.image} alt={item.title} onClick={() => handleImageClick(item.image)} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
            {item.consumable && <span className="consumable-badge">Consumible</span>}
          </div>
        ))}
      </div>

      {/* Modal */}
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

export default Nivel1;
