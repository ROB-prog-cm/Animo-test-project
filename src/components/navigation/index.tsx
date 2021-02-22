import Button from '@components/button';
import * as React from 'react';
import styles from './styles.module.scss';

const Navigation = ({}) => {
  return (
    <div className={styles.button}>
      <Button to={'/specializations'} textButton={'Специализации'} />
      <Button to={'/clinics'} textButton={'Клиники'} />
      <Button to={'/laboratories'} textButton={'Лаборатории'} />
    </div>
  );
};

export default Navigation;
