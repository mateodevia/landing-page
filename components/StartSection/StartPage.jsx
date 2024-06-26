import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './StartPage.module.css';
import { StaticI18nLink } from '../StaticI18nLink';

const StartPage = (props) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={`${styles.container} flexbox`}>
      <StaticI18nLink href='/' locale={i18n.language === 'en' ? 'es' : 'en'}>
        <button className={styles.translation_icon}>
          <img src={'/icons/translation.png'} />
        </button>
      </StaticI18nLink>
      <div className={`${styles.start_description_container} flexbox`}>
        <div className={`${styles.text_container}`}>
          <h3>Mateo Devia Vega</h3>
          <h1>{t('mainTitle')}</h1>
          <div className={`${styles.line} black-line`} />
        </div>
      </div>
      <div className={`${styles.photo_buttons_container} flexbox`}>
        <div className={styles.horizontally_center}>
          <div className={`${styles.photo_container} flexbox`}>
            <img
              src='/avatar.jpeg'
              className={`${styles.photo}`}
              alt='Myself'
            ></img>
          </div>
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
    </div>
  );
};

export default StartPage;
