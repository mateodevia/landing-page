import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useIntl } from "react-intl";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });

  const experiences = [
    {
      title: trans("tybaRole"),
      subTitle: "tyba",
      description: trans("tybaDescription"),
      date: `2020 - ${trans("present")}`,
      color: "#ffffff",
      icon: "/ExperienceSection/tyba.png",
      url: "https://tyba.com.co/",
    },
    {
      title: trans("inalambriaRole"),
      description: trans("inalambriaDescription"),
      subTitle: "Inalambria Internacional",
      date: "2020 - 2021",
      color: "#0055EC",
      icon: "/ExperienceSection/Inalambria.png",
      url: "https://www.inalambria.com/",
    },
    {
      title: trans("cumLaudeTitle"),
      description: trans("cumLaudeDescription"),
      subTitle: "Universidad de los Andes",
      date: "2020",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
    },
    {
      title: trans("sincoFreelance"),
      description: trans("sincoDescription"),
      subTitle: "Sincosoft",
      date: "2020",
      color: "#0c4270",
      icon: "/ExperienceSection/Sincosoft.png",
      url: "https://www.sinco.com.co/",
    },
    {
      title: trans("cupi2Title"),
      description: trans("cupi2Description"),
      subTitle: "Universidad de los Andes",
      date: "2020",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
    },
    {
      title: trans("arquisoftTitle"),
      description: trans("arquisoftDescription"),
      subTitle: "Universidad de los Andes",
      date: "2019",
      color: "#fff200",
      icon: "/ExperienceSection/Uniandes.png",
      url: "https://uniandes.edu.co/en",
    },
    {
      title: trans("highSchoolGraduation"),
      description: trans("highSchoolDescription"),
      subTitle: "Colegio Rochester",
      date: "2016",
      color: "#131230",
      icon: "/ExperienceSection/Rochester School.png",
      url: "https://rochester.edu.co/",
    },
  ];

  return (
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
              <img className={styles.element_icon} src={experience.icon} />
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
          contentArrowStyle={{ borderRight: "7px solid  var(--background)" }}
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
          <div>
            <button className={`${styles.learnMoreButton} white-button`}>
              {trans("learnMore")}
            </button>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
export default ExperienceSection;
