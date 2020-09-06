import React from "react";

export default {
  header: {
    aboutMe: (
      <>
        Hi! Problem solving is my passion and programming my tool. <br />
        Out of interest I have developed for Desktop, Mobile and lately the Web.
        Now I want to make it my profession and solve your problems!
      </>
    ),
  },
  webdev: {
    technologies,

    projects: [
      new Project(
        "Ultimate Tic Tac Toe",
        "https://justinhorn.github.io/ultimate-tic-tac-toe-react"
      ),
      new Project(
        "Cookie Clicker",
        "https://cookieclicker-justin.herokuapp.com/"
      ),
      new Project("We Were Here ", "https://dayplanner.online:3050/"),
    ],
    groupProjects: [
      new Project(
        "Cook Book",
        "https://justinhorn.github.io/group-one-cookbook/"
      ),

      new Project("Meme Creator", "https://meme-creator-seven.vercel.app/"),
      new Project(
        "Ancient Weapons",
        "https://ancient-weapons.vercel.app/sword/Swords"
      ),
    ],
  },

  footer,
};

function Project(name, url) {
  this.name = name;
  this.url = url;
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
      "https://www.linkedin.com/in/justin-horn-b9a18a1a3/"
    ),
    new FooterIcon("github.png", "https://github.com/JustinHorn"),
    new FooterIcon("leetcode.png", "https://leetcode.com/justin_horn/"),
  ],
};

function FooterIcon(src, href) {
  this.src = "/img/icons/" + src;
  this.href = href;
}
