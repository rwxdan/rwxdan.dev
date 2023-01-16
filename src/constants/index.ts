import { Blogr, Hoobank, Manage, TipCalculator } from '@static/images';

export const navLinks: {
  title: string;
  id: string;
}[] = [
  {
    title: 'Projects',
    id: 'projects',
  },
  {
    title: 'Connect',
    id: 'connect',
  },
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Resume',
    id: 'resume',
  },
];

export const Mail = 'rwxdan@gmail.com';
export const Gh = 'https://github.com/rwxdan';
export const In = 'https://www.linkedin.com/in/rwxdan/';

export const connectLinks: {
  id: string;
  link: string;
}[] = [
  {
    id: 'gmail',
    link: 'mailto:rwxdan@gmail.com',
  },
  {
    id: 'protonmail',
    link: 'mailto:rwxdan@proton.me',
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/rwxdan/',
  },
  {
    id: 'github',
    link: 'https://github.com/rwxdan',
  },
  {
    id: 'frontendmentor',
    link: 'https://www.frontendmentor.io/profile/rwxdan',
  },
  {
    id: 'discord',
    link: 'https://discordapp.com/users/rwxdan#1884',
  },
  {
    id: 'telegram',
    link: 'https://t.me/dan1elcastro',
  },
];

export const featured: {
  id: string;
  name: string;
  info?: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}[] = [
  {
    id: 'blogr',
    name: 'Blogr Landing Page',
    info: 'Concept landing page for Blogr, a fictional platform. This landing page in particular has something special to it, a nav-bar with triple dropdown menus and a multi-level footer. I had some fun with React hooks and the DRY principle while coding it!',
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/blogr-landing-page',
    live: 'https://rwxdan-blogr-lp.netlify.app/',
    image: Blogr,
  },
  {
    id: 'hoobank',
    name: 'Hoobank',
    info: "HooBank is a landing page whose gorgeous design was created by @adrianhajdin and completed by their community over at Figma. This build gave me a much-needed understanding of gradients and blur, and it's also one of my first projects using TailwindCSS.",
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/hoobank',
    live: 'https://hoobank-rwxdan.vercel.app/',
    image: Hoobank,
  },
  {
    id: 'manage',
    name: 'Manage Landing Page',
    info: "Manage is one of the most fun builds I've coded so far. This app has a relatively complex layout and its responsiveness was a real challenge to deal with. The assets were provided by FEM.",
    stack: ['PostCSS', 'ReactJS', 'Framer Motion', 'Vite'],
    code: 'https://github.com/rwxdan/manage-landing-page',
    live: 'https://manage-landing-page-rwxdan.vercel.app/',
    image: Manage,
  },
  {
    id: 'tip',
    name: 'Tip Calculator App',
    info: "Supose that you're on a restaurant with some friends and you want to calculate the amount of money by tip percentage that each one has to pay, plus the bill amount. Tip Calculator lets you easily do that!",
    stack: ['HTML', 'JavaScript', 'SCSS'],
    code: 'https://github.com/rwxdan/tip-calculator-app',
    live: 'https://rwxdan.github.io/tip-calculator-app',
    image: TipCalculator,
  },
  {
    id: 'adviceGenerator',
    name: 'Advice Generator App',
    info: 'The sole purpose of this app is to shake it! Oh, and to provide you with a random advice everytime you click the dice button. Check it out! 🔮',
    stack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    code: 'https://github.com/rwxdan/advice-generator-app',
    live: 'https://rwxdan.github.io/advice-generator-app',
  },
  {
    id: 'pydownloader',
    name: 'YT PyDownloader',
    info: 'GUI YT Downloader written in Python, this app lets you download videos (or their audio only) from youtube quickly and easy. Use with caution 🐍',
    stack: ['Python'],
    code: 'https://github.com/rwxdan/yt-pydownloader',
  },
  {
    id: 'huddleExtended',
    name: 'Huddle Landing Page Extended',
    info: 'Concept landing page for Huddle, a fictional platform, which has CSS grid action (and flexbox) throughout. Definitely a fun challenge to code 👨‍💻',
    stack: ['HTML', 'SCSS'],
    code: 'https://github.com/rwxdan/huddle-landing-page-extended',
    live: 'https://rwxdan.github.io/huddle-landing-page-extended/',
  },
  {
    id: 'dragonRepeller',
    name: 'Dragon Repeller',
    info: 'A fun and interactive game where you have to defeat a dragon that is preventing people from leaving the town! 👾',
    stack: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/rwxdan/dragon-repeller-minigame',
    live: 'https://rwxdan.github.io/dragon-repeller-minigame',
  },
  {
    id: 'orderSummary',
    name: 'Order Summary Component',
    info: "Concept for a central component with a really nice design all across the page, it's responsive and reusable! 🧩",
    stack: ['HTML', 'SCSS'],
    code: 'https://github.com/rwxdan/order-summary-component',
    live: 'https://rwxdan.github.io/order-summary-component',
  },
  {
    id: 'newsHomepage',
    name: 'News Homepage',
    info: 'Concept landing page which has a lot of grid action throughout, it has a fully responsive and dynamic layout! 📰',
    stack: ['ReactJS', 'SCSS', 'Vite'],
    code: 'https://github.com/rwxdan/news-homepage',
    live: 'https://news-homepage-nu-ashy.vercel.app/',
  },
];
