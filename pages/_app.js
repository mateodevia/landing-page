import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/pages/index.css";
import "../styles/components/ExperienceSection.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
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

  return <Component {...pageProps} />;
}

const WrappedApp = appWithTranslation(MyApp);

export default function RouterEmulatedApp({ ...props }) {
  // Create a new router object with the locale from query params
  const router = {
    ...props.router,
    locale: props.router.query.locale || props.router.locale
  };
  
  return <WrappedApp {...props} router={router} />;
}
