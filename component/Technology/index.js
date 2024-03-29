import { useTranslations } from "next-intl";

import Section from "../Section";

export const Technology = () => {
  const t = useTranslations();

  return (
    <Section id="technology" className="technology">
      <h2>{t("Technology.Headline")}</h2>
      <div className="skill-area">
        <h3>{t("Technology.Frontend.Headline")}</h3>
        <div className="tiles">
          <Tile name="HTML5" iconName="HTML5.svg" />
          <Tile name="CSS/SCSS" iconName="CSS3.svg" />
          <Tile name="JavaScript" iconName="JavaScript.svg" />
          <Tile name="React" iconName="ReactJS.svg" />
          <Tile name="Svelte" iconName="Svelte.svg" />
        </div>
      </div>
      <div className="skill-area">
        <h3>{t("Technology.Backend.Headline")}</h3>

        <div className="tiles">
          <Tile name="NextJS" iconName="NextJS.svg" />
          <Tile name="Firebase" iconName="Firebase.svg" />
          <Tile name="ExpressJS" iconName="ExpressJS.svg" />
          <Tile name="SQL" iconName="SQL.svg" />
          <Tile name="MongoDB" iconName="MongoDB.svg" />
        </div>
      </div>
      <div className="merge">
        <div className="skill-area mobile">
          <h3>{t("Technology.Mobile.Headline")}</h3>
          <div className="tiles">
            <Tile name="Flutter" iconName="Flutter.svg" />
            <Tile name="Java" iconName="Java.svg" />
          </div>
        </div>
        <div className="skill-area scripting">
          <h3>{t("Technology.Mobile.Scripts")}</h3>
          <div className="tiles">
            <Tile name="NodeJS" iconName="NodeJS.svg" />
            <Tile name="Python" iconName="Python.svg" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Tile = (props) => (
  <div className="tile">
    <img
      className="icon"
      src={`/img/icons/${props.iconName}`}
      alt={"Tool: " + props.name}
    />
    <span>{props.name}</span>
  </div>
);
