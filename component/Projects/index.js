import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Section from "../Section";
import { FlutterProject } from "./FlutterProject";
import { JoyOfCode } from "./JoyOfCode";
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
    <>
      <Section id="projects" className="projects">
        <h2>Some Projects I created:</h2>

        <div className="cards">
          <div className="tile" onClick={() => setShow("React")}>
            <img src="img/icons/ReactJS.svg" alt="ReactJS" />
            <h4>ReactJS</h4>
          </div>
          <div className="tile" onClick={() => setShow("Joy of Code")}>
            <img src="/code.svg" alt="Joy of Code" />
            <h4>Joy of Code</h4>
          </div>

          <div className="tile" onClick={() => setShow("Flutter")}>
            <img src="img/icons/Flutter.svg" alt="Flutter" />
            <h4>Flutter</h4>
          </div>
        </div>
      </Section>
      {show !== "nothing" && (
        <>
          <div className="monitor-overlay">
            <div
              className="background"
              onClick={() => setShow("nothing")}
            ></div>
            <div className="monitor">
              <div className="monitor-nav">
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
                {show === "Joy of Code" && <JoyOfCode />}

                {show === "Flutter" && <FlutterBody />}
              </div>
            </div>
          </div>
        </>
      )}
    </>
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
      description={`At the WBS Coding school we were told to build a meme generator to improve our react skills. 
      So Bruno and me grouped up and developed the shown web-app together. At first we focused on creating the top/bottom editor. 
      When that one was soon to be finished I moved to create a freestyle version as well, while Bruno continued to improve the overall design. 
      As a caveat I added a firebase authentication requirement for the freestyle version.`}
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
      description={`Actually one of my first react projects. The web-app version my Java ultimate Tic Tac Toe project.
      I forked a git repo to have some code basics and added a random and a Monte Carlo AI. 
      In order to not have the web-app freeze when the AI calculates its moves - I had to implement web-worker as well.`}
      website="https://justinhorn.name/ultimate-tic-tac-toe-react/"
      code="https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
    />
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
      description={`At the WBS Coding School, Joss, Erick and me belonged to the top 3 of students of our batch, so we were giving the special task of building an app outside of the regular activity.
      Since we all love Rick and Morty we went on to build sth. with their official Api. The result was a Quiz-Game were you solve quizzes to collect Characters from the Rick and Morty multiverses.
      `}
      website="https://rickysquest.netlify.app/"
      code="https://github.com/JustinHorn/rickysquest"
    />
  </div>
);

const FlutterBody = () => (
  <div className="flutter">
    <FlutterProject
      name="Chess 2048"
      imgFolder="android"
      img={["2048chess.jpg"]}
      imgAlt={["2048 with chess figures"]}
      description="A version of 2048 with chess figures as game pieces. Through this project I learned to make simple animations with Flutter. "
      code="https://github.com/JustinHorn/flutter_projects/tree/master/flutter_2048"
    />
    <FlutterProject
      name="Movie-Suggester"
      imgFolder="android"
      img={["movie_suggester.jpg"]}
      imgAlt={["A suggested movie"]}
      description="An app that randomly suggest you movies. I scraped a list of recommended films from the internet."
      code="https://github.com/JustinHorn/flutter_projects/tree/master/MovieSuggestionApp"
    />
    <FlutterProject
      name="Remindely"
      imgFolder="android"
      img={["reminder.jpg"]}
      imgAlt={["Cards of some reminders."]}
      description="An app that allows you to schedule reminders. My first Flutter App, that I created for the application process of Epap GmbH."
      code="https://github.com/JustinHorn/FlutterChallenge/tree/master/1a%20ReminderApp"
    />
  </div>
);
