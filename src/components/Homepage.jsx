import Swal from 'sweetalert2'


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

        const screamer = document.createElement('video');
        screamer.src = '/homepage/easteregg.mp4'; 
        screamer.autoplay = true;
        screamer.volume = '50';
        screamer.style.width = '100%';
        screamer.style.height = '100%';
        document.body.appendChild(screamer);
      }
    });
  }




export function Homepage() {
    return (
        <section className="homepage">
            <div className="home-container">
                <div className="title">
                    <h1>GUIA PHASMOPHOBIA</h1>
                </div>
                <div className="stars">
                    <img src="/homepage/star.png" alt="image not found 404" />
                    <img src="/homepage/star.png" alt="image not found 404" onClick={showScreamer} />
                    <img src="/homepage/star.png" alt="image not found 404" />
                </div>
        </div>
        </section>
    )
}