import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="navButtons">
        <button
          title="Download Resume"
          onClick={() => window.open("/ResumeJustinHorn.pdf")}
        >
          <FontAwesomeIcon icon={"file-alt"} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
