import Head from "next/head";
import StartSection from "../../components/StartSection/StartPage";
import SkillsGraph from "../../components/SkillsGraph/SkillsGraph";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";
import React, { useRef, useEffect } from "react";
import FooterSection from "../../components/FooterSection/FooterSection";
import CertificationsSection from "../../components/CertificationsSection/CertificationsSection";
import { useTranslation } from "next-i18next";
import i18nextConfig from "../../next-i18next.config";
import { getI18nPaths } from "../../getI18nPaths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Homepage = () => {
  const { t, i18n } = useTranslation("common");
  const skillsRef = useRef();

  const scrollTo = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <Head>
          <title>Mateo Devia</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <section className=''>
          <StartSection handleLearnMoreButtonClick={scrollTo} />
        </section>
        {/* <section ref={skillsRef} className='skills-section'>
          <h1 className='selectOnScroll sectionTittle'>{t("mySkills")}</h1>
          <SkillsGraph />
        </section> */}
        <section className='experience-section'>
          <h1 className='selectOnScroll sectionTittle'>{t("myExperience")}</h1>
          <ExperienceSection />
        </section>
        <section className='certifications-section'>
          <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
            {t("myCertifications")}
          </h1>
          <CertificationsSection />
        </section>
        <section className='footer-section'>
          <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
            {t("contactMe")}
          </h1>
          <FooterSection />
        </section>
      </main>
    </>
  );
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx?.params?.locale,
      ["common"],
      i18nextConfig
    )),
  },
});

export default Homepage;
