import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './Ghosts.css'; // Asegúrate de importar los estilos

export default function Ghosts() {
    const [ghosts, setGhosts] = useState({});
    const [ghostData, setGhostData] = useState({});

    useEffect(() => {
        fetch('/Ghosts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setGhosts(data))
            .catch(error => console.error('Error loading ghosts:', error));

        fetch('/GhostData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setGhostData(data))
            .catch(error => console.error('Error loading ghost data:', error));
    }, []);

    const handleGhostClick = (ghostId) => {
        const ghostInfo = ghostData[ghostId];
        if (ghostInfo) {
            const testsList = ghostInfo.tests.map(test => `<li>${test}</li>`).join('');
            Swal.fire({
                title: ghostInfo.title,
                html: `
                    <div class="modal-content">
                        <div class="image-wrapper">
                            <img src="${ghostInfo.image}" alt="${ghostInfo.title}" class="image-ghost">
                        </div>
                        <div class="description">
                            <p>${ghostInfo.description}</p>
                        </div>
                        <h2>Pruebas</h2>
                        <ul class="tests-list">
                            ${testsList}
                        </ul>
                        <div class="video-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                `,
                showCloseButton: true,
                width: '80%',
                customClass: {
                    popup: 'custom-swal-popup'
                }
            });
        }
    };

    return (
        <section id="ghosts" className="ghosts">
            <div className="container-ghosts">
                <h1 className="ghosts-title">FANTASMAS</h1>
                <div className="grid-ghosts">
                    {Object.keys(ghosts).map(ghostId => (
                        <div
                            key={ghostId}
                            className="ghost"
                            data-id={ghostId}
                            onClick={() => handleGhostClick(ghostId)}
                        >
                            <img src={ghosts[ghostId].image} alt={ghosts[ghostId].title} />
                            <div className="overlay-text-ghost">{ghosts[ghostId].title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}