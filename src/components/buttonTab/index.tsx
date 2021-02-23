import * as React from 'react';
import styles from './styles.module.scss';
import cx from 'clsx';

const ButtonTab = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.button, active ? styles.active : null)}
    >
      {children}
    </button>
  );
};

export default ButtonTab;
