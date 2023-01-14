import { Blogr, Hoobank, Manage, TipCalculator } from '../assets/images';

export const navLinks: {
  title: string;
  id: string;
}[] = [
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Projects',
    id: 'projects',
  },
  {
    title: 'Connect',
    id: 'connect',
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
    stack: ['PostCSS', 'React', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/blogr-landing-page',
    live: 'https://rwxdan-blogr-lp.netlify.app/',
    image: Blogr,
  },
  {
    id: 'hoobank',
    name: 'Hoobank',
    info: "HooBank is a landing page whose gorgeous design was created by @adrianhajdin and completed by their community over at Figma. This build gave me a much-needed understanding of gradients and blur, and it's also one of my first projects using TailwindCSS.",
    stack: ['PostCSS', 'React', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/hoobank',
    live: 'https://hoobank-rwxdan.vercel.app/',
    image: Hoobank,
  },
  {
    id: 'manage',
    name: 'Manage Landing Page',
    info: "Manage is one of the most fun builds I've coded so far. This app has a relatively complex layout and its responsiveness was a real challenge to deal with. The assets were provided by FEM.",
    stack: ['PostCSS', 'React', 'Framer Motion', 'Vite'],
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
    stack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    code: 'https://github.com/rwxdan/advice-generator-app',
    live: 'https://rwxdan.github.io/advice-generator-app',
  },
  {
    id: 'pydownloader',
    name: 'YT PyDownloader',
    stack: ['Python'],
    code: 'https://github.com/rwxdan/yt-pydownloader',
  },
  {
    id: 'huddleExtended',
    name: 'Huddle Landing Page Extended',
    stack: ['HTML', 'SCSS'],
    code: 'https://github.com/rwxdan/huddle-landing-page-extended',
    live: 'https://rwxdan.github.io/huddle-landing-page-extended/',
  },
  {
    id: 'dragonRepeller',
    name: 'Dragon Repeller',
    stack: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/rwxdan/dragon-repeller-minigame',
    live: 'https://rwxdan.github.io/dragon-repeller-minigame',
  },
  {
    id: 'orderSummary',
    name: 'Order Summary Component',
    stack: ['HTML', 'SCSS'],
    code: 'https://github.com/rwxdan/order-summary-component',
    live: 'https://rwxdan.github.io/order-summary-component',
  },
  {
    id: 'newsHomepage',
    name: 'News Homepage',
    stack: ['React', 'SCSS', 'Vite'],
    code: 'https://github.com/rwxdan/news-homepage',
    live: 'https://news-homepage-nu-ashy.vercel.app/',
  },
];
