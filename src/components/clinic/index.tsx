import * as React from 'react';
import styles from './styles.module.scss';
import StarRatings from 'react-star-ratings';
import cx from 'clsx';

interface IProps {
  siteTitle: string;
}

const Clinica = ({ photo, clinicText, blogText, rating }) => {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={styles.photoClinic}>
        <img className={styles.imgClinic} src={photo} alt="1" />
      </div>
      <div className={styles.clinicBlog}>
        <span className={styles.clinicBlogText}>{blogText}</span>
        <StarRatings
          rating={rating}
          starDimension="20px"
          starSpacing="1px"
          starRatedColor={'#F9B161'}
          changeRating={5}
        />
      </div>
      <span className={styles.clinicText}>{clinicText}</span>
    </div>
  );
};

export default Clinica;
