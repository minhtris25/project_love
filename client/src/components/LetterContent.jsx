import React, { useEffect, useState, useRef } from 'react';
import key1 from '../assets/sound/keyboard-1.mp3';
import key2 from '../assets/sound/keyboard-2.mp3';
import key3 from '../assets/sound/keyboard-3.mp3';
import key4 from '../assets/sound/keyboard-4.mp3';
import key5 from '../assets/sound/keyboard-5.mp3';
import key6 from '../assets/sound/keyboard-6.mp3';

// preload âm thanh
const keyAudios = [key1, key2, key3, key4, key5, key6].map(src => {
  const a = new Audio(src);
  a.volume = 0.15;
  return a;
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
  const [lines, setLines] = useState([]);
  const intervalRef = useRef(null);
  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!opened || isMountedRef.current) return;
    isMountedRef.current = true;

    const typeLine = () => {
      const lineIndex = lineIndexRef.current;
      if (lineIndex >= texts.length) return;

      const line = texts[lineIndex];
      let typedLine = '';

      charIndexRef.current = 0;
      intervalRef.current = setInterval(() => {
        if (charIndexRef.current >= line.length) {
          clearInterval(intervalRef.current);
          lineIndexRef.current++;
          setTimeout(typeLine, 800); // pause giữa dòng
          return;
        }

        typedLine += line[charIndexRef.current];
        setLines(prev => {
          const updated = [...prev];
          updated[lineIndex] = typedLine;
          return updated;
        });

        if (line[charIndexRef.current] !== ' ') {
          const audio = keyAudios[Math.floor(Math.random() * keyAudios.length)];
          audio.currentTime = 0;
          audio.play();
        }

        charIndexRef.current++;
      }, window.innerWidth <= 768 ? 35 : 75);
    };

    setLines([]); // clear content
    lineIndexRef.current = 0;
    setTimeout(typeLine, 300);

    return () => {
      clearInterval(intervalRef.current);
      isMountedRef.current = false;
    };
  }, [opened]);

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
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <span className="blinking-cursor">|</span>
          </div>
        </div>
      )}
    </div>
  );
}
