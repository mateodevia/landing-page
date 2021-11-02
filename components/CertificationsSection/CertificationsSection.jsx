import styles from "./CertificationsSection.module.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useIntl } from "react-intl";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CertificationsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const next = prevActiveStep + 1;
      return next < diplomas.length ? next : prevActiveStep;
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

  const diplomas = [
    {
      label: trans("cumLaudeDiploma"),
      imgPath: "Certifications/Cum Laude.png",
    },
    {
      label: trans("bachelorDiploma"),
      imgPath: "Certifications/Ingeniero de Sistemas y Computación.png",
    },
    {
      label: trans("gitDiploma"),
      imgPath: "Certifications/Github Introduction Course.png",
    },
    {
      label: trans("dockerDiploma"),
      imgPath: "Certifications/Docker.png",
    },
    {
      label: trans("mlIntroductionDiploma"),
      imgPath: "Certifications/Introducción a Machine Learning.png",
    },
    {
      label: trans("mlPracticalFundamentalsDiploma"),
      imgPath: "Certifications/Fundamentos Prácticos de Machine Learning.png",
    },
    {
      label: trans("gitDiploma"),
      imgPath: "Certifications/Github Introduction Course.png",
    },
    {
      label: trans("cvDiploma"),
      imgPath: "Certifications/Creación de Portafolio y CV.png",
    },
    {
      label: trans("profesionalProfileDiploma"),
      imgPath: "Certifications/Optimización del Perfil Profesional.png",
    },
    {
      label: trans("personalGrowthDiploma"),
      imgPath: "Certifications/Herramientas para el crecimiento Personal.png",
    },
  ];

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
      >
        {diplomas.map((step, index) => (
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
