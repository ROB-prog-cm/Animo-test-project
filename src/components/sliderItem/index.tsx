import * as React from 'react';
import styles from './styles.module.scss';
import cx from 'clsx';

const SliderItem = ({ disease, doctor, disease2, src, wrapperColor }) => {
  return (
    <div className={styles.wrap}>
      <div className={cx(styles.wrapper, wrapperColor)}>
        <div className={styles.wrapperContent}>
          <h1 className={styles.sliderHeader}>{doctor}</h1>
          <span className={styles.sliderText}>{disease}</span>
          <span className={styles.sliderText}>{disease2}</span>
        </div>
        <div className={styles.sliderPhoto}>
          <img src={src} alt="1" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
