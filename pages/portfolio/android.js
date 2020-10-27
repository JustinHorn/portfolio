import React from "react";
import data from "data";
import Group from "component/Group";
const Android = () => {
  const { android } = data;

  return (
    <div className={"flex-center"}>
      <Group headline={""} projects={android} />
    </div>
  );
};

export default Android;
