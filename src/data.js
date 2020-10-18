import React from "react";

export default {
  header: {
    aboutMe: "",
  },
  webdev: {
    technologies,

    projects: [
      new WebProject(
        "Ultimate Tic Tac Toe",
        "https://justinhorn.github.io/ultimate-tic-tac-toe-react",
        "https://github.com/JustinHorn/ultimate-tic-tac-toe-react",
        "uTTT.png",
        "May 2020",
        ["reactjs"]
      ),
      new WebProject(
        "Joy of Code",
        "https://joyofcode.herokuapp.com/",
        "https://github.com/JustinHorn/joyofcode",
        "joyofcode.png",
        "October 2020",
        ["reactjs", "apollo", "graphql", "nodejs", "prisma", "sql"]
      ),
      new WebProject(
        "DayPlanner",
        "https://dayplanner.online/",
        "https://github.com/JustinHorn/DayPlanner",
        "dayplanner.png",
        "March 2020",

        ["python", "bootstrap", "nodejs", "mongodb"]
      ),
    ],
    groupProjects: [
      new WebProject(
        "Cook Book",
        "https://justinhorn.github.io/group-one-cookbook/",
        "https://github.com/JustinHorn/group-one-cookbook",
        "cookBook.png",
        "June 2020",

        ["html5", "css3", "javascript"]
      ),

      new WebProject(
        "Meme Generator",
        "https://meme-creator-seven.vercel.app/",
        "https://github.com/JustinHorn/memeCreator",
        "memeGenerator.png",
        "August 2020",

        ["css3", "reactjs", "firebase"]
      ),
      new WebProject(
        "Rickys Quest",
        "https://rickysquest.netlify.app/",
        "https://github.com/Ey-Jay/rickysquest",
        "rickandmorty.png",
        "September 2020",

        ["html5", "css3", "reactjs", "firebase"]
      ),
    ],
  },
  android: [
    new AnroidProject(
      "Jugger Tetris",
      false,
      "https://github.com/JustinHorn/JuggerTetris",
      "juggertetris.jpeg",
      "April 2020",

      ["kotlin"],
      "Tetris App with block Icons of Jugger Teams."
    ),
    new AnroidProject(
      "Time Logger",
      false,
      "https://github.com/JustinHorn/TimeLogger",
      "timelogger.jpeg",
      "April 2020",

      ["kotlin"],
      "A time tracking app for Android and Wear OS using speech recognition."
    ),
  ],

  footer,
};

function Project(
  name,
  url,
  github,
  img,
  date = "",
  tech = [],
  description = ""
) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.date = date;
  this.tech = tech;
  this.description = description;
}

function WebProject(
  name,
  url,
  github,
  img,
  date = "",
  tech = [],
  description = ""
) {
  Project.call(this, name, url, github, "web/" + img, date, tech, description);
}

function AnroidProject(
  name,
  url,
  github,
  img,
  date = "",
  tech = [],
  description = ""
) {
  Project.call(
    this,
    name,
    url,
    github,
    "android/" + img,
    date,
    tech,
    description
  );
}

function WindowsProject(
  name,
  url,
  github,
  img,
  date = "",
  tech = [],
  description = ""
) {
  Project.call(
    this,
    name,
    url,
    github,
    "windows/" + img,
    date,
    tech,
    description
  );
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
