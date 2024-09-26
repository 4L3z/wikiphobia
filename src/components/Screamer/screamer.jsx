import { useEffect, useState } from 'react';
import './Screamer.css';

const Screamer = () => {
  const [showScreamer, setShowScreamer] = useState(false);

  useEffect(() => {
    // Probabilidad del 1% (0.01)
    const randomChance = Math.random();
    if (randomChance < 0.01) {
      setShowScreamer(true);
    }
  }, []);

  useEffect(() => {
    // Reproducir el sonido inmediatamente cuando el screamer se muestre
    if (showScreamer) {
      const screamerAudio = new Audio('/a/screamerAudio.mp3');
      screamerAudio.play();
    }
  }, [showScreamer]);

  if (!showScreamer) {
    return null;
  }

  return (
    <div className="screamer-overlay">
      <video src="/a/screamer.mp4" autoPlay className="screamer-video" />
    </div>
  );
};

export default Screamer;
