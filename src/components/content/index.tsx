import styles from './styles.module.scss';
import * as React from 'react';
import Doctor from '@components/doctors';
import { doctors } from '../../mock/doctors';

const Content = ({}) => {
  return (
    <div className={styles.wrapper}>
      {doctors.map(el => {
        return (
          <Doctor
            photo={el.photo}
            color={el.color}
            number={el.number}
            profession={el.profession}
            text={el.text}
            DoctorConfig={el.DoctorConfig}
          />
        );
      })}
    </div>
  );
};
export default Content;
