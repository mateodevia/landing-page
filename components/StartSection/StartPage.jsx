import React from "react";
import styles from "./StartPage.module.css";

const StartPage = (props) => {
  return (
    <div className={`${styles.startPageContainer} flexbox`}>
      <div className={`${styles.startDescriptionConatainer} flexbox`}>
        <div className={`${styles.textContainer}`}>
          <h3>Mateo Devia Vega</h3>
          <h1>Systems and Computing Engineer, and Developer</h1>
          <div className={`${styles.line} blackLine`} />
        </div>
      </div>
      <div className={`${styles.startPagePhotoAndButtonsContainer}`}>
        <div className={`${styles.startPagePhotoContainer} flexbox`}>
          <img
            src="https://mateodevia.com/media/miFoto.jpeg"
            className={`${styles.startPagePhoto}`}
            alt="Myself"
          ></img>
        </div>
        <div className="flexbox">
          <button className={`${styles.startPageCV} redButton`}>
            Check my resume!
          </button>
          <button
            className={`${styles.startPageLearnMore} blackButton`}
            onClick={props.handleLearnMoreButtonClick}
          >
            Learn more!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
