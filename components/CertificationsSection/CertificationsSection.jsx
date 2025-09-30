import styles from "./CertificationsSection.module.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CertificationsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation("common");

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
      label: t("cumLaudeDiploma"),
      imgPath: "Certifications/Cum Laude.png",
    },
    {
      label: t("bachelorDiploma"),
      imgPath: "Certifications/Ingeniero de Sistemas y Computación.png",
    },
    {
      label: t("gitDiploma"),
      imgPath: "Certifications/Github Introduction Course.png",
    },
    {
      label: t("dockerDiploma"),
      imgPath: "Certifications/Docker.png",
    },
    {
      label: t("mlIntroductionDiploma"),
      imgPath: "Certifications/Introducción a Machine Learning.png",
    },
    {
      label: t("mlPracticalFundamentalsDiploma"),
      imgPath: "Certifications/Fundamentos Prácticos de Machine Learning.png",
    },
    {
      label: t("gitDiploma"),
      imgPath: "Certifications/Github Introduction Course.png",
    },
    {
      label: t("cvDiploma"),
      imgPath: "Certifications/Creación de Portafolio y CV.png",
    },
    {
      label: t("professionalProfileDiploma"),
      imgPath: "Certifications/Optimización del Perfil Profesional.png",
    },
    {
      label: t("personalGrowthDiploma"),
      imgPath: "Certifications/Herramientas para el crecimiento Personal.png",
    },
  ];

  return (
    <div className='flexbox'>
      <button
        className={"red-button " + styles.arrow_button}
        onClick={handleBack}
      >
        <img
          className={styles.arrow_icon}
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
              <div className={styles.carousel_flex_container}>
                <div className={styles.carousel_image_container}>
                  <img
                    className={styles.carousel_image}
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
        className={"red-button " + styles.arrow_button}
        onClick={handleNext}
      >
        <img
          className={styles.arrow_icon}
          src='Certifications/rightArrow.svg'
          alt=''
        />
      </button>
    </div>
  );
};
export default CertificationsSection;
