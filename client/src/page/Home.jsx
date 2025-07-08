import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div> {/* Thêm thẻ cha */}
      <div className={styles['envelope-container']}>
        <div className={styles.envelope}>
          <div className={styles['envelope__tab']}></div>
          <div className={styles['envelope__letter']}>
            <p><br/>
                1500 Days Anniversary 
              <br />
             Chúc em bé cảu anh có 1 ngày kỷ niệm thật hạnh phúc.💖
              <br />
              Món quà anh dành cho em, nằm ở nút bấm. 🤗🤗
            </p>
            <a href="/loveroom" className={styles.btn}>
              Mở thư
            </a>
          </div>
          <div className={styles['envelope--base']}></div>
        </div>
      </div>

    
    </div> 
  );
};

export default Home;