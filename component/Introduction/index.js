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
      

          A skelet wants to cross a street in california, but can't. <br/> Why? <Spoiler textColor="hsl(60, 100%, 80%)" revealedColor="black" text="It lacks the nerfs to do it."/> <br/> <br/>
          Welcome to my portfolio! I usually am more serious. Often pretty serious. I can't help it, I just care a lot.
          When I am doing sth. I always evolve the desire to be to get good at it. Might it be making youtube videos,
          playing games, working out or coding. I chose to drop out of university because I wanted to become better
          at entrepreneurship and programming. I make sacrifices for my goals. One of the most satisfying feelings for me is having purposefully crafted out
          a feature after having thought of the pros and cons of the implementation and compared them to alternatives, consulted with coworkers and at best involved the users of the product.    
        </p>
      </div>
      <div className="container">
        <Image
          src="/img/me.jpg"
          layout="fill"
          objectFit="cover"
          sizes="50vw"
          objectPosition="top"
          className="img"
          alt="me in a suite"
        />
        {/* <div className="img" alt="me" /> */}
      </div>
    </Section>
  );
};

export default Introduction;

