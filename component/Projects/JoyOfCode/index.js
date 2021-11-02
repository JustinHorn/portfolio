import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export const JoyOfCode = (props) => {
  const [height, setHeight] = useState("356");
  const containerRef = useRef();

  const t = useTranslations();

  useLayoutEffect(() => {
    setHeight(
      Math.floor(
        containerRef.current.getBoundingClientRect().width * 0.56
      ).toString()
    );
  }, []);

  return (
    <section id="joy-of-code" className="joy-of-code">
      <div className="container">
        <div className="project-body">
          <div ref={props.headlineRef} className="joc-pictures">
            <div className="one">
              <Image
                className="pag"
                src="/img/projects/JoyOfCode/cropped_homepage.png"
                alt="JoyOfCode -homepage"
                layout="fill"
                priority
                loading="eager"
              />
            </div>
            <div>
              <Image
                className="page"
                src="/img/projects/JoyOfCode/cropped_projectpage.png"
                alt="JoyOfCode - projectpage"
                layout="fill"
                priority
                loading="eager"
                sizes="50vw"
              />
            </div>
            <div>
              <Image
                className="page"
                src="/img/projects/JoyOfCode/cropped_userpage.png"
                alt="JoyOfCode - userpage"
                layout="fill"
                priority
                loading="eager"
                sizes="50vw"
              />
            </div>
          </div>
          <p>
            {t.rich("Projects.JoyOfCode.description", { br: () => <br /> })}
          </p>
          <div className="presentation">
            <h4>{t("Projects.JoyOfCode.Presentation.headline")}</h4>
            <iframe
              ref={containerRef}
              width="100%"
              height={height}
              src="https://www.youtube.com/embed/pXMu9oTCnDU?start=3540"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <a href="https://joyofcode.herokuapp.com/?lined=false">
              <button>{t("Projects.Template.VisitWebsiteButton")}</button>
            </a>

            <a href="https://github.com/JustinHorn/joyofcode">
              <button>{t("Projects.Template.CheckoutCodeButton")}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
