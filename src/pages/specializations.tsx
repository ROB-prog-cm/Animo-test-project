import React, { memo } from 'react';
import styles from './styles.module.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Content from '@components/content';
import logo from '@assets/images/Group 222.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderItem from '@components/sliderItem';
import Navigation from '@components/navigation';
import { sliderItems } from '../mock/sliderItem';

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
      <Header />
      <div className={styles.wrap}>
        <Carousel responsive={responsive}>
          {sliderItems.map(el => {
            return (
              <SliderItem
                src={el.src}
                doctor={el.doctor}
                disease={el.disease}
                disease2={el.disease2}
                wrapperColor={el.wrapperColor}
              />
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
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

export default memo(SimpleForm);
