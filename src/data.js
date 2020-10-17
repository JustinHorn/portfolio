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
        "https://github.com/JustinHorn/ultimate-tic-tac-toe-react",
        "uTTT.png",
        ["reactjs"]
      ),
      new Project(
        "Joy of Code",
        "https://joyofcode.herokuapp.com/",
        "https://github.com/JustinHorn/joyofcode",
        "joyofcode.png",
        ["reactjs", "apollo", "graphql", "nodejs", "prisma", "sql"]
      ),
      new Project(
        "DayPlanner",
        "https://dayplanner.online/",
        "https://github.com/JustinHorn/DayPlanner",
        "dayplanner.png",
        ["python", "bootstrap", "nodejs", "mongodb"]
      ),
    ],
    groupProjects: [
      new Project(
        "Cook Book",
        "https://justinhorn.github.io/group-one-cookbook/",
        "https://github.com/JustinHorn/group-one-cookbook",
        "cookBook.png",
        ["html5", "css3", "javascript"]
      ),

      new Project(
        "memeGenerator",
        "https://meme-creator-seven.vercel.app/",
        "https://github.com/JustinHorn/memeCreator",
        "memeGenerator.png",
        ["css3", "reactjs", "firebase"]
      ),
      new Project(
        "Rickys Quest",
        "https://rickysquest.netlify.app/",
        "https://github.com/Ey-Jay/rickysquest",
        "rickandmorty.PNG",
        ["html5", "css3", "reactjs", "firebase"]
      ),
    ],
  },

  footer,
};

function Project(name, url, github, img, tech = []) {
  this.name = name;
  this.url = url;
  this.github = github;
  this.img = img;
  this.tech = tech;
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
