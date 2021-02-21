import React, { memo } from 'react';
import styles from './styles.module.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Clinica from '@components/clinic';
import photo from '@assets/images/Rectangle 60.jpg';
import photoClinic from '@assets/images/Frame 20.svg';
import logo from '@assets/images/Group 222.svg';
import Carousel from 'react-multi-carousel';
import SliderItem from '@components/element';
import photo1 from '@assets/images/photo.jpg';
import photo2 from '@assets/images/Frame 1.svg';
import photo3 from '@assets/images/Vector 5.svg';
import photo4 from '@assets/images/lime.jpg';
import Navigation from '@components/navigation';
import { clinics } from '../mock/clinics';
import { sliderItem } from '../mock/sliderItem';
import photo5 from '@assets/images/Rectangle 60.jpg';

type Props = {};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.wrap}>
        <Carousel responsive={responsive}>
          {sliderItem.map(el => {
            return (
              <SliderItem
                doctor={el.doctor}
                src={photo3}
                disease={el.disease}
                disease2={el.disease2}
                wrapperColor={styles.color1}
              ></SliderItem>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.header}>
        <img src={logo} alt="" />
        <div className={styles.headerText}>
          Единый портал врачей и клиник города, доступных для записи на прием в
          один клик
        </div>
      </div>
      <Navigation></Navigation>
      <div className={styles.wrapper}>
        {clinics.map(el => {
          return (
            <Clinica
              rating={el.rating}
              photo={photo5}
              blogText={el.blogText}
              clinicText={el.clinicText}
            ></Clinica>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default memo(SimpleForm);
