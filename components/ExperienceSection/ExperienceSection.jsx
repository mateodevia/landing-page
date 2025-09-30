import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "next-i18next";
import styles from "./ExperienceSection.module.css";
import React from "react";
import CustomDialog from "../shared/CustomDialog/CustomDialog";
import { useState } from "react";
import MidBackendDetail from "./Details/Tyba/MidBackendDetail/MidBackendDetail";
import CumLaudeDetail from "./Details/CumLaudeDetail/CumLaudeDetail";
import InalambriaDetail from "./Details/InalambriaDetail/InalambriaDetail";
import SquadLeadDetail from "./Details/Tyba/SquadLeadDetail/SquadLeadDetail";
import TribeLeadDetail from "./Details/Tyba/TribeLeadDetail/TribeLeadDetail";
import ChapterLeadDetail from "./Details/Tyba/ChapterLeadDetail/ChapterLeadDetail";
import CaptaDetail from "./Details/Capta/CaptaDetail";

const ExperienceSection = () => {
  const [detailDialog, setDetailDialog] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(undefined);
  const { t } = useTranslation("common");

  const experiences = [
    {
      title: t("chapterLead"),
      subTitle: "tyba",
      description: t("chapterLeadDescription"),
      date: `2024 - ${t("present")}`,
      color: "#ffffff",
      icon: "/ExperienceSection/tyba.png",
      url: "https://tyba.com.co/",
      showDetail: true,
      detailComponent: <ChapterLeadDetail />,
    },
    {
      title: t("tribeLead"),
      subTitle: "tyba",
      description: t("tribeLeadDescription"),
      date: `2023`,
      color: "#ffffff",
      icon: "/ExperienceSection/tyba.png",
      url: "https://tyba.com.co/",
      showDetail: true,
      detailComponent: <TribeLeadDetail />,
    },
    {
      title: t("squadLead"),
      subTitle: "tyba",
      description: t("squadLeadDescription"),
      date: `2022 - 2023`,
      color: "#ffffff",
      icon: "/ExperienceSection/tyba.png",
      url: "https://tyba.com.co/",
      showDetail: true,
      detailComponent: <SquadLeadDetail />,
    },
    {
      title: t("midBackend"),
      subTitle: "tyba",
      description: t("midBackendDescription"),
      date: `2021 - 2022`,
      color: "#ffffff",
      icon: "/ExperienceSection/tyba.png",
      url: "https://tyba.com.co/",
      showDetail: true,
      detailComponent: <MidBackendDetail />,
    },
    {
      title: t("inalambriaRole"),
      description: t("inalambriaDescription"),
      subTitle: "Inalambria Internacional",
      date: "2020 - 2021",
      color: "#0055EC",
      icon: "/ExperienceSection/Inalambria.png",
      url: "https://www.inalambria.com/",
      showDetail: true,
      detailComponent: <InalambriaDetail />,
    },
    {
      title: t("captaTitle"),
      description: t("captaDescription"),
      subTitle: "Capta",
      date: "2020 - 2021",
      color: "#38557a",
      icon: "/ExperienceSection/capta.png",
      url: "https://www.capta.co/",
      showDetail: true,
      detailComponent: <CaptaDetail />,
      iconStyles: {
        width: "90%",
      },
    },
    {
      title: t("cumLaudeTitle"),
      description: t("cumLaudeDescription"),
      subTitle: "Universidad de los Andes",
      date: "2020",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
      showDetail: true,
      detailComponent: <CumLaudeDetail />,
    },
    {
      title: t("sincoFreelance"),
      description: t("sincoDescription"),
      subTitle: "Sincosoft",
      date: "2020",
      color: "#0c4270",
      icon: "/ExperienceSection/Sincosoft.png",
      url: "https://www.sinco.com.co/",
      showDetail: false,
      detailComponent: <div>Holii</div>,
    },
    {
      title: t("cupi2Title"),
      description: t("cupi2Description"),
      subTitle: "Universidad de los Andes",
      date: "2020",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
      showDetail: false,
      detailComponent: <div>Holii</div>,
    },
    {
      title: t("arquisoftTitle"),
      description: t("arquisoftDescription"),
      subTitle: "Universidad de los Andes",
      date: "2019",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
      showDetail: false,
      detailComponent: <div>Holii</div>,
    },
    {
      title: t("highSchoolGraduation"),
      description: t("highSchoolDescription"),
      subTitle: "Colegio Rochester",
      date: "2016",
      color: "#131230",
      icon: "/ExperienceSection/Rochester School.png",
      url: "https://rochester.edu.co/",
      showDetail: false,
      detailComponent: <div>Holii</div>,
    },
  ];

  return (
    <React.Fragment>
      <CustomDialog
        title={selectedExperience?.title}
        subTitle={selectedExperience?.subTitle}
        onClose={() => setDetailDialog(false)}
        open={detailDialog}
      >
        {selectedExperience?.detailComponent}
      </CustomDialog>
      <div className={styles.timeline_container}>
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <VerticalTimelineElement
              key={i}
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
                      setSelectedExperience(experience);
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
