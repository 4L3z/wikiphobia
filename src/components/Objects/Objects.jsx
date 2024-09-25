
import { useNavigate } from 'react-router-dom';
import './Objects.css';

const Objects = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="objects-container" id='objects'>
      <h1 className="objects-title">OBJETOS</h1>
      <div className="objects-levels">
        <div
          className="object-card"
          onClick={() => handleCardClick('/nivel1')}
          style={{ backgroundImage: 'url(/Objects/Nivel1.png)' }}
        >
          TIER 1
        </div>
        <div
          className="object-card"
          onClick={() => handleCardClick('/nivel2')}
          style={{ backgroundImage: 'url(/Objects/Nivel2.png)' }}
        >
         TIER 2
        </div>
        <div
          className="object-card"
          onClick={() => handleCardClick('/nivel3')}
          style={{ backgroundImage: 'url(/Objects/Nivel3.png)' }}
        >
          TIER 3
        </div>
      </div>
    </section>
  );
};

export default Objects;
