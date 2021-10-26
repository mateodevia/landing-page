import * as React from "react";
import { useIntl } from "react-intl";
import styles from "./InalambriaDetail.module.css";

function InalambriaDetail(props) {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });

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
          <p>{trans("inalambriaLongDescription")}</p>
          <a
            className={"link " + styles.link}
            href='https://inalambria.com/'
            target='_blank'
          >
            {trans("inalambriaPage")}
            <img className={styles.linkIcon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.responsabilitiesTitle}>
        {trans("responsibilities")}
      </h4>
      <p className={styles.responsabilities}>
        {trans("inalambriaResponsabilities")}
      </p>
    </React.Fragment>
  );
}

export default InalambriaDetail;
