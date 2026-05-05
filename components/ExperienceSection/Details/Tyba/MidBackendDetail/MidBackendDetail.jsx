import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./MidBackendDetail.module.css";

function MidBackendDetail(props) {
  const { t } = useTranslation("common");
  const decodeHtml = (content) =>
    content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
  const highlightTerms = [
    "core backend capabilities",
    "Backend design and implementation",
    "reliability, performance, and maintainability",
    "Cross-team collaboration",
    "accounting service",
    "portfolio rebalancing",
    "dynamic fund creation mechanism",
    "database-driven model",
    "dashboard banner component",
    "5+ years",
    "capacidades backend clave",
    "Diseno e implementacion backend",
    "confiabilidad, desempeno y mantenibilidad",
    "Colaboracion transversal",
    "servicio contable",
    "rebalanceo de portafolios",
    "mecanismo dinamico de creacion de fondos",
    "modelo dinamico en base de datos",
    "banner generico de dashboard",
  ];
  const escapeRegExp = (content) =>
    content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlightText = (content) => {
    let result = decodeHtml(content);
    const sortedTerms = [...highlightTerms].sort((a, b) => b.length - a.length);

    sortedTerms.forEach((term) => {
      const regex = new RegExp(escapeRegExp(term), "gi");
      result = result.replace(regex, (match) => `<strong>${match}</strong>`);
    });

    return result;
  };
  const toBulletItems = (content) =>
    content
      .split("\n")
      .map((item) => item.replace(/^- /, "").trim())
      .filter(Boolean);

  return (
    <React.Fragment>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src='/ExperienceSection/Details/tybaStocks.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(t("midBackendLongDescription")),
            }}
          />
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
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("midBackendResponsibilities")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("midBackendAchievements")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default MidBackendDetail;
