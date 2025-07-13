import React, { useState, useEffect, useRef } from 'react';
import './LetterPage.css';
import FallingImages from '../components/FallingImages';
import LetterContent from '../components/LetterContent';

export default function LetterPage() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpened(true);
      setIsPlaying(true); // Bắt đầu phát nhạc khi opened = true
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Lỗi khi phát nhạc tự động:', error);
        });
      }
    }, 2000);

    return () => clearTimeout(openTimer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Lỗi khi phát nhạc:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="letter-wrapper">
      {/* Nhạc nền */}
      <audio ref={audioRef} loop>
        <source
          src="assets/sound/leduongbg.mp3"
          type="audio/mpeg"
        />
      
      </audio>

     

      {/* Nội dung hiện có */}
      {opened && <FallingImages />}
      <LetterContent opened={opened} />
    </div>
  );
}