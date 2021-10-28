import Section from "../Section";

const Employment = () => {
  return (
    <Section className="employment">
      <h2>My work experience:</h2>
      <div className="employer">
        <img
          src="img/company/Cadenas.png"
          alt="Cadenas GmbH logo"
          className="logo"
        />
        <div className="description">
          <h3>Frontend Developer</h3>
          <h4>CADENAS GmbH, Augsburg</h4>
          <span>01 June 2021 - today</span>
          <p>
            As Frontend Developer I work on their 3DfindIT web app adding
            features, fixing bugs, and maintaining a clean codebase. I have
            introduced several coding guidelines to our team and am regarded as
            Expert in React.
          </p>
        </div>
      </div>
      <div className="employer">
        <img src="img/company/epap.png" alt="epap GmbH logo" className="logo" />
        <div className="description">
          <h3>Full Stack Development Internship</h3>
          <h4>Epap GmbH, Hannover / Remote</h4>
          <span>19 Januar - 31. March 2021</span>
          <p>
            As Full Stack Developer I have worked on epaps front- and backend,
            adding features, fixing bugs, and creating internal tools for the
            employees to use. I am proud of my contribution to giving the
            startup more structure in its work process by introducing scrum
            methodologies to the team.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Employment;
