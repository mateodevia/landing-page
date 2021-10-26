import * as React from "react";
import { useIntl } from "react-intl";
import styles from "./CumLaudeDetail.module.css";

function CumLaudeDetail(props) {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });

  return (
    <React.Fragment>
      <img
        className={styles.diploma}
        src='/Certifications/Cum Laude.png'
        alt='Cum Laude diploma'
      />
      <p className={styles.description}>{trans("cumLaudeLongDescription")}</p>
    </React.Fragment>
  );
}

export default CumLaudeDetail;
