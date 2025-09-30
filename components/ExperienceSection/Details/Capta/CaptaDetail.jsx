import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./CaptaDetail.module.css";

function CaptaDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/capta.jpg'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p>{t("captaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://capta.co/'
            target='_blank'
          >
            {t("captaPage")}
            <img className={styles.link_icon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.Responsibilities_title}>{t("responsibilities")}</h4>
      <p className={styles.Responsibilities}>
        {t("captaResponsibilities")}
      </p>
    </React.Fragment>
  );
}

export default CaptaDetail;
