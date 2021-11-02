import { useTranslations } from "next-intl";
import Image from "next/image";
import { Spoiler } from 'react-spoiler-tag'

import Section from "../Section";

import 'react-spoiler-tag/dist/index.css'

const Introduction = () => {

  const t = useTranslations();

  return (
    <Section className="introduction">
      <div className="text">
        <h3>{t('Introduction.AboutMe.Headline')}</h3>
        <p>
        {t('Introduction.AboutMe.Paragraph.Joke.intro')} <br/> 
        {t('Introduction.AboutMe.Paragraph.Joke.why')} 
        <Spoiler textColor="hsl(60, 100%, 80%)" revealedColor="black" text={t('Introduction.AboutMe.Paragraph.Joke.resolution')}/>
        <br/> <br/>
        {t("Introduction.AboutMe.Paragraph.Main")}
        <br/> <br/>
        {t("Introduction.AboutMe.Paragraph.Subset")}
        </p>
      </div>
      <div className="container">
        <Image
          src="/img/me.jpg"
          layout="fill"
          objectFit="cover"
          sizes="50vw"
          objectPosition="top"
          className="img professional"
          alt="me in a suite"
        />
        <Image
          src="/img/meInTheWild.jpg"
          layout="fill"
          objectFit="cover"
          sizes="50vw"
          objectPosition="top"
          className="img wild"
          alt="me in at the mountains"
        />
      </div>
    </Section>
  );
};

export default Introduction;

