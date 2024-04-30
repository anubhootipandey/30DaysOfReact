import React from 'react';
import PianoKey from './PianoKey';

const Piano = () => {
  const keys = [
    { note: 'C', sound: 'sounds/c.mp3' },
    { note: 'D', sound: 'sounds/d.mp3' },
    { note: 'E', sound: 'sounds/e.mp3' },
    { note: 'F', sound: 'sounds/f.mp3' },
    { note: 'G', sound: 'sounds/g.mp3' },
    { note: 'A', sound: 'sounds/a.mp3' },
    { note: 'B', sound: 'sounds/b.mp3' },
  ];

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <PianoKey key={index} note={key.note} sound={key.sound} />
      ))}
    </div>
  );
};

export default Piano;
