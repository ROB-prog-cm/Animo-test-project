import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  siteTitle: string;
}

const Button = ({ textButton, to }) => {
  return (
    <div className={styles.wrapper}>
      <Link activeClassName={styles.active} to={to} className={styles.button}>
        {textButton}
      </Link>
    </div>
  );
};

export default Button;
