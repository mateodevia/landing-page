import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./BackendDataLeadDetail.module.css";

function BackendDataLeadDetail() {
  const { t } = useTranslation("common");
  const decodeHtml = (content) =>
    content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
  const highlightTerms = [
    "data architecture capabilities",
    "unify business data",
    "data-driven decisions",
    "data architecture standards",
    "cross-team initiatives",
    "security and operational excellence",
    "data ingestion microservices",
    "data lake",
    "monorepo architecture",
    "CI/CD pipelines",
    "infrastructure-as-code",
    "AI agent",
    "SQL queries",
    "arquitectura de datos",
    "unificar la información del negocio",
    "gobierno del dato",
    "decisiones basadas en datos",
    "iniciativas entre equipos",
    "seguridad y excelencia operativa",
    "microservicios de ingestión",
    "lago de datos",
    "arquitectura monorepo",
    "pipelines de CI/CD",
    "infraestructura como código",
    "agente con IA",
    "consultas SQL",
    "data mart",
    "ingeniería de datos",
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
            src='/ExperienceSection/Details/tybaAdvisor.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(t("backendDataLeadLongDescription")),
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
        {toBulletItems(t("backendDataLeadResponsibilities")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("backendDataLeadAchievements")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default BackendDataLeadDetail;
