import React from "react";

const LinkIcon = ({ src, href = "", className, title }) => {
  return (
    <a href={href} title={title} className="rotate">
      <div
        className={" icon " + className}
        style={{ backgroundImage: "url(" + src + ")" }}
      ></div>
    </a>
  );
};

export default LinkIcon;
