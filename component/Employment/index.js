import { useTranslations } from "use-intl";

import Section from "../Section";

const Employment = () => {
  const t = useTranslations();

  return (
    <Section className="employment">
      <h2>{t("Employment.Header")}</h2>
      <div className="employer">
        <img
          src="img/company/Cadenas.png"
          alt="Cadenas GmbH logo"
          className="logo"
        />
        <div className="description">
          <h3>Frontend Developer</h3>
          <h4>CADENAS GmbH, Augsburg</h4>
          <span> {t("Employment.Employer.CADENAS.date")}</span>
          <p>{t("Employment.Employer.CADENAS.description")}</p>
        </div>
      </div>
      <div className="employer">
        <img src="img/company/epap.png" alt="epap GmbH logo" className="logo" />
        <div className="description">
          <h3>Full Stack Development Internship</h3>
          <h4>Epap GmbH, Hannover / Remote</h4>
          <span>{t("Employment.Employer.EPAP.date")}</span>
          <p>{t("Employment.Employer.EPAP.description")}</p>
        </div>
      </div>
    </Section>
  );
};

export default Employment;
