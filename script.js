function showScreamer() {
  Swal.fire({
    title: '¡Sorpresa!',
    text: 'Haz click en el boton para tu ¡Sorpresa!',
    icon: 'warning',
    showCancelButton: false,
    confirmButtonText: '¡Sorpresa!',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    background: "black",
    color: "#FFF"
  }).then((result) => {
    if (result.isConfirmed) {
      // Mostrar el screamer
      const screamer = document.createElement('video');
      screamer.src = './src/homepage/easteregg.mp4'; // Reemplaza con la ruta de tu video
      screamer.autoplay = true;
      screamer.volume = '50';
      screamer.style.width = '100%';
      screamer.style.height = '100%';
      document.body.appendChild(screamer);
    }
  });
}

// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
const icon = btnToggle.querySelector('i');

btnToggle.addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');

  // Alternar ícono
  if (sidebar.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times'); // Cambia a X
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); // Cambia a barras
  }
});

