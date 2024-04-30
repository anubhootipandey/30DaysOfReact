import React, { useState, useEffect } from 'react';

const PianoKey = ({ note, sound }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === note.toLowerCase()) {
        setActive(true);
        const audio = new Audio(sound);
        audio.play();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === note.toLowerCase()) {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [note, sound]);

  return (
    <div className={`piano-key ${active ? 'active' : ''}`} />
  );
};

export default PianoKey;
