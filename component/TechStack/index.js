import React from "react";

import Tag from "component/Tags/Tech";

import iconList from "data/icons";

const TechStack = ({ icons = [] }) => {
  if (!icons.length) {
    icons = ["nothing"];
  }

  icons = icons.map((name) => iconList.find((i) => i.name === name));

  return (
    <ul className="flex-center" style={{ paddingLeft: "0px" }}>
      {icons
        .map((icon) => ({ iconVal: icon }))
        .map((icon, index) => (
          <Tag key={index} {...icon}></Tag>
        ))}
    </ul>
  );
};

export default TechStack;
