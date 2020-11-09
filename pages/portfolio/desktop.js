import React from "react";
import data from "data";
import Group from "component/Group";

const Windows = () => {
  const { desktop } = data;

  return (
    <div className={"flex-center"}>
      <Group headline={""} projects={desktop} />
    </div>
  );
};

export default Windows;
