export default {
  portfolio: {
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

      new Project(
        "Meme Generator",
        "https://justinhorn.github.io/memeCreator/"
      ),
    ],
  },
  technologies,
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
