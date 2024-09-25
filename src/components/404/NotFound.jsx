import { Link } from 'react-router-dom';
import './NotFound.css'; 
export function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/">Volver a la página principal</Link>
        </div>
    );
}