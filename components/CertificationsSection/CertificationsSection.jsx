import styles from "./CertificationsSection.module.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Cum Laude Recognition Diploma",
    imgPath: "Certifications/Cum Laude.png",
  },
  {
    label: "B.S. in Systems and Computing Engineering Diploma",
    imgPath: "Certifications/Ingeniero de Sistemas y Computación.png",
  },
  {
    label: "Git and Github Introduction Course",
    imgPath: "Certifications/Github Introduction Course.png",
  },
  {
    label: "Docker Diploma Course Diploma",
    imgPath: "Certifications/Docker.png",
  },
  {
    label: "Introducción a Machine Learning Course Diploma",
    imgPath: "Certifications/Introducción a Machine Learning.png",
  },
  {
    label: "Practical fundamentals of Machine Learning Course Diploma",
    imgPath: "Certifications/Fundamentos Prácticos de Machine Learning.png",
  },
  {
    label: "Portfolio and CV creation Course Diploma",
    imgPath: "Certifications/Creación de Portafolio y CV.png",
  },
  {
    label: "Professional Profile Optimization Course Diploma",
    imgPath: "Certifications/Optimización del Perfil Profesional.png",
  },
  {
    label: "Personal Growth Development Course Diploma",
    imgPath: "Certifications/Herramientas para el crecimiento Personal.png",
  },
];

const CertificationsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const next = prevActiveStep + 1;
      return next < tutorialSteps.length ? next : prevActiveStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const next = prevActiveStep - 1;
      return next >= 0 ? next : prevActiveStep;
    });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='flexbox'>
      <button
        className={"red-button " + styles.arrowButton}
        onClick={handleBack}
      >
        <img
          className={styles.arrowIcon}
          src='Certifications/leftArrow.svg'
          alt=''
        />
      </button>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        animateTransitions={true}
        displaySameSlide={false}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className={styles.carouselFlexContainer}>
                <div className={styles.carouselImageContainer}>
                  <img
                    className={styles.carouselImage}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <button
        className={"red-button " + styles.arrowButton}
        onClick={handleNext}
      >
        <img
          className={styles.arrowIcon}
          src='Certifications/rightArrow.svg'
          alt=''
        />
      </button>
    </div>
  );
};
export default CertificationsSection;
