import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/pages/index.css";
import "../styles/components/ExperienceSection.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import nextI18NextConfig from "../next-i18next.config";

function I18nLocaleSync() {
  const router = useRouter();
  const { i18n } = useTranslation("common");

  useEffect(() => {
    if (!router.isReady || !i18n) return;
    const fromRoute = router.query.locale;
    if (
      typeof fromRoute === "string" &&
      fromRoute.length > 0 &&
      i18n.language !== fromRoute
    ) {
      i18n.changeLanguage(fromRoute);
    }
  }, [router.isReady, router.query.locale, i18n]);

  return null;
}

function MyApp({ Component, pageProps }) {
  const hasI18n = Boolean(pageProps?._nextI18Next);

  useEffect(() => {
    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    const elementsToShow = document.querySelectorAll(".selectOnScroll");

    const isElementVisible = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    };

    function loop() {
      elementsToShow.forEach((element) => {
        if (isElementVisible(element)) {
          element.classList.add("isVisible");
        } else {
          element.classList.remove("isVisible");
        }
      });
      scroll(loop);
    }
    loop();
  }, []);

  return (
    <>
      {hasI18n ? <I18nLocaleSync /> : null}
      <Component {...pageProps} />
    </>
  );
}

const WrappedApp = appWithTranslation(MyApp, nextI18NextConfig);

export default function RouterEmulatedApp({ ...props }) {
  // Create a new router object with the locale from query params
  const router = {
    ...props.router,
    locale: props.router.query.locale || props.router.locale
  };
  
  return <WrappedApp {...props} router={router} />;
}
