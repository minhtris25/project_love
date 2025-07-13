import React, { useEffect, useState } from 'react';
import key1 from '../assets/sound/keyboard-1.mp3';
import key2 from '../assets/sound/keyboard-2.mp3';
import key3 from '../assets/sound/keyboard-3.mp3';
import key4 from '../assets/sound/keyboard-4.mp3';
import key5 from '../assets/sound/keyboard-5.mp3';
import key6 from '../assets/sound/keyboard-6.mp3';

// Preload âm thanh 1 lần duy nhất
const soundSources = [key1, key2, key3, key4, key5, key6];
const preloadedAudios = soundSources.map(src => {
  const audio = new Audio(src);
  audio.volume = 0.15;
  return audio;
});

const texts = [
  "💌Gửi đến em bé của anh,💌️",
  "",
  "Vậy là mình đã bên nhau tròn 1500 ngày rồi . 💓",
  "Anh vẫn còn nhớ như in ngày đầu tiên mà mình gặp nhau, rồi nói chuyện làm quen , anh cứ ngỡ như mới hôm qua. 1500 này không phải là một con số tròn trĩnh, nhưng nó lại chứa biết bao kỷ niệm mà mình đã cùng nhau trải qua từ những lần mình cùng nhau  đi học , đi làm rồi nhưng buổi tối chỉ tâm sự với nhau mà thức đến sáng và cả những lần giận nhau đến cả tháng trời  rồi lại làm lành như chưa từng xãy ra.💞",
  "",
  "Cảm ơn  em đã xuất hiện trong cuộc đời anh, đã cùng anh trãi qua từng ngày, từng tháng, từng năm cùng nhau. Cảm ơn em vì đã kiên nhẫn với anh. Cảm ơn em đã luôn sẵn lòng vị tha cho nhưng lỗi mà anh đã gây ra. Cảm ơn em vì đã luôn ở bên anh trong những lúc anh tồi tệ nhất.  Em đã biến cuộc sống của anh trở nên đầy màu sắc và ý nghĩa hơn bao giờ hết.💗",
  "",
  "1500 ngày chỉ là một dấu mốc, và còn hàng ngàn, hàng vạn ngày khác đang chờ chúng ta phía trước. Anh mong rằng chúng ta sẽ luôn nắm tay nhau thật chặt, cùng nhau vượt qua mọi sóng gió, để mỗi ngày trôi qua đều là một kỷ niệm đẹp.😘 ",
  "",
  "Anh hứa sẽ luôn yêu thương, chăm sóc và bảo vệ em. Anh sẽ là người bạn đồng hành, là bờ vai vững chắc để em dựa vào trong những lúc khó khăn. Anh sẽ luôn lắng nghe và thấu hiểu em, để chúng ta có thể cùng nhau vượt qua mọi thử thách.💝",
  "",
  "Anh  sẽ mãi yêu em,",
  "Người anh thương nhất",
  "❤️️Yêu em!❤️️"
];

export default function LetterContent({ opened }) {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!opened || currentLine >= texts.length) return;

    if (currentChar < texts[currentLine].length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + texts[currentLine][currentChar]);
        setCurrentChar(prev => prev + 1);

        if (texts[currentLine][currentChar] !== ' ') {
          const audio = preloadedAudios[Math.floor(Math.random() * preloadedAudios.length)];
          audio.currentTime = 0;
          audio.play();
        }
      }, window.innerWidth <= 768 ? 35 : 80); // nhanh hơn trên mobile

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + '\n');
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [opened, currentChar, currentLine]);

  return (
    <div className="letter-wrapper">
      {!opened && (
        <div className="envelope">
          <div className="flap" />
          <div className="body" />
        </div>
      )}

      {opened && (
        <div className="paper">
          <div className="typed-text">
            {typedText}
            <span className="blinking-cursor">|</span>
          </div>
        </div>
      )}
    </div>
  );
}
