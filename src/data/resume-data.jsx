import { Dribbble, Github, Linkedin } from 'lucide-react';
import { XIcon } from '../components/resume/icons/xIcon';

export const RESUME_DATA = {
  name: 'Nurul Insani Dewi',
  about: 'Enthusiastic Frontend Developer and UI crafter, with a strong affinity for CSS and Tailwind CSS.',
  location: {
    state: 'Indonesia',
    link: 'https://www.google.com/maps/place/Indonesia/',
  },
  contact: {
    email: 'call.nurulid@gmail.com',
    social: [
      {
        name: 'GitHub',
        link: 'https://github.com/nurulid',
        icon: Github,
      },
      {
        name: 'LinkedIn',
        link: 'https://id.linkedin.com/in/nurul-insani-dewi',
        icon: Linkedin,
      },
      {
        name: 'Dribbble',
        link: 'http://dribbble.com/nurulid',
        icon: Dribbble,
      },
      {
        name: 'X',
        link: 'http://x.com/nurulide',
        icon: XIcon,
      },
    ],
  },
  summary:
    "I'm an experienced Frontend Developer, especially in crafting User Interface (UI). During my experience, I learn and practice how to build beautiful and functional products.",
  work: [
    {
      role: 'Frontend Developer',
      company: 'PeepSo',
      link: 'https://peepso.com',
      start: '2020',
      end: '2023',
      location: 'Remote',
      status: 'Full Time',
      description: "Crafting and refining the user interface of WordPress products, encompassing tasks like designing new features, addressing client issues, and optimizing existing UI elements. It also involves creating landing pages, banners, and email templates using HTML, CSS, and SCSS, with a primary focus on UI design and enhancement.",
    },
    {
      role: 'Frontend Developer',
      company: 'Altrovis',
      link: 'https://www.altrovis.com',
      start: '2018',
      end: '2020',
      location: 'Jakarta, Indonesia',
      status: 'Full Time',
      description: "Converting web mockups from Adobe XD into HTML using CSS, Bootstrap, and jQuery, while also constructing websites for both private and government entities. Additionally, it involves implementing Vue.js with Nuxt.js and Vuetify to integrate material design components into a product.",
    },
    {
      role: 'Frontend Developer',
      company: 'Kofera Technology',
      link: '',
      start: '2018',
      end: '2018',
      location: 'Jakarta, Indonesia',
      status: 'Full Time',
      description: "Debugging and resolving issues, converting new page designs into HTML for both web and mobile views using the Bulma CSS framework, and collaborating closely with the product team.",
    },
  ],
  education: {
    school: "Universitas Putra Indonesia 'YPTK' Padang",
    degree: "Bachelor's Degree in Information Systems",
    start: '2013',
    end: '2017',
  },
  skills: [
    'Next.js/React',
    'Javascript',
    'Tailwind CSS',
    'WordPress',
    'jQuery',
    'SASS',
    'CSS',
    'Figma',
  ],
  portfolio: [
    {
      title: 'Tailwind CSS UI',
      techStack: ['Next.js', 'Typescript', 'Tailwind CSS', 'Radix UI'],
      description: 'UI and components with Tailwind CSS',
      link: 'https://tailwind-ui-delta.vercel.app/',
      isDone: false,
    },
    {
      title: 'Aplikasi Qur\'\an',
      techStack: ['Next.js', 'Prisma', 'Tailwind CSS', 'daisyUI'],
      description: 'Quran web app built with Next.js and Tailwind CSS',
      link: 'https://aplikasi-quran.vercel.app/',
      isDone: false,
    },
    {
      title: 'Adopt Hunt',
      techStack: ['Next.js', 'Tailwind CSS', 'NextUI', 'Frontend', 'Design'],
      description: 'Where pet lovers meet! A platform designed to make pet adoption easy and joyful.',
      link: 'https://adopt-hunt.vercel.app/',
      isDone: true,
    },
    {
      title: 'ToDo Lister',
      techStack: ['Next.js', 'Tailwind CSS', 'CRUD'],
      description: 'CRUD Todo List, made with Next.js and Tailwind CSS',
      link: 'https://todo-lister.vercel.app/',
      isDone: true,
    },
    {
      title: 'Radwah Padang',
      techStack: ['Vue', 'Tailwind CSS', 'Vite', 'Design'],
      description: 'Promotional Website built with Vue.js and Tailwind CSS',
      link: 'https://radwah-padang.vercel.app/',
      isDone: true,
    },
    {
      title: 'Bento Personal Website',
      techStack: ['Tailwind CSS', 'Vite'],
      description: 'Bento layout, made with Tailwind CSS.',
      link: 'https://nurul-personal-web.vercel.app/',
      isDone: true,
    },
  ],
};
