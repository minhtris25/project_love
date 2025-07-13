import React from 'react';

export default function FallingImages() {
  return (
    <div className="floating-images-container">
      {Array.from({ length: 250 }).map((_, index) => {
        const imageName = `${(index % 41) + 1}.jpg`;
        const size = Math.random() * 80 + 30;
        const startPosition = Math.random() * 100;
        const delay = Math.random() * 30;
        const isClockwise = Math.random() > 0.5;

        return (
          <img
            key={index}
            src={`assets/images/${imageName}`}
            alt="Falling Image"
            className={`falling-drop ${isClockwise ? 'rotate-right' : 'rotate-left'}`}
            style={{
              width: `${size}px`,
              animationDelay: `${delay}s`,
              left: `${startPosition}%`,
            }}
          />
        );
      })}
    </div>
  );
}
