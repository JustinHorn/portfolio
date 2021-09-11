export const JoyOfCode = () => {
  return (
    <section id="joy-of-code" className="joy-of-code">
      <div className="container">
        <h2>Joy Of Code</h2>

        <div className="joc-pictures">
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
          Joy Of Code is a platform I created as final project for the WBS
          Coding school. My friends and me used it to collect and share our
          Web-Development projects. The pictures shown on the cards were made by
          the platform.
        </p>
        <div className="tools">
          <div>React</div>
          <div>Apollo</div>
          <div>GraphQL</div>
          <div>Express</div>
          <div>Prisma</div>
          <div>HerokuSQL</div>
          <div>AWS S3</div>
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
    </section>
  );
};
