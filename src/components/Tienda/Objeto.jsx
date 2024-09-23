import React, { useState } from 'react';

const Objeto = ({ objeto, agregarAlCarrito }) => {
  const [tier, setTier] = useState(objeto.tiers[0]);

  return (
    <div className="objeto-card">
      <img src={objeto.imagen} alt={objeto.nombre} />
      <h3>{objeto.nombre}</h3>
      <p>{tier.descripcion}</p>
      <select onChange={(e) => setTier(objeto.tiers[e.target.value])}>
        {objeto.tiers.map((tier, index) => (
          <option key={index} value={index}>
            {tier.nombre} - ${tier.precio}
          </option>
        ))}
      </select>
      <button onClick={() => agregarAlCarrito({ ...objeto, precio: tier.precio })}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Objeto;
