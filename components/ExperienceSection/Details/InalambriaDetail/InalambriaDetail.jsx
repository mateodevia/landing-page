import * as React from "react";
import { useTranslation } from "next-i18next";
import styles from "./InalambriaDetail.module.css";

function InalambriaDetail(props) {
  const { t } = useTranslation("common");
  const decodeHtml = (content) =>
    content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
  const highlightTerms = [
    "innovation team",
    "design and implementation",
    "Product design and development",
    "End-to-end software design and implementation",
    "AWS production workloads",
    "first CI/CD pipeline",
    "CircleCI",
    "200 automated tests",
    "horizontally scalable inbound messaging microservice",
    "stateless processing",
    "RabbitMQ",
    "production deployment in AWS",
    "VPCs, security groups, load balancers, Elastic Beanstalk",
    "equipo de innovacion",
    "diseno e implementacion",
    "Diseno y desarrollo de producto",
    "Diseno e implementacion end-to-end",
    "AWS",
    "primer pipeline de CI/CD",
    "200 pruebas automatizadas",
    "microservicio de mensajeria entrante escalable horizontalmente",
    "procesamiento stateless",
    "despliegue productivo en AWS",
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
            src='/ExperienceSection/Details/innovation.png'
            alt=''
          />
        </div>
        <div className={styles.text_container}>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(t("inalambriaLongDescription")),
            }}
          />
          <a
            className={"link " + styles.link}
            href='https://inalambria.com/'
            target='_blank'
          >
            {t("inalambriaPage")}
            <img className={styles.link_icon} src='icons/link.svg' alt='' />
          </a>
        </div>
      </div>
      <h4 className={styles.Responsibilities_title}>{t("responsibilities")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("inalambriaResponsibilities")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
      <h4 className={styles.Responsibilities_title}>{t("achievements")}</h4>
      <ul className={styles.Responsibilities}>
        {toBulletItems(t("inalambriaAchievements")).map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightText(item) }}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default InalambriaDetail;
