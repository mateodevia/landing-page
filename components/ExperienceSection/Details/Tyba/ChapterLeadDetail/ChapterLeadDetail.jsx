import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./ChapterLeadDetail.module.css";

function ChapterLeadDetail(props) {
  const { t } = useTranslation("common");
  const decodeHtml = (content) =>
    content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
  const highlightTerms = [
    "26 engineers",
    "microservice-based investment platform",
    "serverless",
    "architecture",
    "DX",
    "9 squads",
    "mentorship",
    "AI architecture",
    "centralized MCP gateway",
    "50%",
    "code review agent",
    "human-in-the-loop",
    "LLM-as-a-judge",
    "TDD vibe-coding skill",
    "testing strategy",
    "stage testing",
    "E2E",
    "SQS/SNS",
    "clean architecture",
    "26 ingenieros",
    "microservicios",
    "arquitectura backend",
    "9 equipos",
    "mentoría",
    "arquitectura de IA",
    "gateway MCP centralizado",
    "agente de revisión de código",
    "LLM-as-a-judge",
    "skill de vibe coding con TDD",
    "estrategia de testing",
    "stage testing",
    "suite E2E",
    "arquitectura limpia",
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
              __html: highlightText(t("chapterLeadLongDescription")),
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
        {toBulletItems(t("chapterLeadResponsibilities")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("chapterLeadAchievements")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ChapterLeadDetail;
