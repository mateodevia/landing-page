import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./TribeLeadDetail.module.css";

function TribeLeadDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/tybaPortfolio.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p>{t("tribeLeadLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://tyba.com.co/'
            target='_blank'
          >
            {t("tybaPage")}
            <img className={styles.link_icon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.Responsibilities_title}>{t("responsibilities")}</h4>
      <p className={styles.Responsibilities}>{t("tribeLeadResponsibilities")}</p>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <p className={styles.Responsibilities}>{t("tribeLeadAchievements")}</p>
    </React.Fragment>
  );
}

export default TribeLeadDetail;
