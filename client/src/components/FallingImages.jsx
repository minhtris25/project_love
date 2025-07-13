import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.jpg';
import img21 from '../assets/images/21.jpg';
import img22 from '../assets/images/22.jpg';
import img23 from '../assets/images/23.jpg';
import img24 from '../assets/images/24.jpg';
import img25 from '../assets/images/25.jpg';
import img26 from '../assets/images/26.jpg';
import img27 from '../assets/images/27.jpg';
import img28 from '../assets/images/28.jpg';
import img29 from '../assets/images/29.jpg';
import img30 from '../assets/images/30.jpg';
import img31 from '../assets/images/31.jpg';
import img32 from '../assets/images/32.jpg';
import img33 from '../assets/images/33.jpg';
import img34 from '../assets/images/34.jpg';
import img35 from '../assets/images/35.jpg';
import img36 from '../assets/images/36.jpg';
import img37 from '../assets/images/37.jpg';
import img38 from '../assets/images/38.jpg';
import img39 from '../assets/images/39.jpg';
import img40 from '../assets/images/40.jpg';
import img41 from '../assets/images/41.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41,
];

export default function FallingImages() {
  const [imageCount, setImageCount] = useState(250);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (mobile) setImageCount(70);
  }, []);

  return (
    <div className="floating-images-container">
      {Array.from({ length: imageCount }).map((_, index) => {
        const size = isMobile
          ? Math.random() * 30 + 20 // nhỏ hơn cho mobile
          : Math.random() * 80 + 30;
        const startPosition = Math.random() * 100;
        const delay = Math.random() * 30;
        const duration = isMobile
          ? Math.random() * 10 + 10 // chậm hơn
          : Math.random() * 10 + 5;
        const isClockwise = Math.random() > 0.5;
        return (
          <img
            key={index}
            src={images[index % images.length]}
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
