import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export const JoyOfCode = (props) => {
  const [height, setHeight] = useState("356");
  const containerRef = useRef();

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
            My final project to complete the WBS-Coding School and to present at
            the demo day. I wanted to create a platform. We constantly
            recommended each other learning resources for certain topics. So I
            thought of building a site for it, but I then decided to rather make
            a site where we can share each other's web projects, display them
            and flex with the awesome tech that we used.
            <br />
            <br />I set on developing the site iteratively. With React on the
            frontend, GraphQL as Api and Express, Prisma and PostgreSQL on the
            backend. I choose Heroku to easily make many deployments.
            <br />
            <br />
            Through this process, my data model constantly kept growing. Thanks
            to Prisma these migrations were easy to manage and I could
            constantly react to the feedback of my friends. Some more
            challenging changes I made were switching from my own email
            authentication to GitHub third-party authentication and switching my
            database provider from ElephantDB to Heroku Postgres.
            <br />
            <br />
            As intended we used the platform to collect the projects we have
            made during those 15 weeks and I am proud that I was able to create
            so much in the 4 four weeks I worked on it. Since the demoed version
            I have made some design changes and migrated the codebase to
            typescript.
          </p>
          <div className="presentation">
            <h4>My presentation of the final project:</h4>
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
              <button>Visit</button>
            </a>

            <a href="https://github.com/JustinHorn/joyofcode">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
