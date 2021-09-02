import Head from "next/head";
import StartSection from "../components/StartSection/StartPage";
import SkillsGraph from "../components/SkillsGraph/SkillsGraph";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import React from "react";
import FooterSection from "../components/FooterSection/FooterSection";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mateo Devia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='home-page-container'>
        <section className='scroll-snap-section'>
          <StartSection handleLearnMoreButtonClick={() => {}} />
        </section>
        <div className='scroll-snap-section normalScroll'>
          <section className='skills-section'>
            <h1 className='selectOnScroll sectionTittle'>My Skills</h1>
            <SkillsGraph />
          </section>
          <section className='experience-section'>
            <h1 className='selectOnScroll sectionTittle'>My Experience</h1>
            <ExperienceSection />
          </section>
          <section className='footer-section'>
            <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
              Contact me
            </h1>
            <FooterSection />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
