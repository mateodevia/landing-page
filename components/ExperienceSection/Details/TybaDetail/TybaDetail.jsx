import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./TybaDetail.module.css";

function TybaDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/tybaApp.png'
            alt=''
          />
        </div>
        <div className={styles.textContainer}>
          <p>{t("tybaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://tyba.com.co/'
            target='_blank'
          >
            {t("tybaPage")}
            <img className={styles.linkIcon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.responsabilitiesTitle}>{t("responsibilities")}</h4>
      <p className={styles.responsabilities}>{t("tybaResponsibilities")}</p>
    </React.Fragment>
  );
}

export default TybaDetail;
