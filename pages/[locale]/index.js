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
import AboutSection from "../../components/AboutSection/AboutSection";
import { useRouter } from "next/router";

const BASE_URL = "https://mateodevia.com";

const OG_LOCALES = { en: "en_US", es: "es_ES" };

const Homepage = () => {
  const { t, i18n } = useTranslation("common");
  const { query } = useRouter();
  const locale = query.locale || "en";
  const aboutRef = useRef();

  const scrollTo = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const canonicalUrl = `${BASE_URL}/${locale}`;
  const metaTitle = t("metaTitle");
  const metaDescription = t("metaDescription");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mateo Devia Vega",
    url: BASE_URL,
    jobTitle: "Head of Backend / Tech Lead",
    description: metaDescription,
    image: `${BASE_URL}/profilePicture.png`,
    sameAs: [
      "https://www.linkedin.com/in/mateo-devia/",
      "https://github.com/mateodevia",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de los Andes",
    },
    knowsAbout: [
      "TypeScript", "Node.js", "AWS", "Microservices", "Serverless Architecture",
      "System Design", "Backend Engineering", "LangChain", "MCP", "AI-driven Solutions",
      "CI/CD", "Terraform", "GitHub Actions", "Software Architecture",
    ],
  };

  return (
    <>
      <main>
        <Head>
          <title>{metaTitle}</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content={metaDescription} />
          <meta name='keywords' content='Mateo Devia, Software Engineer, Tech Lead, Backend Engineer, TypeScript, AWS, Microservices, Serverless, AI, LangChain, MCP, tyba, Colombia' />
          <meta name='author' content='Mateo Devia Vega' />
          <link rel='canonical' href={canonicalUrl} />
          <link rel='alternate' hrefLang='en' href={`${BASE_URL}/en`} />
          <link rel='alternate' hrefLang='es' href={`${BASE_URL}/es`} />
          <link rel='alternate' hrefLang='x-default' href={`${BASE_URL}/en`} />
          {/* Open Graph */}
          <meta property='og:type' content='profile' />
          <meta property='og:site_name' content='Mateo Devia' />
          <meta property='og:title' content={metaTitle} />
          <meta property='og:description' content={metaDescription} />
          <meta property='og:url' content={canonicalUrl} />
          <meta property='og:image' content={`${BASE_URL}/profilePicture.png`} />
          <meta property='og:image:alt' content='Mateo Devia Vega — Tech Lead & Senior Software Engineer' />
          <meta property='og:locale' content={OG_LOCALES[locale] || "en_US"} />
          <meta property='profile:first_name' content='Mateo' />
          <meta property='profile:last_name' content='Devia Vega' />
          {/* Twitter Card */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={metaTitle} />
          <meta name='twitter:description' content={metaDescription} />
          <meta name='twitter:image' content={`${BASE_URL}/profilePicture.png`} />
          <meta name='twitter:image:alt' content='Mateo Devia Vega — Tech Lead & Senior Software Engineer' />
          {/* JSON-LD */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <section className=''>
          <StartSection handleLearnMoreButtonClick={scrollTo} />
        </section>
        <section ref={aboutRef} className='about-section'>
          <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>{t("aboutMe")}</h1>
          <AboutSection />
        </section>
        {/* <section ref={aboutRef} className='skills-section'>
          <h1 className='selectOnScroll sectionTittle'>{t("mySkills")}</h1>
          <SkillsGraph />
        </section> */}
        <section className='experience-section'>
          <h1 className='selectOnScroll sectionTittle'>{t("myExperience")}</h1>
          <ExperienceSection />
        </section>
        {/* <section className='certifications-section'>
          <h1 className='sectionTitleWhite selectOnScroll sectionTittle'>
            {t("myCertifications")}
          </h1>
          <CertificationsSection />
        </section> */}
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
