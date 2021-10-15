import Head from "next/head";
import StartSection from "../components/StartSection/StartPage";
import SkillsGraph from "../components/SkillsGraph/SkillsGraph";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import React from "react";
import FooterSection from "../components/FooterSection/FooterSection";
import ReactFullpage from "@fullpage/react-fullpage";
import { useIntl } from "react-intl";
import CertificationsSection from "../components/CertificationsSection/CertificationsSection";

export default function Home() {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollOverflow={true}
      scrollOverflowOptions={{
        scrollbars: false,
      }}
      anchors={["home", "skills", "experience", "certifications"]}
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
                  <StartSection
                    handleLearnMoreButtonClick={() =>
                      fullpageApi.moveSectionDown()
                    }
                  />
                </section>
              </div>
              <div className='section'>
                <section className='skills-section'>
                  <h1 className='selectOnScroll sectionTittle'>
                    {trans("mySkills")}
                  </h1>
                  <SkillsGraph />
                </section>
              </div>
              <div className='section'>
                <section className='experience-section'>
                  <h1 className='selectOnScroll sectionTittle'>
                    {trans("myExperience")}
                  </h1>
                  <ExperienceSection />
                </section>
              </div>
              <div className='section'>
                <section className='certifications-section'>
                  <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
                    {trans("myCertifications")}
                  </h1>
                  <CertificationsSection />
                </section>
                <section className='footer-section'>
                  <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
                    {trans("contactMe")}
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
