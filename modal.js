document.addEventListener('DOMContentLoaded', () => {
    fetch('./mapData.json')
      .then(response => response.json())
      .then(mapData => {
        document.querySelectorAll('.map').forEach(map => {
          map.addEventListener('click', () => {
            const mapId = map.getAttribute('data-id');
            const mapInfo = mapData[mapId];
  
            if (mapInfo) {
              const imagesHtml = mapInfo.images.map(img => `
                <div class="image-wrapper">
                  <div class="image-title">${img.title}</div>
                  <img src="${img.src}" alt="${img.title}" class="image-map">
                </div>
              `).join('');
  
              const infoHtml = mapInfo.info.map(info => `
                <p>${info.title}</p>
                <ul>${info.items.map(item => `<li>${item}</li>`).join('')}</ul>
              `).join('');
  
              Swal.fire({
                title: mapInfo.title,
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
              });
            }
          });
        });
      })
      .catch(error => console.error('Error loading map data:', error));
  });
  