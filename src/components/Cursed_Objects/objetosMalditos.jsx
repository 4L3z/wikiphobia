import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './objetosMalditos.css';

const MySwal = withReactContent(Swal);

const ObjetosMalditos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/Cursed_Objects/objetos_malditos.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  const openModal = (item) => {
    let contentHtml = '';

    if (item.type === 'table') {
      // Genera la tabla en HTML
      const tableRows = item.tableData.map(row => `
        <tr>
          <td>${row.question}</td>
          <td>${row.sanityLoss}</td>
        </tr>
      `).join('');
      const listaDatos = item.datos.map((dato) => `<li class='item'>${dato}</li>`).join('');

      const questionLabel = item.label1;
      const consequenceLabel = item.label2;

      contentHtml = `
        <p>${item.description}</p>
        <ul class="item-list">
          ${listaDatos}
        </ul>
        <table style="width: 100%; border-collapse: collapse; text-align: left; color: black;">
          <thead>
        <tr style="border-bottom: 2px solid red;">
          <th style="padding: 8px;">${questionLabel}</th>
          <th style="padding: 8px;">${consequenceLabel}</th>
        </tr>
          </thead>
          <tbody>
        ${tableRows}
          </tbody>
        </table>
        <video controls width="100%" style="margin-top: 15px;">
          <source src="${item.video}" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      `;
    } else {
      // Si no es tipo "table", genera el contenido estándar
      const listaDatos = item.datos.map((dato) => `<li class='item'>${dato}</li>`).join('');

      contentHtml = `
        <p>${item.description}</p>
        <ul class="item-list">
          ${listaDatos}
        </ul>
        <video controls width="100%" style="margin-top: 15px;">
          <source src="${item.video}" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      `;
    }

    MySwal.fire({
      title: item.name,
      html: contentHtml,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Cerrar'
    });
  };




  return (
    <section className="objetos-section" id='c-objects'>
      <h1>Objetos Malditos</h1>
      <div className="objetos-container">
        <div className="objetos-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className="objeto-card"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => openModal(item)}
            >
              <div className="overlay">
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default ObjetosMalditos;
