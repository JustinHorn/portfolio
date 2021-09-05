import { useEffect, useState } from "react";

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
      <h2>Some Projects I made with</h2>

      <div className="cards">
        <div className="tile" onClick={() => setShow("JoyOfCode")}>
          <img src="img/icons/JoyOfCode.svg" alt="Code" />
          <h4>Joy Of Code</h4>
        </div>
        <div className="tile" onClick={() => setShow("React")}>
          <img src="img/icons/ReactJS.svg" alt="ReactJS" />
          <h4>ReactJS</h4>
        </div>
        <div className="tile">
          <img src="img/icons/NodeJS.svg" alt="NodeJS" />
          <h4>NodeJS</h4>
        </div>
        <div className="tile">
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
                <img
                  className="close"
                  src="img/icons/X.svg"
                  alt="Close"
                  onClick={() => setShow("nothing")}
                />
              </div>

              {show === "React" && (
                <div className="monitor-body react">
                  <h3 className="headline">React</h3>
                  <div className="projectA">
                    <h4>Meme Generator</h4>
                    <div className="fotos">
                      <img
                        src="img/projects/MemeGenerator/Generator.png"
                        alt="showing freestyle"
                        className="one"
                      />
                      <img
                        src="img/projects/MemeGenerator/Home.png"
                        alt="showing freestyle"
                        className="two"
                      />
                      <img
                        src="img/projects/MemeGenerator/Freestyle.png"
                        alt="showing freestyle"
                        className="there"
                      />
                    </div>
                    <p>
                      A meme generator created with a college from WBS. It has
                      top/bottom-text and a freestyle version. In the freestyle
                      version you use CSS attributes to modify to place the text
                      anywhere.
                    </p>
                    <div className="tools">
                      <div>CSS</div>
                      <div>React</div>
                      <div>Firebase</div>
                    </div>
                    <div className="links">
                      <a href="https://meme-creator-seven.vercel.app/">
                        Website
                      </a>
                      <a href="https://github.com/JustinHorn/memeCreator">
                        Code
                      </a>
                    </div>
                  </div>
                  <div className="projectB">
                    <h4>Ultimate Tic Tac Toe</h4>
                    <div className="fotos">
                      <img
                        src="img/projects/UltimateTicTacToe/AIvsRandom.png"
                        alt="showing freestyle"
                        className="one"
                      />
                      <img
                        src="img/projects/UltimateTicTacToe/RandomVsRandom.png"
                        alt="showing freestyle"
                        className="two"
                      />
                      <img
                        src="img/projects/UltimateTicTacToe/HvsH.png"
                        alt="showing freestyle"
                        className="three"
                      />
                    </div>
                    <p>
                      A meme generator created with a college from WBS. It has
                      top/bottom-text and a freestyle version. In the freestyle
                      version you use CSS attributes to modify to place the text
                      anywhere.
                    </p>
                    <div className="tools">
                      <div>CSS</div>
                      <div>React</div>
                    </div>
                    <div className="links">
                      <a href="https://justinhorn.name/ultimate-tic-tac-toe-react/">
                        Website
                      </a>
                      <a href="https://github.com/JustinHorn/ultimate-tic-tac-toe-react">
                        Code
                      </a>
                    </div>
                  </div>

                  <div className="projectC"></div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
