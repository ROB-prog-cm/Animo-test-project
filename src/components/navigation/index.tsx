import Button from '@components/button';
import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  siteTitle: string;
}

const Navigation = ({ textButton, to }) => {
  return (
    <div className={styles.button}>
      <Button to={'/specializations'} textButton={'Специализации'}></Button>
      <Button to={'/clinics'} textButton={'Клиники'}></Button>
      <Button to={'/laboratories'} textButton={'Лаборатории'}></Button>
    </div>
  );
};

export default Navigation;
