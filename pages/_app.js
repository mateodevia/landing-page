import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as locales from "../lang";
import "../styles/globals.css";
import "../styles/pages/index.css";
import "../styles/components/ExperienceSection.css";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;

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

  const localeCopy = locales[locale];
  const messages = Object.assign(
    { ...localeCopy["global"] },
    localeCopy[pathname]
  );

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
