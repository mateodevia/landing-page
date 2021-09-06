import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./ExperienceSection.module.css";

const experiences = [
  {
    title: "Backend Developer",
    subTitle: "tyba",
    description:
      "Full time job as backend developer for a Fintech app used by thousands of users",
    date: "2020 - present",
    color: "#ffffff",
    icon: "/ExperienceSection/tyba.png",
    url: "https://tyba.com.co/",
  },
  {
    title: "Innovation Fullstack Developer",
    subTitle: "Inalambria Internacional",
    description:
      "Full time job. Web development, product design, software design.",
    date: "2020 - 2021",
    color: "#0055EC",
    icon: "/ExperienceSection/Inalambria.png",
    url: "https://www.inalambria.com/",
  },
  {
    title: "Cum Laude Bachelor Degree",
    subTitle: "Universidad de los Andes",
    description:
      "B.S. in Systems and Computing Engineering. Graduted with a GPA within the highest 3% in the last 5 years.",
    date: "2020",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
  },
  {
    title: "Freelance Software development",
    subTitle: "Sincosoft",
    description:
      "Developed a content management web tool with hight standards of security, maintainability, and extensibility.",
    date: "2020",
    color: "#0c4270",
    icon: "/ExperienceSection/Sincosoft.png",
    url: "https://www.sinco.com.co/",
  },
  {
    title: "Python Research Assitant",
    subTitle: "Universidad de los Andes",
    description:
      "Research assistant on the curriculum migration from Java to Python for the introductory programming courses.",
    date: "2020",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
  },
  {
    title: "Software Architecture Teaching Assistant",
    subTitle: "Bogotá, Colombia",
    description:
      "Teaching Assistant focused on producing teaching material for students, and general redesigning of the Software Architecture and Design course",
    date: "2019",
    color: "#fff200",
    icon: "/ExperienceSection/Uniandes.png",
    url: "https://uniandes.edu.co/en",
  },
  {
    title: "High School Graduation",
    subTitle: "Bogotá, Colombia",
    description: "Fullstack developer",
    date: "2016",
    color: "#131230",
    icon: "/ExperienceSection/Rochester School.png",
    url: "https://rochester.edu.co/",
  },
];

const ExperienceSection = () => (
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
        <h4 className={`${styles.element_subtitle}`}>{experience.subTitle}</h4>
        <p className={`${styles.element_description}`}>
          {experience.description}
        </p>
        <div>
          <button className={`${styles.learnMoreButton} white-button`}>
            Learn More
          </button>
        </div>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);
export default ExperienceSection;
