import * as React from 'react';
import styles from './styles.module.scss';
import logo2 from '@assets/images/Group 222.svg';
import logo from '@assets/images/main-logo.svg';
import question from '@assets/images/button.svg';
import map from '@assets/images/map.svg';

const Header = ({}) => {
  return (
    <div>
      <header className={styles.wrapper}>
        <div className={styles.headerPhoto}>
          <img src={logo} alt="photo" />
          <img className={styles.headerImg} src={logo2} alt="photo" />
        </div>
        <div className={styles.question}>
          <div className={styles.city}>
            <span>Ставрополь</span>
            <img className={styles.maps} src={map} alt="1" />
          </div>
          <img src={question} alt="photo" />
        </div>
      </header>
    </div>
  );
};

export default Header;
