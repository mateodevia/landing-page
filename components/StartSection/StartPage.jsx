import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './StartPage.module.css';
import { StaticI18nLink } from '../StaticI18nLink';
import SkillsGraph from '../SkillsGraph/SkillsGraph';
import useWindowSize from '../../hooks/useWindowSize';
import useDynamicFontSize from '../../hooks/useDynamicFontSize';

const StartPage = (props) => {
  const { t, i18n } = useTranslation('common');
  const { width } = useWindowSize();
  const { fontSize, textRef, containerRef } = useDynamicFontSize('Mateo Devia Vega', 72, 20);

  return (
    <div className={`${styles.container} flexbox`}>
      <StaticI18nLink href='/' locale={i18n.language === 'en' ? 'es' : 'en'}>
        <button className={styles.translation_icon}>
          <img src={'/icons/translation.png'} />
        </button>
      </StaticI18nLink>
      <div className={`${styles.start_description_container} flexbox`}>  
        <div className={`${styles.text_container}`} ref={containerRef}>    
          <div className={`${styles.photo_container} flexbox`}>
                <img
                  src='/profilePicture.png'
                  className={`${styles.photo}`}
                  alt='Myself'
                ></img>
              </div>
          <h1 ref={textRef} style={{ fontSize: `${fontSize}px` }}>
            Mateo Devia Vega
          </h1>
          {/* <div className={`${styles.line} black-line`} /> */}
          <h2 style={{ fontSize: `${fontSize * 0.5}px`, marginTop: '-15px' }}>{t('softwareEngineer')}</h2>
          <div className={`${styles.buttons_container} flexbox`}>
            <button className={`${styles.cv} red-button`}>
              <a href={t('resumeLink')} target='_blank'>
                {t('myResume')}
              </a>
            </button>
            <button
              className={`${styles.learn_more} black-button`}
              onClick={props.handleLearnMoreButtonClick}
            >
              {t('learnMore')}
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.photo_buttons_container} flexbox`}>
        {width > 1000 && <SkillsGraph />}
      </div>
    </div>
  );
};

export default StartPage;
