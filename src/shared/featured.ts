import { Manage, TipCalculator, EvoGym, darFi } from '@static/images';

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
    id: 'darfi',
    name: 'Dar-fi Blog',
    info: "Personal web page and blog site for Darwin Castro. Built with Astro, it's fast, responsive, a11y friendly and even supports dark mode.",
    stack: ['Astro', 'TailwindCSS', 'TypeScript', 'PostCSS'],
    code: 'https://github.com/darwincastro/dar-fi.com',
    live: 'https://dar-fi.com/',
    image: darFi,
  },
  {
    id: 'evogym',
    name: 'Evolutionary Fitness',
    info: "A prototype landing page for a prototype bussiness called EvoGym. It's fully responsive, dynamic and very lightweight.",
    stack: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Vite'],
    code: 'https://github.com/rwxdan/evo-fit-landing-page',
    live: 'https://evo-fit-landing-page.vercel.app/',
    image: EvoGym,
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
    info: 'A very handy app for whenever you need to get your tips right. Whether in company or alone, the app is going to get you the right amounts.',
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
    id: 'hoobank',
    name: 'Hoobank',
    info: 'Prototype landing page for HooBank, a GPT-3 futuristic platform. Mobile-friendly, has beautiful colors and a very well-constructed layout 🦾',
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS'],
    code: 'https://github.com/rwxdan/hoobank',
    live: 'https://hoobank-rwxdan.vercel.app/',
  },
];
