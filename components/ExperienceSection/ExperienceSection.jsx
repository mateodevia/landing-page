import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "./ExperienceSection.module.css";
import React, { useMemo, useState } from "react";
import CustomDialog from "../shared/CustomDialog/CustomDialog";
import MidBackendDetail from "./Details/Tyba/MidBackendDetail/MidBackendDetail";
import CumLaudeDetail from "./Details/CumLaudeDetail/CumLaudeDetail";
import InalambriaDetail from "./Details/InalambriaDetail/InalambriaDetail";
import SquadLeadDetail from "./Details/Tyba/SquadLeadDetail/SquadLeadDetail";
import TribeLeadDetail from "./Details/Tyba/TribeLeadDetail/TribeLeadDetail";
import ChapterLeadDetail from "./Details/Tyba/ChapterLeadDetail/ChapterLeadDetail";
import BackendDataLeadDetail from "./Details/Tyba/BackendDataLeadDetail/BackendDataLeadDetail";
import CaptaDetail from "./Details/Capta/CaptaDetail";

const EXPERIENCE_DEFS = [
  {
    id: "backendDataLead",
    titleKey: "backendDataLead",
    descriptionKey: "backendDataLeadDescription",
    subTitle: "tyba",
    date: (t) => `2026 - ${t("present")}`,
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
    showDetail: true,
  },
  {
    id: "chapterLead",
    titleKey: "chapterLead",
    descriptionKey: "chapterLeadDescription",
    subTitle: "tyba",
    date: (t) => `2024 - ${t("present")}`,
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
    showDetail: true,
  },
  {
    id: "tribeLead",
    titleKey: "tribeLead",
    descriptionKey: "tribeLeadDescription",
    subTitle: "tyba",
    date: "2023",
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
    showDetail: true,
  },
  {
    id: "squadLead",
    titleKey: "squadLead",
    descriptionKey: "squadLeadDescription",
    subTitle: "tyba",
    date: "2022 - 2023",
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
    showDetail: true,
  },
  {
    id: "midBackend",
    titleKey: "midBackend",
    descriptionKey: "midBackendDescription",
    subTitle: "tyba",
    date: "2021 - 2022",
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
    showDetail: true,
  },
  {
    id: "inalambria",
    titleKey: "inalambriaRole",
    descriptionKey: "inalambriaDescription",
    subTitle: "Inalambria Internacional",
    date: "2020 - 2021",
    color: "#0055EC",
    icon: "/ExperienceSection/Inalambria.png",
    url: "https://www.inalambria.com/",
    showDetail: true,
  },
  {
    id: "capta",
    titleKey: "captaTitle",
    descriptionKey: "captaDescription",
    subTitle: "Capta",
    date: "2020 - 2021",
    color: "#38557a",
    icon: "/ExperienceSection/capta.png",
    url: "https://www.capta.co/",
    showDetail: true,
    iconStyles: { width: "90%" },
  },
  {
    id: "cumLaude",
    titleKey: "cumLaudeTitle",
    descriptionKey: "cumLaudeDescription",
    subTitle: "Universidad de los Andes",
    date: "2020",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
    showDetail: true,
  },
  {
    id: "sinco",
    titleKey: "sincoFreelance",
    descriptionKey: "sincoDescription",
    subTitle: "Sincosoft",
    date: "2020",
    color: "#0c4270",
    icon: "/ExperienceSection/Sincosoft.png",
    url: "https://www.sinco.com.co/",
    showDetail: false,
  },
  {
    id: "cupi2",
    titleKey: "cupi2Title",
    descriptionKey: "cupi2Description",
    subTitle: "Universidad de los Andes",
    date: "2020",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
    showDetail: false,
  },
  {
    id: "arquisoft",
    titleKey: "arquisoftTitle",
    descriptionKey: "arquisoftDescription",
    subTitle: "Universidad de los Andes",
    date: "2019",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
    showDetail: false,
  },
  {
    id: "highSchool",
    titleKey: "highSchoolGraduation",
    descriptionKey: "highSchoolDescription",
    subTitle: "Colegio Rochester",
    date: "2016",
    color: "#131230",
    icon: "/ExperienceSection/Rochester School.png",
    url: "https://rochester.edu.co/",
    showDetail: false,
  },
];

