import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export function MapsModal({ mapData }) {
  useEffect(() => {
    if (mapData) {
      Swal.close(); // Cierra cualquier modal abierto previamente
      
      const imagesHtml = mapData.images.map(img => `
        <div class="image-wrapper">
          <div class="image-title">${img.title}</div>
          <img src="${img.src}" alt="${img.title}" class="image-map">
        </div>
      `).join('');

      const infoHtml = mapData.info.map(info => `
        <p>${info.title}</p>
        <ul class="lista-modal">${info.items.map(item => `<li>${item}</li>`).join('')}</ul>
      `).join('');

      Swal.fire({
        title: mapData.title,
        html: `
          <div class="image-container">${imagesHtml}</div>
          ${infoHtml}
        `,
        width: '80%',
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        background: "black",
        color: "#FFF",
        customClass: {
          container: 'swal2-container',
          content: 'swal2-content',
          title: 'swal2-title',
        },
        padding: '2em',
        didClose: () => {
          setTimeout(() => {
            document.dispatchEvent(new CustomEvent('modalClosed'));
          }, 100);
        }
      });
    }
  }, [mapData]); // Aquí está la clave, el efecto depende de los cambios en `mapData`

  return null;
}

MapsModal.propTypes = {
  mapData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
    info: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
};
