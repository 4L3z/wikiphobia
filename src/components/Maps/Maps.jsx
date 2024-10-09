import { useEffect, useState } from 'react';
import { MapsModal } from './Map'; 
import './Maps.css';

export function Maps() {
    const [maps, setMaps] = useState({});
    const [mapData, setMapData] = useState({});
    const [selectedMapId, setSelectedMapId] = useState(null);

    useEffect(() => {
        fetch('./maps.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setMaps(data))
            .catch(error => console.error('Error loading maps:', error));

        fetch('./mapData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setMapData(data))
            .catch(error => console.error('Error loading map data:', error));
    }, []);

    const handleMapClick = (mapId) => {
        setSelectedMapId(null);
        setTimeout(() => {
            setSelectedMapId(mapId);
        }, 0);
    };

    return (
        <section id="maps" className="mapas">
            <div className="container-maps">
                <h1 className="mapas-title">MAPAS</h1>
                <div className="grid">
                    {Object.keys(maps).map(mapId => (
                        <div
                            key={mapId}
                            className="map"
                            data-id={mapId}
                            onClick={() => handleMapClick(mapId)}
                        >
                            <img src={maps[mapId].image} alt={maps[mapId].title} />
                            <div className="overlay-text">{maps[mapId].title}</div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedMapId && (
                <MapsModal
                    mapData={mapData[selectedMapId]}
                />
            )}
        </section>
    );
}
