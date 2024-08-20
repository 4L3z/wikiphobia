function showScreamer() {
    Swal.fire({
      title: '¡Sorpresa!',
      text: 'No hay ningún screamer :)',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      background: "black",
      color: "#FFF"
    }).then((result) => {
      if (result.isConfirmed) {
        // Mostrar el screamer
        const screamer = document.createElement('video');
        screamer.src = './src/screamer.mp4'; // Reemplaza con la ruta de tu video
        screamer.autoplay = true;
        screamer.volume = '100';
        screamer.style.width = '100%';
        screamer.style.height = '100%';
        document.body.appendChild(screamer);
      }
    });
  }


