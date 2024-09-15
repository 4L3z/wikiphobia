import { useState, useEffect } from 'react';
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
      <h1>Objetos Tier 1</h1>
      <div className="cards">
        {items.map(item => (
          <div key={item.id} className="card">
            <img 
              src={item.image} 
              alt={item.title} 
              onClick={() => handleImageClick(item.image)} 
              className="object-cover w-full h-48 cursor-pointer transition-transform duration-300 hover:scale-105" 
            />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
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
