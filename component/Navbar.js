import React from "react";
import Links from "component/Links";
import { footer, navbar } from "data";
import LinkIcon from "component/Icon/LinkIcon";

const NavBar = () => {
  const { icons } = footer;

  return (
    <div className="medium">
      <nav className="mainNav space-between">
        <div className="links">
          <Links {...navbar} />
        </div>

        <div className="social">
          {icons.map((icon, index) => (
            <LinkIcon key={index} {...icon} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
