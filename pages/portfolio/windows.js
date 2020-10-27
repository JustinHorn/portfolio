import React from "react";
import data from "data";
import Group from "component/Group";

const Windows = () => {
  const { windows } = data;

  return (
    <div className={"flex-center"}>
      <Group headline={""} projects={windows} />
    </div>
  );
};

export default Windows;
