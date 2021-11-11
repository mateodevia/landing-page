import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./CumLaudeDetail.module.css";

function CumLaudeDetail(props) {
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <img
        className={styles.diploma}
        src='/Certifications/Cum Laude.png'
        alt='Cum Laude diploma'
      />
      <p className={styles.description}>{t("cumLaudeLongDescription")}</p>
    </React.Fragment>
  );
}

export default CumLaudeDetail;
