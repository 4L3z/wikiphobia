import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './Tips.css';
import consejosData from './consejos.json';

const Consejos = () => {
    const [consejos, setConsejos] = useState([]);

    useEffect(() => {
        // Cargamos los consejos desde el archivo JSON
        setConsejos(consejosData.consejos);
    }, []);

    const abrirModal = (consejo) => {
        // Verificaciones para las listas
        const listaNumerica = consejo.listaNumerica
            ? consejo.listaNumerica.map((item) => `<li class="listaNumerica">${item}</li>`).join('')
            : '';

        const listaPuntos = consejo.listaPuntos
            ? consejo.listaPuntos.map((item) => `<li class="listaPuntos">• ${item}</li>`).join('')
            : '';

        const contenidoListas = `
      ${listaNumerica ? `<h4>Consejos:</h4><ol>${listaNumerica}</ol>` : ''}
      ${listaPuntos ? `<h4>Consejos:</h4><ul>${listaPuntos}</ul>` : ''}
    `;

        Swal.fire({
            title: `<strong>${consejo.titulo}</strong>`,
            html: `
        <p>${consejo.descripcion}</p>
        ${contenidoListas}
      `,
            confirmButtonText: 'Cerrar',
            backdrop: `
            
    `
        });
    };

    return (
        <section className="consejos-container" id="tips">
            <h1 className="titulo-consejos">CONSEJOS</h1>
            <div className="grid-container">
                {consejos.map((consejo) => (
                    <div
                        key={consejo.id}
                        onClick={() => abrirModal(consejo)}
                        className="consejo-div"
                    >
                        {consejo.titulo}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Consejos;
