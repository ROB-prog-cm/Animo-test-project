import * as React from 'react';
import styles from './styles.module.scss';
import ButtonTab from '@components/buttonTab';

const NavigationTabs = ({ onChange, activeTab }) => {
  console.log(activeTab === 'clinics');

  return (
    <div className={styles.button}>
      <ButtonTab
        active={activeTab === 'specializations'}
        onClick={() => onChange('specializations')}
      >
        Специализации
      </ButtonTab>
      <ButtonTab
        active={activeTab === 'clinics'}
        onClick={() => onChange('clinics')}
      >
        Клиники
      </ButtonTab>

      <ButtonTab
        active={activeTab === 'laboratories'}
        onClick={() => onChange('laboratories')}
      >
        Лаборатории
      </ButtonTab>
    </div>
  );
};

export default NavigationTabs;
