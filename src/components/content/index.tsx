import styles from './styles.module.scss';
import * as React from 'react';
import Doctor from '@components/doctors';
import photo1 from '@assets/images/Frame 1.svg';
import photo3 from '@assets/images/Frame 3.svg';
import photo4 from '@assets/images/Frame 4.svg';
import photo6 from '@assets/images/Frame 6.svg';
import photo7 from '@assets/images/Frame 7.svg';
import photo5 from '@assets/images/Vector 5.svg';
import photo8 from '@assets/images/searc.jpg';

interface IProps {
  siteTitle: string;
}

const Content = ({}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Doctor
        color={styles.color1}
        photo={photo1}
        number={1}
        profession={'Терапевт'}
        text={'Выбрать врача общего профиля'}
      ></Doctor>
      <Doctor
        color={styles.color2}
        photo={photo3}
        number={1}
        profession={'Педиатр'}
        text={'Выбрать врача для лечения детей и подростков'}
      ></Doctor>
      <Doctor
        color={styles.color3}
        photo={photo4}
        number={1}
        profession={'Акушер-гинеколог'}
        text={'Ведение беременности'}
      ></Doctor>
      <Doctor
        color={styles.color1}
        photo={photo1}
        number={1}
        profession={'Терапевт'}
        text={'Выбрать врача общего профиля'}
      ></Doctor>
      <Doctor
        color={styles.color5}
        photo={photo5}
        number={1}
        profession={'Гастроэнтеролог'}
        text={'Выбрать врача по проблемам пищеварения'}
      ></Doctor>
      <Doctor
        color={styles.color6}
        photo={photo6}
        number={1}
        profession={'Невролог'}
        text={'Выбрать врача по проблемам нервной системы'}
      ></Doctor>
      <Doctor
        color={styles.color3}
        photo={photo7}
        number={1}
        profession={'Кардиолог'}
        text={'Выбрать врача по заболеваниям сердца'}
      ></Doctor>
      <Doctor
        DoctorConfig={styles.DoctorConfig}
        photo={photo8}
        number={1254}
        profession={'Все профили врачей'}
        text={'Выбрать врача по проблемам нервной системы'}
      ></Doctor>
    </div>
  );
};
export default Content;
