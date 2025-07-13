import React, { useState, useEffect, useRef } from 'react';
import './LetterPage.css';
import FallingImages from '../components/FallingImages';
import LetterContent from '../components/LetterContent';

import nhacnen from '../assets/sound/leduongBg.mp3';

export default function LetterPage() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpened(true);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Lỗi khi phát nhạc tự động:', error);
        });
      }
    }, 2000);

    return () => clearTimeout(openTimer);
  }, []);

  return (
    <div className="letter-wrapper">
      {/* Nhạc nền tự phát */}
      <audio ref={audioRef} loop>
        <source src={nhacnen} type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ audio.
      </audio>

      {/* Hiệu ứng và nội dung */}
      {opened && <FallingImages />}
      <LetterContent opened={opened} />
    </div>
  );
}
