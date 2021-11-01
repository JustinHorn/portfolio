import Image from "next/image";
import { Spoiler } from 'react-spoiler-tag'

import Section from "../Section";

import 'react-spoiler-tag/dist/index.css'

const Introduction = () => {
  return (
    <Section className="introduction">
      <div className="text">
        <h3>About me:</h3>
        <p>
          A skelet wants to cross a street in california, but can't. <br/> Why? <Spoiler textColor="hsl(60, 100%, 80%)" revealedColor="black" text="It lacks the nerves to do it."/> <br/> <br/>
          Welcome to my portfolio! I am Justin and usually am more serious.
          Especially regarding software.
          I often rework my code to make it more readable and reposition elements for a more intuitive UI.
          My mission is to bring the world well-written and easy-to-use applications.
          Few things are as powerful as good software that solves an important problem.
          Even fewer things are as much fun as working in a motivated team, supporting each other, sharing tips and tricks for creating such software.

          <br/> <br/>
          In my free time, I like to code as well, but you also find me working out or playing chess at a bar.
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