function renderExperienceDetail(id, localeKey) {
  const key = `${id}-${localeKey}`;
  switch (id) {
    case "backendDataLead":
      return <BackendDataLeadDetail key={key} />;
    case "chapterLead":
      return <ChapterLeadDetail key={key} />;
    case "tribeLead":
      return <TribeLeadDetail key={key} />;
    case "squadLead":
      return <SquadLeadDetail key={key} />;
    case "midBackend":
      return <MidBackendDetail key={key} />;
    case "inalambria":
      return <InalambriaDetail key={key} />;
    case "capta":
      return <CaptaDetail key={key} />;
    case "cumLaude":
      return <CumLaudeDetail key={key} />;
    default:
      return <div key={key}>Holii</div>;
  }
}

const ExperienceSection = () => {
  const [detailDialog, setDetailDialog] = useState(false);
  const [selectedExperienceId, setSelectedExperienceId] = useState(undefined);
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const localeKey =
    i18n.language || router.query?.locale || router.locale || "en";

  const experiences = useMemo(
    () =>
      EXPERIENCE_DEFS.map((def) => ({
        id: def.id,
        title: t(def.titleKey),
        description: t(def.descriptionKey),
        subTitle: def.subTitle,
        date: typeof def.date === "function" ? def.date(t) : def.date,
        color: def.color,
        icon: def.icon,
        url: def.url,
        showDetail: def.showDetail,
        iconStyles: def.iconStyles,
      })),
    [t, i18n.language, localeKey]
  );

  const selectedDef = selectedExperienceId
    ? EXPERIENCE_DEFS.find((d) => d.id === selectedExperienceId)
    : undefined;

  return (
    <React.Fragment>
      <CustomDialog
        title={selectedDef ? t(selectedDef.titleKey) : ""}
        sub_title={selectedDef ? selectedDef.subTitle : ""}
        onClose={() => {
          setDetailDialog(false);
          setSelectedExperienceId(undefined);
        }}
        open={detailDialog}
      >
        {selectedExperienceId
          ? renderExperienceDetail(selectedExperienceId, localeKey)
          : null}
      </CustomDialog>
      <div className={styles.timeline_container}>
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <VerticalTimelineElement
              key={`${experience.id}-${localeKey}`}
              icon={
                <a
                  href={experience.url}
                  target='_blank'
                  className={`${styles.element_icon_container} flexbox`}
                >
                  <img className={styles.element_icon} style={experience.iconStyles} src={experience.icon} />
                </a>
              }
              contentStyle={{
                backgroundColor: "var(--background)",
                color: "#fff",
                borderRadius: "20px",
                boxShadow: "8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff",
              }}
              iconStyle={{
                backgroundColor: experience.color,
                border: "3px solid white",
                boxShadow: "6px 6px 12px #d0d0d0",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--background)",
              }}
              date={experience.date}
              dateClassName={styles.date}
            >
              <h3 className={`${styles.element_title}`}>{experience.title}</h3>
              <h4 className={`${styles.element_subtitle}`}>
                {experience.subTitle}
              </h4>
              <p className={`${styles.element_description}`}>
                {experience.description}
              </p>
              {experience.showDetail && (
                <div>
                  <button
                    onClick={() => {
                      setDetailDialog(true);
                      setSelectedExperienceId(experience.id);
                    }}
                    className={`${styles.learn_more_button} white-button`}
                  >
                    {t("learnMore")}
                  </button>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </React.Fragment>
  );
};
export default ExperienceSection;
