import Head from "next/head";
import StartSection from "../components/StartSection/StartPage";
import SkillsGraph from "../components/SkillsGraph/SkillsGraph";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import React from "react";
import FooterSection from "../components/FooterSection/FooterSection";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      scrollOverflow={true}
      scrollOverflowOptions={{
        scrollbars: false,
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <React.Fragment>
              <Head>
                <title>Mateo Devia</title>
                <link rel='icon' href='/favicon.ico' />
              </Head>
              <div className='section'>
                <section className='scroll-snap-section'>
                  <StartSection handleLearnMoreButtonClick={() => {}} />
                </section>
              </div>
              <div className='section'>
                <section className='skills-section'>
                  <h1 className='selectOnScroll sectionTittle'>My Skills</h1>
                  <SkillsGraph />
                </section>
              </div>
              <div className='section'>
                <section className='experience-section'>
                  <h1 className='selectOnScroll sectionTittle'>
                    My Experience
                  </h1>
                  <ExperienceSection />
                </section>
                <section className='footer-section'>
                  <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
                    Contact me
                  </h1>
                  <FooterSection />
                </section>
              </div>
            </React.Fragment>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
