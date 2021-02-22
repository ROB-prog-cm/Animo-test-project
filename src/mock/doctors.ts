import styles from '@components/content/styles.module.scss';
import photo1 from '@assets/images/Frame 1.svg';
import photo3 from '@assets/images/Frame 3.svg';
import photo4 from '@assets/images/Frame 4.svg';
import photo6 from '@assets/images/Frame 6.svg';
import photo7 from '@assets/images/Frame 7.svg';
import photo5 from '@assets/images/Vector 5.svg';
import photo8 from '@assets/images/searc.jpg';

export const doctors = [
  {
    color: styles.color1,
    photo: photo1,
    number: 1,
    profession: 'Терапевт',
    text: 'Выбрать врача общего профиля',
  },
  {
    color: styles.color2,
    photo: photo3,
    number: 1,
    profession: 'Педиатр',
    text: 'Выбрать врача для лечения детей и подростков',
  },
  {
    color: styles.color3,
    photo: photo4,
    number: 1,
    profession: 'Акушер-гинеколог',
    text: 'Ведение беременности',
  },
  {
    color: styles.color1,
    photo: photo1,
    number: 1,
    profession: 'Терапевт',
    text: 'Выбрать врача общего профиля',
  },
  {
    color: styles.color5,
    photo: photo5,
    number: 1,
    profession: 'Терапевт',
    text: 'Выбрать врача общего профиля',
  },
  {
    color: styles.color6,
    photo: photo6,
    number: 1,
    profession: 'Гастроэнтеролог',
    text: 'Выбрать врача по проблемам пищеварения',
  },
  {
    color: styles.color3,
    photo: photo7,
    number: 1,
    profession: 'Невролог',
    text: 'Выбрать врача по проблемам нервной системы',
  },
  {
    DoctorConfig: styles.DoctorConfig,
    photo: photo8,
    number: 125,
    profession: 'Все профили врачей',
    text: 'Выбрать врача общего профиля',
  },
];
