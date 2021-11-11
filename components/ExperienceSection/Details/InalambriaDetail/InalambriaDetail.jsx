import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./InalambriaDetail.module.css";

function InalambriaDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/innovation.png'
            alt=''
          />
        </div>
        <div className={styles.textContainer}>
          <p>{t("inalambriaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://inalambria.com/'
            target='_blank'
          >
            {t("inalambriaPage")}
            <img className={styles.linkIcon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.responsabilitiesTitle}>{t("responsibilities")}</h4>
      <p className={styles.responsabilities}>
        {t("inalambriaResponsabilities")}
      </p>
    </React.Fragment>
  );
}

export default InalambriaDetail;
