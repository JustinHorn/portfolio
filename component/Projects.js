import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

import { FlutterProject } from "./FlutterProject";
import { ReactProject } from "./ReactProject";

const Projects = () => {
  const [show, setShow] = useState("nothing");

  useEffect(() => {
    const body = document.querySelector("body");

    if (show !== "nothing") {
      body.style = "overflow:hidden;";
    } else {
      body.style = "";
    }
  }, [show]);

  return (
    <section id="projects" className="projects">
      <h2>Joy Of Code</h2>

      <div className="frontend">
        <img
          className="page one"
          src="img/projects/JoyOfCode/Homepage.png"
          alt="JoyOfCode -homepage"
        />
        <img
          className="page"
          src="img/projects/JoyOfCode/Projectpage.png"
          alt="JoyOfCode - projectpage"
        />
        <img
          className="page"
          src="img/projects/JoyOfCode/Userpage.png"
          alt="JoyOfCode - userpage"
        />
      </div>
      <p>
        Joy Of Code is a platform I created as final project for the WBS Coding
        school. My friends and me used it to collect and share our
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

      <h2>Some Projects I made with</h2>

      <div className="cards">
        <div className="tile" onClick={() => setShow("React")}>
          <img src="img/icons/ReactJS.svg" alt="ReactJS" />
          <h4>ReactJS</h4>
        </div>
        {/* <div className="tile" onClick={() => setShow("NodeJS")}>
          <img src="img/icons/NodeJS.svg" alt="NodeJS" />
          <h4>NodeJS</h4>
        </div> */}

        <div className="tile" onClick={() => setShow("Flutter")}>
          <img src="img/icons/Flutter.svg" alt="Flutter" />
          <h4>Flutter</h4>
        </div>
      </div>

      {show !== "nothing" && (
        <>
          <div className="monitor-overlay">
            <div
              className="background"
              onClick={() => setShow("nothing")}
            ></div>
            <div className="monitor">
              <div className="monitor-nav">
                <span />
                <h2 className="headline">{show}</h2>

                <img
                  className="close"
                  src="img/icons/X.svg"
                  alt="Close"
                  onClick={() => setShow("nothing")}
                />
              </div>

              <div className="monitor-body">
                {show === "React" && <ReactBody />}
                {show === "NodeJS" && <ReactBody />}
                {show === "Flutter" && <FlutterBody />}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;

const ReactBody = () => (
  <div className="react">
    <ReactProject
      name="Meme Generator"
      imgFolder="MemeGenerator"
      img={["Generator.png", "Home.png", "Freestyle.png"]}
      imgAlt={[
        "showing the top/bottom generator with skeptical kid meme saying 'so you have build another generator?'",
        "showing the home screen",
        "Showing freestyle editor where you can place the text everywhere",
      ]}
      tags={["CSS", "React", "Firebase Auth"]}
      description="A meme generator created with a college from WBS. It has
  top/bottom-text and a freestyle version."
      website="https://justinhorn.name/ultimate-tic-tac-toe-react/"
      code="https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
    />
    <ReactProject
      name="Ultimate Tic Tac Toe"
      imgFolder="UltimateTicTacToe"
      img={["AIvsRandom.png", "RandomVsRandom.png", "HvsH.png"]}
      imgAlt={[
        "the result of gamemode: AI vs Random - AI won",
        "the result of gamemode: randomAI vs randomAI - O won",
        "an empty board and gamemode: Humans vs Humans",
      ]}
      tags={["CSS", "React", "Webworker"]}
      description=" A more complicated Version of the know Tic-Tac-Toe game
  with two types of AI as worthy opponents."
      website="https://justinhorn.name/ultimate-tic-tac-toe-react/"
      code="https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
    />
    <MediaQuery minWidth={630}>
      <ReactProject
        name="Rickys Quest"
        imgFolder="RickysQuest"
        img={["QuizQuestion.png", "Quizzes.png", "Follower.png"]}
        imgAlt={[
          "An example Quiz",
          "List of Quizzes",
          "Profile showing the characters",
        ]}
        tags={["CSS", "React", "Firebase", "Styled-Components"]}
        description="A web-game I made with colleges where you solve quizzes to get Characters from
  the Rick and Morty multiverses powered by the Rick and
  Morty Api."
        website="https://rickysquest.netlify.app/"
        code="https://github.com/JustinHorn/rickysquest"
      />
    </MediaQuery>
  </div>
);

const FlutterBody = () => (
  <div className="flutter">
    <FlutterProject
      name="Chess 2048"
      imgFolder="android"
      img={["2048chess.jpg"]}
      imgAlt={["2048 with chess figures"]}
      description="A version of 2048 with chess figures as game pieces."
      code="https://github.com/JustinHorn/flutter_projects/tree/master/flutter_2048"
    />
    <MediaQuery minWidth={680}>
      <FlutterProject
        name="Movie-Suggester"
        imgFolder="android"
        img={["movie_suggester.jpg"]}
        imgAlt={["A suggested movie"]}
        description="An app that randomly suggest you movies."
        code="https://github.com/JustinHorn/flutter_projects/tree/master/MovieSuggestionApp"
      />
    </MediaQuery>
    <MediaQuery minWidth={1030}>
      <FlutterProject
        name="Remindely"
        imgFolder="android"
        img={["reminder.jpg"]}
        imgAlt={["Cards of some reminders."]}
        description="An app that allows you to schedule reminders."
        code="https://github.com/JustinHorn/FlutterChallenge/tree/master/1a%20ReminderApp"
      />
    </MediaQuery>
  </div>
);
