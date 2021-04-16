import Head from "next/head";
import StartSection from "../components/StartSection/StartPage";
import SkillsGraph from "../components/SkillsGraph/SkillsGraph";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mateo Devia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page-container">
        <section className="scroll-snap-section">
          <StartSection handleLearnMoreButtonClick={() => {}} />
        </section>
        <section className="scroll-snap-section skills-section">
          <h1>My Skills</h1>
          <SkillsGraph />
        </section>
      </div>
    </React.Fragment>
  );
}
