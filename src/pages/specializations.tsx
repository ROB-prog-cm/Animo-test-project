import React, { memo } from 'react';
import styles from './styles.module.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Content from '@components/content';
import logo from '@assets/images/Group 222.svg';
import Button from '@components/button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderItem from '@components/element';
import photo1 from '@assets/images/photo.jpg';
import photo2 from '@assets/images/Frame 1.svg';
import photo3 from '@assets/images/Vector 5.svg';
import photo4 from '@assets/images/lime.jpg';
import Navigation from '@components/navigation';

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
          <SliderItem
            doctor={'Хирург'}
            disease={'Грыжи'}
            disease2={'Аппендицит'}
            src={photo1}
            wrapperColor={styles.color1}
          ></SliderItem>
          <SliderItem
            doctor={'Педиатр'}
            disease={'Вздутие'}
            disease2={'Боли в животе'}
            src={photo3}
            wrapperColor={styles.color2}
          ></SliderItem>
          <SliderItem
            doctor={'Педиатр'}
            disease={'ОРВИ'}
            disease2={'Инфекции'}
            wrapperColor={styles.color3}
            src={photo2}
          ></SliderItem>
          <SliderItem
            doctor={'Хирург'}
            disease={'Грыжи'}
            disease2={'Аппендицит'}
            wrapperColor={styles.color4}
            src={photo4}
          ></SliderItem>
          <SliderItem
            doctor={'Педиатр'}
            disease={'Вздутие'}
            disease2={'Боли в животе'}
            src={photo3}
            wrapperColor={styles.color2}
          ></SliderItem>
          <SliderItem
            doctor={'Хирург'}
            disease={'Грыжи'}
            disease2={'Аппендицит'}
            src={photo1}
            wrapperColor={styles.color1}
          ></SliderItem>
          <SliderItem
            doctor={'Педиатр'}
            disease={'Вздутие'}
            disease2={'Боли в животе'}
            src={photo3}
            wrapperColor={styles.color2}
          ></SliderItem>
          <SliderItem
            doctor={'Педиатр'}
            disease={'ОРВИ'}
            disease2={'Инфекции'}
            wrapperColor={styles.color3}
            src={photo2}
          ></SliderItem>
          <SliderItem
            doctor={'Хирург'}
            disease={'Грыжи'}
            disease2={'Аппендицит'}
            wrapperColor={styles.color4}
            src={photo4}
          ></SliderItem>
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
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default memo(SimpleForm);
