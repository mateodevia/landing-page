import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./InalambriaDetail.module.css";

function InalambriaDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/innovation.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p>{t("inalambriaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://inalambria.com/'
            target='_blank'
          >
            {t("inalambriaPage")}
            <img className={styles.link_icon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.Responsibilities_title}>{t("responsibilities")}</h4>
      <p className={styles.Responsibilities}>
        {t("inalambriaResponsibilities")}
      </p>
    </React.Fragment>
  );
}

export default InalambriaDetail;
