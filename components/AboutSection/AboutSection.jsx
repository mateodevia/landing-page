import styles from "./AboutSection.module.css";
import { useTranslation } from "next-i18next";

const AboutSection = () => {

  const { t, i18n } = useTranslation("common");
  return (
    <div>
        <p className={styles.about_section_text}>
            {t("aboutMeText")}
        </p>
    </div>
  );
};

export default AboutSection;