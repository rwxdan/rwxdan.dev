import {
  Discord,
  Telegram,
  Protonmail,
  Linkedin,
  GitHub,
  Gmail,
  FrontendMentor,
} from '../../assets/icons';

export const navLinks: {
  title: string;
  id: string;
}[] = [
  {
    title: 'WhoAmI',
    id: 'whoami',
  },
  {
    title: 'Projects',
    id: 'projects',
  },
  {
    title: 'Contact',
    id: 'contact',
  },
  {
    title: 'Resume',
    id: 'resume',
  },
];

export const Mail = 'rwxdan@gmail.com';
export const Gh = 'https://github.com/rwxdan';
export const In = 'https://www.linkedin.com/in/rwxdan/';

export const ContactLinks: {
  id: string;
  link: string;
  icon: string;
}[] = [
  {
    id: 'gmail',
    link: 'mailto:rwxdan@gmail.com',
    icon: Gmail,
  },
  {
    id: 'protonmail',
    link: 'mailto:rwxdan@proton.me',
    icon: Protonmail,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/rwxdan/',
    icon: Linkedin,
  },
  {
    id: 'github',
    link: 'https://github.com/rwxdan',
    icon: GitHub,
  },
  {
    id: 'frontendmentor',
    link: 'https://www.frontendmentor.io/profile/rwxdan',
    icon: FrontendMentor,
  },
  {
    id: 'discord',
    link: 'https://discordapp.com/users/rwxdan#1884',
    icon: Discord,
  },
  {
    id: 'telegram',
    link: 'https://t.me/dan1elcastro',
    icon: Telegram,
  },
];
