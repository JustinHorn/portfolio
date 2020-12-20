import React from 'react';

function FooterIcon(src, href) {
  this.src = '/img/icons/' + src;
  this.href = href;
}

export const footer = {
  icons: [
    new FooterIcon(
      'stackoverflow.png',
      'https://stackoverflow.com/users/12753573/justin?tab=profile'
    ),
    new FooterIcon(
      'linkedin.png',
      'https://www.linkedin.com/in/justin-christian-horn/'
    ),
    new FooterIcon('github.png', 'https://github.com/JustinHorn'),
    new FooterIcon('email.jpg', 'mailto:hello@justinhorn.tech'),
  ],
};

export const technologies = {
  icons: {
    favourite: ['MongoDB', 'Express', 'React', 'NodeJs'],
    tools: ['Git', 'Github', 'VSCode'],
    experience: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Java',
      'Python',
      'Kotlin',
      'Android',
    ],
  },
};

export default {
  header: {
    aboutMe: (
      <div>
        I am Justin, 20yo developer from Brunswick. <br /> <br /> My passions
        are learning, building connections and giving back. Since there is no
        such thing as a single true vocation, only discipline, dedication and
        smart work can get you forward.
        <br /> <br /> In my free time I play Jugger, game sth. or hang out with
        friends.
      </div>
    ),
  },
  webdev: {
    technologies,

    projects: [
      new WebProject(
        'Joy of Code',
        'https://joyofcode.herokuapp.com/',
        'https://github.com/JustinHorn/joyofcode',
        'joyofcode.png',
        'October 2020',
        ['reactjs', 'apollo', 'graphql', 'nodejs', 'prisma', 'sql'],
        'A platform to share coding projects.'
      ),
      new WebProject(
        'Ultimate Tic Tac Toe',
        'https://justinhorn.github.io/ultimate-tic-tac-toe-react',
        'https://github.com/JustinHorn/ultimate-tic-tac-toe-react',
        'uTTT.png',
        'May 2020',
        ['reactjs', 'material-ui'],
        'A game with classical AIs.'
      ),

      new WebProject(
        'Rickys Quest',
        'https://rickysquest.netlify.app/',
        'https://github.com/Ey-Jay/rickysquest',
        'rickandmorty.png',
        'September 2020',

        ['html5', 'css3', 'reactjs', 'firebase'],
        'A quiz game were you unlock characters.'
      ),
      new WebProject(
        'Weather',
        'https://weather-justin.vercel.app/',
        'https://github.com/JustinHorn/weatherapp/',
        'weather.png',
        'November 2020',

        ['nextjs'],
        'A Next.js jamstack app that asks for your location and then tells you the weather.'
      ),

      new WebProject(
        'Meme Generator',
        'https://meme-creator-seven.vercel.app/',
        'https://github.com/JustinHorn/memeCreator',
        'memeGenerator.png',
        'August 2020',

        ['css3', 'reactjs', 'firebase'],
        'A Meme Generator with firebase authentication.'
      ),

      new WebProject(
        'Cook Book',
        'https://justinhorn.github.io/group-one-cookbook/',
        'https://github.com/JustinHorn/group-one-cookbook',
        'cookBook.png',
        'June 2020',

        ['html5', 'css3', 'javascript'],
        'A vanilla JavaScript, HTML5 && CSS3 cookbook.'
      ),
      new WebProject(
        'DayPlanner Website',
        'https://dayplanner.online/',
        'https://github.com/JustinHorn/DayPlanner',
        'dayplanner.png',
        'March 2020',

        ['bootstrap', 'nodejs', 'mongodb'],
        "A website to distribute my 'DayPlanner.exe'"
      ),
      new WebProject(
        'Cookie Clicker',
        'https://cookieclicker-justin.herokuapp.com/',
        'https://github.com/JustinHorn/CookieClicker',
        'cookieClicker.png',
        'July 2020',

        ['html5', 'reactjs', 'nodejs', 'mongodb'],
        'A cookie clicker developed with the TDD paradigm.'
      ),
    ],
  },
  android: [
    new AndroidProject(
      'Movie Suggester',
      false,
      'https://github.com/JustinHorn/MovieSuggestionApp',
      'movie_suggester.jpg',
      'December 2020',

      ['flutter'],
      'Randomly suggests you movies from a sample.'
    ),
    new AndroidProject(
      'Reminder',
      false,
      'https://github.com/JustinHorn/FlutterChallenge/tree/master/1a%20ReminderApp',
      'reminder.jpg',
      'December 2020',

      ['flutter'],
      'A reminder app that lets you schedule notifications periodically.'
    ),
    new AndroidProject(
      'Jugger Tetris',
      false,
      'https://github.com/JustinHorn/JuggerTetris',
      'juggertetris.jpeg',
      'April 2020',

      ['kotlin'],
      'Tetris App with block Icons of Jugger Teams.'
    ),
    new AndroidProject(
      'Time Logger',
      false,
      'https://github.com/JustinHorn/TimeLogger',
      'timelogger.jpeg',
      'April 2020',

      ['kotlin'],
      'A time tracking app for Android and Wear OS using speech recognition.'
    ),
  ],

  desktop: [
    new DesktopProject(
      'Neural Network for Tic Tac Toe',
      false,
      'https://github.com/JustinHorn/TicTacToe',
      'tictactoe.png',
      'June 2019',

      ['java'],
      'Tic Tac Toe with several AI opponents. A bruteforce and some Feedforward neural network Algorithms.'
    ),
    new DesktopProject(
      'Ultimate Tic Tact Toe',
      false,
      'https://github.com/JustinHorn/MonteCarloUltimateTicTacToe',
      'uTTT.png',
      'July 2019',

      ['java'],
      'Ultimate Tic Tac Toe with a Monte Carlo Algorithm.'
    ),
    new DesktopProject(
      'Dayplanner Program',
      'http://justinhorn.github.io/DayPlanner',

      'https://github.com/JustinHorn/DayPlanner',
      'dayplanner.png',
      'January 2020',

      ['python'],
      "A Texteditor style 'DayPlanner' utelizing patterns to save and reuse daily routines. Get it's .exe over the github readme."
    ),
  ],

  footer,
};

