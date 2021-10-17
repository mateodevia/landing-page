import Head from "next/head";
import StartSection from "../components/StartSection/StartPage";
import SkillsGraph from "../components/SkillsGraph/SkillsGraph";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import React from "react";
import FooterSection from "../components/FooterSection/FooterSection";
import { useIntl } from "react-intl";
import CertificationsSection from "../components/CertificationsSection/CertificationsSection";

export default function Home() {
  const { formatMessage } = useIntl();
  const trans = (id) => formatMessage({ id });
  return (
    <React.Fragment>
      <Head>
        <title>Mateo Devia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className=''>
        <StartSection
          handleLearnMoreButtonClick={() => fullpageApi.moveSectionDown()}
        />
      </section>
      <section className='skills-section'>
        <h1 className='selectOnScroll sectionTittle'>{trans("mySkills")}</h1>
        <SkillsGraph />
      </section>
      <section className='experience-section'>
        <h1 className='selectOnScroll sectionTittle'>
          {trans("myExperience")}
        </h1>
        <ExperienceSection />
      </section>
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
    </React.Fragment>
  );
}
