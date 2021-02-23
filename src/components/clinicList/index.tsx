import styles from '@pages/styles.module.scss';
import { clinics } from '../../mock/clinics';
import Clinica from '@components/clinic';
import React from 'react';

const ClinicList = ({}) => {
  return (
    <div className={styles.wrapper}>
      {clinics.map(el => {
        return (
          <Clinica
            hiddenStars={el.hiddenStar}
            rating={el.rating}
            photo={el.photo}
            blogText={el.blogText}
            clinicText={el.clinicText}
          />
        );
      })}
    </div>
  );
};
export default ClinicList;
