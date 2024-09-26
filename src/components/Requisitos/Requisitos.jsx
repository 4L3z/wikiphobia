import './Requisitos.css';

const Requisitos = () => {
  return (
    <section className="requisitos-section" id='requirements'>
      <h1 className="title">REQUISITOS</h1>
      <div className="requirements">
        <div className="requirement-box">
          <h2>MÍNIMOS</h2>
          <ul>
            <li>Sistema Operativo: Windows 10 de 64 bits</li>
            <li>Procesador: Intel Core i5-4590 o AMD Ryzen 5 2600</li>
            <li>Memoria: 8 GB de RAM</li>
            <li>Gráficos: NVIDIA GTX 970 / AMD Radeon R9 290</li>
            <li>DirectX: Versión 11</li>
            <li>Almacenamiento: 21 GB de espacio disponible</li>
          </ul>
        </div>
        <div className="vs">
          <h2>VS</h2>
        </div>
        <div className="requirement-box">
          <h2>RECOMENDADOS</h2>
          <ul>
            <li>Sistema Operativo: Windows 10 de 64 bits</li>
            <li>Procesador: Intel i5-10600 / Ryzen 5 3600</li>
            <li>Memoria: 16 GB de RAM</li>
            <li>Gráficos: NVIDIA RTX 2060 / AMD RX 5700</li>
            <li>DirectX: Versión 12</li>
            <li>Almacenamiento: 21 GB de espacio disponible</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Requisitos;
