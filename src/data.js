import React from "react";

export default {
  header: {
    aboutMe: "",
  },
  webdev: {
    technologies,

    projects: [
      new Project(
        "Ultimate Tic Tac Toe",
        "https://justinhorn.github.io/ultimate-tic-tac-toe-react",
        "https://github.com/JustinHorn/ultimate-tic-tac-toe-react"
      ),
      new Project(
        "Joy of Code",
        "https://joyofcode.herokuapp.com/",
        "https://github.com/JustinHorn/joyofcode"
      ),
      new Project(
        "DayPlanner",
        "https://dayplanner.online/",
        "https://github.com/JustinHorn/DayPlanner"
      ),
    ],
    groupProjects: [
      new Project(
        "Cook Book",
        "https://justinhorn.github.io/group-one-cookbook/",
        "https://github.com/JustinHorn/group-one-cookbook"
      ),

      new Project(
        "Meme Creator",
        "https://meme-creator-seven.vercel.app/",
        "https://github.com/JustinHorn/memeCreator"
      ),
      new Project(
        "Rickys Quest",
        "https://rickysquest.netlify.app/",
        "https://github.com/Ey-Jay/rickysquest"
      ),
    ],
  },

  footer,
};

function Project(name, url, github) {
  this.name = name;
  this.url = url;
  this.github = github;
}

export const technologies = {
  icons: {
    favourite: ["MongoDB", "Express", "React", "NodeJs"],
    tools: ["Git", "Github", "VSCode"],
    experience: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Java",
      "Python",
      "Kotlin",
      "Android",
    ],
  },
};

export const footer = {
  icons: [
    new FooterIcon(
      "linkedin.png",
      "https://www.linkedin.com/in/justin-christian-horn/"
    ),
    new FooterIcon("github.png", "https://github.com/JustinHorn"),
    new FooterIcon("leetcode.png", "https://leetcode.com/justin_horn/"),
  ],
};

function FooterIcon(src, href) {
  this.src = "/img/icons/" + src;
  this.href = href;
}
