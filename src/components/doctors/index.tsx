import * as React from 'react';
import styles from './styles.module.scss';
import cx from 'clsx';

interface IProps {
  siteTitle: string;
}

const Doctor = ({ profession, text, photo, number, color, DoctorConfig }) => {
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.wrap, color)}>
        <img
          className={cx(styles.imgDoctor, DoctorConfig)}
          src={photo}
          alt="1"
        />
        <div className={styles.quantity}>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.doctorHeader}>{profession}</h1>
        <div className={styles.doctorText}>{text}</div>
      </div>
    </div>
  );
};

export default Doctor;
