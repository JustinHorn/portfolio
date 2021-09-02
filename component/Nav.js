import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="socials">
        <a
          href={"https://github.com/JustinHorn"}
          title={"Github"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href={"https://www.linkedin.com/in/justin-christian-horn/"}
          title={"Linkedin"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href={"mailto:hello@justinhorn.io"}
          title={"Email"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
        <a
          href={"https://twitter.com/Horn00Justin"}
          title={"Twitter"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a
          href={"https://stackoverflow.com/users/12753573/justin?tab=profile"}
          title={"Stackoverflow"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
        </a>
      </div>
      <div className="navButtons">
        <button>document</button>
        <button>german/english</button>
      </div>
    </nav>
  );
};

export default Nav;