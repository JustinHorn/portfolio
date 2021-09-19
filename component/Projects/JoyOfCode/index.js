export const JoyOfCode = (props) => {
  return (
    <section id="joy-of-code" className="joy-of-code">
      <div className="container">
        <div className="project-body">
          <div ref={props.headlineRef} className="joc-pictures">
            <div className="one">
              <img
                className="pag"
                src="img/projects/JoyOfCode/Homepage.png"
                alt="JoyOfCode -homepage"
              />
            </div>
            <div>
              <img
                className="page"
                src="img/projects/JoyOfCode/Projectpage.png"
                alt="JoyOfCode - projectpage"
              />
            </div>
            <div>
              <img
                className="page"
                src="img/projects/JoyOfCode/Userpage.png"
                alt="JoyOfCode - userpage"
              />
            </div>
          </div>
          <p>
            My final project to complete the WBS-Coding School and to present at
            the demo day. I wanted to create a a platform. We constantly
            recommended each other learning resources for certain topics. So I
            thought of building a site for it, but I then decided to rather make
            a site where we can share each others web projects, display them and
            flex with the awesome tech that we used.
            <br />
            <br />I set on developing the site iteratively. With React on the
            frontend, GraphQL as Api and Express, Prisma and PostgreSQL on the
            backend. I choose Heroku to easily make many deployments.
            <br />
            <br />
            Through this process my data model constantly kept growing. Thanks
            to prisma these migrations were easy to manage and I could
            constantly react to the feedback of my friends. Some more
            challenging changes I made were switching from my own email
            authentication to github third-party authentication and switching my
            database provider from ElephantDB to Heroku Postgres.
            <br />
            <br />
            As intended we used the platform to collect the projects we have
            made during those 15 weeks and I am proud that I was able to create
            so much in the 4 four weeks I worked on it. Since the demoed version
            I have made some design chances and migrated the codebase to
            typescript.
          </p>
          <div className="presentation">
            <h4>My presentation of the final project:</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pXMu9oTCnDU?start=3540"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className="tools">
            <div>React</div>
            <div>Apollo</div>
            <div>GraphQL</div>
            <div>Express</div>
            <div>Prisma</div>
            <div>HerokuSQL</div>
            <div>AWS S3</div>
          </div> */}

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
