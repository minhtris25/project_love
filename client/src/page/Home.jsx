import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGift = () => {
    if (isOpened) return; // tránh bấm nhiều lần
    setIsOpened(true);

    setTimeout(() => {
      window.location.href = '/loveplanet';
    }, 800); // delay 1.5s mới chuyển trang
  };

  return (
    <div>
 <div className={styles['gift-container']}>
  <div
    className={`${styles['gift-box']} ${isOpened ? styles['opened'] : ''}`}
    onClick={handleOpenGift}
  >
    <div className={styles['gift-lid']}></div>
    <div className={styles['gift-bow']}></div>
    <div className={styles['gift-body']}></div>
    <div className={styles['gift-ribbon-vertical']}></div>
    <span className={styles['gift-text']}>Mở Quà</span>
  </div>
</div>

      <div className={styles['envelope-container']}>
        <div className={styles.envelope}>
          <div className={styles['envelope__tab']}></div>
          <div className={styles['envelope__letter']}>
            <p><br />
              1500 Days Anniversary
              <br />
              Chúc em bé của anh có 1 ngày kỷ niệm thật hạnh phúc.💖
              <br />
              Món quà anh dành cho em, nằm trong hộp bên cạnh. 🤗🤗
            </p>
            <a href="/letter" className={styles.btn}>Mở thư</a>
          </div>
          <div className={styles['envelope--base']}></div>
        </div>
        <span className={styles['envelope-text']}>Mở Thư</span>
      </div>
      

     

    </div>
  );
};

export default Home;
