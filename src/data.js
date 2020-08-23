export default {
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
      new Project("We were here ", "https://dayplanner.online:3050/"),
    ],
    groupProjects: [
      new Project(
        "Cook Book",
        "https://justinhorn.github.io/group-one-cookbook/"
      ),

      new Project("Todo List", "https://justinhorn.github.io/todo/"),
      new Project("Ancient Weapons", " http://justinhorn.name/AncientWeapons/"),
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
      "html5",
      "css3",
      "javascript",
      "java",
      "python",
      "kotlin",
      "android",
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
  ],
};

function FooterIcon(src, href) {
  this.src = "/img/icons/" + src;
  this.href = href;
}
