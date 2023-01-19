import { Hoobank, Manage, TipCalculator, EvoGym } from '@static/images';

const featured: {
  id: string;
  name: string;
  info?: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}[] = [
  {
    id: 'evogym',
    name: 'Evolutionary Fitness',
    info: "A prototype landing page for a prototype bussiness called EvoGym. It's fully responsive, dynamic and very lightweight.",
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS', 'TypeScript', 'Vite'],
    code: 'https://github.com/rwxdan/evo-fit-landing-page',
    live: 'https://evo-fit-landing-page.vercel.app/',
    image: EvoGym,
  },
  {
    id: 'hoobank',
    name: 'Hoobank',
    info: "Prototype landing page for HooBank, a GPT-3 futuristic platform. It's Mobile-friendly with beautiful colors and a very well-constructed layout.",
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/hoobank',
    live: 'https://hoobank-rwxdan.vercel.app/',
    image: Hoobank,
  },
  {
    id: 'manage',
    name: 'Manage Landing Page',
    info: "Manage's prototype landing page. Completly responsive as well, it has a carefully-designed layout with some catchy details to stand out.",
    stack: ['PostCSS', 'ReactJS', 'Framer Motion', 'Vite'],
    code: 'https://github.com/rwxdan/manage-landing-page',
    live: 'https://manage-landing-page-rwxdan.vercel.app/',
    image: Manage,
  },
  {
    id: 'tip',
    name: 'Tip Calculator App',
    info: "A very handy app for whenever you need to get your tips right. Whether in company or alone, the app is going to get you the right amounts.",
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
    id: 'blogr',
    name: 'Blogr Landing Page',
    info: "Concept landing page for Blogr, a prototype platform. It's fully responsive, dynamic, well-designed and very 'flexy'. 📜  ",
    stack: ['ReactJS', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/blogr-landing-page',
    live: 'https://rwxdan-blogr-lp.netlify.app/',
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

export { featured };
