import Image from "next/image";

import Section from "../Section";

const Introduction = () => {
  return (
    <Section className="introduction">
      <div className="text">
        <h3>About me:</h3>
        <p>
          Hi! My name is Justin and I like building smart and well designed
          web-applications. My interest in web development started back in 2020
          when I coded a desktop app named the "Dayplaner" and wanted to make it
          easily accessible to a lot of users — I already new how to code in a
          clean and scalable way, but I never really thought about UI/UX until
          confronted with HTML & CSS. <br /> <br /> By now I have completed a 15
          week web development bootcamp, worked at a startup and am currently
          working on the 3DfindIT app at my current medium sized Employeer
          CADENAS. <br /> <br /> In my freetime I like to learn new tricks and
          skills, I am interested in Entrepreneurship and work out on a regular
          basis.
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
