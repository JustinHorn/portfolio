import Image from "next/image";

import Section from "../Section";

const Introduction = () => {
  return (
    <Section className="introduction">
      <div className="text">
        <h3>About me:</h3>
        <p>
          {/* Hi, my name is Justin. I am rebel. Hope you are not part of the empire.
          I love to work on exciting starships, involving agile navigation and modern technologies.
          It's a joy for me to commit to till the end and find new ways to solve the same problem.
          I am not afraid of mundane duties and am actually notorious for having a clean and structured base. */}



        Hi, many is Justin and I programm pretty much everyday to create beautiful and well working software products.
        Working on projects has been my passion since my early teens where I made youtube videos, but later aimed on becoming the best at the games that I played.
       I started with coding earlier creating a 2D-Zombie shooter with scratch, learned Java later but I never got really consistent with it until I started studying IT.

          I quickly realized that studying at the university would not bring the skills I desired and so I decided to drop out and try myself as a tech entrepreneur.

{/* 
          I hate to stagnate and achieve failure in waterfall.
          
          
          
          
           and I like building smart and well designed
          web-applications. 
          
          Working on projects and improving myself has always been a passion of mine. As teenager I 
          made a scratch game, created youtube videos, while wanting to be the best at the games that I played. 

          I always asked myself how to be more and how to become better at the things that I have been doing


          I read a lot of philosophy especially Friedrich Nietzsche and the Stoics cought my intrest.
          

          Eventually out of frustration I did quit university and tried myself as an Entrepreneur.

          Struggling with applications eventually I managed to get a position at a startup.
          
          I often fought with my father.

          
          My interest in web development started back in 2020
          when I wanted to make my projects more accessible. 
           */}
          
          
{/*           
          
          I already new how to code in a
          clean and scalable way, but I never really thought about UI/UX until
          confronted with HTML & CSS. <br /> <br /> By now I have completed a 15
          week web development bootcamp, worked at a startup and am currently
          working on the 3DfindIT app at my medium sized Employeer CADENAS.{" "}
          <br /> <br /> In my freetime I like to learn new tricks and skills, I
          am interested in Entrepreneurship and work out on a regular basis. */}
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
