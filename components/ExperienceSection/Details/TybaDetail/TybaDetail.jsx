import * as React from "react";
import { useIntl } from "react-intl";
import styles from "./TybaDetail.module.css";

function TybaDetail(props) {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });

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
          <p>{trans("tybaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://tyba.com.co/'
            target='_blank'
          >
            {trans("tybaPage")}
            <img className={styles.linkIcon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.responsabilitiesTitle}>
        {trans("responsibilities")}
      </h4>
      <p className={styles.responsabilities}>{trans("tybaResponsibilities")}</p>
    </React.Fragment>
  );
}

export default TybaDetail;