function Project(
  name,
  url,
  github,
  img,
  date = '',
  tech = [],
  description = ''
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
  date = '',
  tech = [],
  description = ''
) {
  Project.call(this, name, url, github, 'web/' + img, date, tech, description);
  this.type = 'web';
}

function AndroidProject(
  name,
  url,
  github,
  img,
  date = '',
  tech = [],
  description = ''
) {
  Project.call(
    this,
    name,
    url,
    github,
    'android/' + img,
    date,
    tech,
    description
  );
  this.type = 'android';
}

function DesktopProject(
  name,
  url,
  github,
  img,
  date = '',
  tech = [],
  description = ''
) {
  Project.call(
    this,
    name,
    url,
    github,
    'desktop/' + img,
    date,
    tech,
    description
  );
  this.type = 'desktop';
}

export const navbarData = {
  prefix: '',
  links: ['/welcome', '/portfolio', '/tech'],
};
export const portfolioNavbarData = {
  prefix: '/portfolio',
  links: ['/web', '/android', '/desktop'],
};

export const timeline = [
  {
    heading: 'Full Stack Developer Training',
    date: 'November 2020',
    p:
      'I practiced 15 weeks at WBS Coding School with 12 other colleges by building projects.',
    tech: [
      'java',
      'python',
      'nodejs',
      'kotlin',
      'reactjs',
      'sql',
      'mongodb',
      'apollo',
      'graphql',
      'prisma',
      'css3',
    ],
  },
  {
    heading: 'Indie Hacker',
    date: 'Juni 2020',
    p: 'I build software products and tried to sell them.',
    tech: ['java', 'python', 'nodejs', 'kotlin', 'bootstrap'],
  },
  {
    heading: 'Times of Orientation',
    date: 'January 2020',
    p:
      'Well I started studying IT even doe I knew I would dislike it. Swapped to more coding, swapped back to more studying and finally decided that since I want to be an entrepreneur - I might also just go without a degree ',
    tech: ['java'],
  },

  {
    heading: 'Abitur',
    date: ' May 2018',
    p: 'I had IT as an exam course with an A-',
    tech: ['java'],
  },
];
