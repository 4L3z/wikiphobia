// VideoGuides.jsx
import Swal from 'sweetalert2';
import './VideoGuides.css';

const guides = [
    { id: 1, title: 'Dots', videoUrl: '/tips/Dots.mp4' },
    { id: 2, title: 'Evento Bola', videoUrl: '/tips/Eventobola.mp4' },
    { id: 3, title: 'Habitacion Roja', videoUrl: '/tips/habitacionroja.mp4' },
    { id: 4, title: 'Hacer esto en una interaccion', videoUrl: '/tips/hacer esto en interaccion.mp4' },
    { id: 5, title: 'Huellas del obake', videoUrl: '/tips/Huellas del obake.jpg' },
];

const VideoGuides = () => {
    const handleGuideClick = (url) => {
        if (url.endsWith('.mp4')) {
            Swal.fire({
                title: 'Video Guide',
                html: `
                    <video width="100%" height="315" controls>
                        <source src="${url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `,
                width: '600px',
                showCloseButton: true,
                showConfirmButton: false,
                background: '#333',
            });
        } else if (url.endsWith('.jpg') || url.endsWith('.png')) {
            Swal.fire({
                title: 'Image Guide',
                html: `
                    <img src="${url}" alt="Image Guide" style="width: 100%; height: auto;">
                `,
                width: '600px',
                showCloseButton: true,
                showConfirmButton: false,
                background: '#333',
            });
        }
    };

    return (
        <section className="video-guides-section" id='video-guides'>
            <h1 className="title-video">VIDEO GUIAS</h1>
            <div className="guides-container">
                {guides.map((guide) => (
                    <div
                        key={guide.id}
                        className="guide-card"
                        onClick={() => handleGuideClick(guide.videoUrl)}
                    >
                        <h2>{guide.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoGuides;

