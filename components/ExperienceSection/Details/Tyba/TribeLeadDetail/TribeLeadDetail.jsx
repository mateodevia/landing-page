import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./TribeLeadDetail.module.css";

function TribeLeadDetail(props) {
  const { t } = useTranslation("common");
  const decodeHtml = (content) =>
    content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
  const highlightTerms = [
    "three backend development teams",
    "critical architectural decisions",
    "3 software squads",
    "cross-functional initiatives",
    "fault-resilience framework",
    "exponential backoff",
    "dead-letter queues",
    "KYC",
    "event-driven architecture",
    "event-driven architecture standard",
    "AWS SQS/SNS",
    "Terraform",
    "monorepo",
    "tres equipos de desarrollo backend",
    "decisiones arquitectonicas criticas",
    "3 squads de desarrollo",
    "iniciativas transversales",
    "framework de resiliencia",
    "exponential backoff",
    "dead-letter queues",
    "arquitectura orientada a eventos",
    "estandar de arquitectura orientada a eventos",
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
            src='/ExperienceSection/Details/tybaPortfolio.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(t("tribeLeadLongDescription")),
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
        {toBulletItems(t("tribeLeadResponsibilities")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("tribeLeadAchievements")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TribeLeadDetail;
