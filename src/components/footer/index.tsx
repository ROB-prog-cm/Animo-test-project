import * as React from 'react';
import styles from './styles.module.scss';
import age from '@assets/images/age.svg';

const Footer = ({}) => (
  <footer className={styles.wrapper}>
    <div className={styles.nav}>
      <a className={styles.navLink} href="#">
        Для клиник
      </a>
      <a className={styles.navLink} href="#">
        О компании
      </a>
      <a className={styles.navLink} href="#">
        Версия для слабовидящих
      </a>
      <a className={styles.navLink} href="#">
        Сменить роль
      </a>
      <a className={styles.navLink} href="#">
        Вернуться в общий аккаунт
      </a>
    </div>
    <div className={styles.footer_age}>
      <img src={age} alt="1" />
      <div className={styles.text}>
        Информация, представленная на сайте, не может быть использована для
        постановки диагноза, назначения лечения и не заменяет прием врача.
      </div>
    </div>
  </footer>
);

export default Footer;
