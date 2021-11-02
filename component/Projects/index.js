import { mergeClassNames } from "helper";
import { useTranslations } from "next-intl";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Section from "../Section";
import { FlutterProject } from "./FlutterProject";
import { JoyOfCode } from "./JoyOfCode";
import { ReactProject } from "./ReactProject";

const Projects = (props) => {
  const { showMonitor, setShowMonitor } = props;
  const [hideVerticalBorder, setHideVerticalBorder] = useState(false);
  const [hideHorizontalBorder, setHideHorizontalBorder] = useState(false);

  const t = useTranslations();

  const bodyRef = useRef();
  const monitorRef = useRef();

  useLayoutEffect(() => {
    if (!bodyRef.current) bodyRef.current = document.querySelector("body");
    if (showMonitor === "nothing") {
      bodyRef.current.style = "";
      return;
    } else {
      bodyRef.current.style = "overflow:hidden;";
    }

    const monitorHeight = monitorRef.current.offsetHeight;
    const monitorWidth = monitorRef.current.offsetWidth;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    setHideVerticalBorder(monitorHeight >= viewportHeight);
    setHideHorizontalBorder(monitorWidth >= viewportWidth);
  }, [showMonitor]);

  return (
    <>
      <Section id="projects" className="projects">
        <h2>{t("Projects.Headline")}</h2>

        <div className="cards">
          <div className="tile" onClick={() => setShowMonitor("React")}>
            <img src="img/icons/ReactJS.svg" alt="ReactJS" />
            <h4>ReactJS</h4>
          </div>
          <div className="tile" onClick={() => setShowMonitor("Joy of Code")}>
            <img src="/code.svg" alt="Joy of Code" />
            <h4>Joy of Code</h4>
          </div>

          <div className="tile" onClick={() => setShowMonitor("Flutter")}>
            <img src="img/icons/Flutter.svg" alt="Flutter" />
            <h4>Flutter</h4>
          </div>
        </div>
      </Section>
      {showMonitor !== "nothing" && (
        <div className="monitor-overlay">
          <div
            className="background"
            onClick={() => setShowMonitor("nothing")}
          ></div>
          <div
            className={mergeClassNames(
              "monitor",
              hideVerticalBorder && "hideVerticalBorder",
              hideHorizontalBorder && "hideHorizontalBorder"
            )}
            ref={monitorRef}
          >
            <div className="monitor-nav">
              <h2 className="headline">{showMonitor}</h2>

              <div className="close-container">
                <img
                  className="close"
                  src="img/icons/X.svg"
                  alt="Close"
                  onClick={() => setShowMonitor("nothing")}
                />
              </div>
            </div>

            <div className="monitor-body">
              {showMonitor === "React" && <ReactBody />}
              {showMonitor === "Joy of Code" && <JoyOfCode />}

              {showMonitor === "Flutter" && <FlutterBody />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

const ReactBody = () => {
  const t = useTranslations();

  return (
    <div className="react">
      <ReactProject
        name="Meme Generator"
        imgFolder="MemeGenerator"
        img={[
          "cropped_Generator.png",
          "cropped_Home.png",
          "cropped_Freestyle.png",
        ]}
        imgAlt={[
          "showing the top/bottom generator with skeptical kid meme saying 'so you have build another generator?'",
          "showing the home screen",
          "Showing freestyle editor where you can place the text everywhere",
        ]}
        tags={["CSS", "React", "Firebase Auth"]}
        description={t("Projects.React.MemeGenerator.description")}
        website="https://justinhorn.name/ultimate-tic-tac-toe-react/"
        code="https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
      />
      <ReactProject
        name="Ultimate Tic Tac Toe"
        imgFolder="UltimateTicTacToe"
        img={[
          "cropped_AIvsRandom.png",
          "cropped_RandomVsRandom.png",
          "cropped_HvsH.png",
        ]}
        imgAlt={[
          "the result of gamemode: AI vs Random - AI won",
          "the result of gamemode: randomAI vs randomAI - O won",
          "an empty board and gamemode: Humans vs Humans",
        ]}
        tags={["CSS", "React", "Webworker"]}
        description={t("Projects.React.UltimateTicTacToe.description")}
        website="https://justinhorn.name/ultimate-tic-tac-toe-react/"
        code="https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
      />
      <ReactProject
        name="Rickys Quest"
        imgFolder="RickysQuest"
        img={[
          "cropped_QuizQuestion.png",
          "cropped_Quizzes.png",
          "cropped_Follower.png",
        ]}
        imgAlt={[
          "An example Quiz",
          "List of Quizzes",
          "Profile showing the characters",
        ]}
        tags={["CSS", "React", "Firebase", "Styled-Components"]}
        description={t("Projects.React.RickysQuest.description")}
        website="https://rickysquest.netlify.app/"
        code="https://github.com/JustinHorn/rickysquest"
      />
    </div>
  );
};

const FlutterBody = () => {
  const t = useTranslations();

  return (
    <div className="flutter">
      <FlutterProject
        name="2048 Chess"
        imgFolder="android"
        img={["cropped_2048chess.jpg"]}
        imgAlt={["2048 with chess figures"]}
        description={t("Projects.Flutter.Chess2048.description")}
        code="https://github.com/JustinHorn/flutter_projects/tree/master/flutter_2048"
      />
      <FlutterProject
        name="Movie-Suggester"
        imgFolder="android"
        img={["cropped_movie_suggester.jpg"]}
        imgAlt={["A suggested movie"]}
        description={t("Projects.Flutter.MovieSuggester.description")}
        code="https://github.com/JustinHorn/flutter_projects/tree/master/MovieSuggestionApp"
      />
      <FlutterProject
        name="Remindely"
        imgFolder="android"
        img={["cropped_reminder.jpg"]}
        imgAlt={["Cards of some reminders."]}
        description={t("Projects.Flutter.Remindely.description")}
        code="https://github.com/JustinHorn/FlutterChallenge/tree/master/1a%20ReminderApp"
      />
    </div>
  );
};
