'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Dribbble } from 'lucide-react';
import { XIcon } from '@/components/resume/icons/xIcon';

import { LinkIcon } from '@/components/ui/linkIcon';

const contact = [
  {
    title: 'X',
    url: 'http://x.com/nurulide',
    icon: XIcon,
    email: false,
  },
  {
    title: 'Dribbble',
    url: 'https://dribbble.com/nurulid',
    icon: Dribbble,
    email: false,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/nurulid',
    icon: Github,
    email: false,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nurul-insani-dewi/',
    icon: Linkedin,
    email: false,
  },
  { title: 'Mail', url: 'call.nurulid@gmail.com', icon: Mail, email: true },
];

export const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween' }}
      className="leading-6 max-w-[1020px] mx-auto space-y-4 mt-4 md:mt-8"
    >
      <div className="space-y-2">
        <h2 className="text-xl lg:text-2xl font-mono">
          Hello there, <br />
          I'm <span className="font-medium">Nurul</span> a Frontend Developer
          from Indonesia.
        </h2>

        <p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', delay: 3, stiffness: 1500 }}
          className="text-gray-500 dark:text-gray-400 leading-loose text-sm md:text-base"
        >
          Passionate Frontend Developer with 5+ years of experience specializing
          in building intuitive and visually appealing user interfaces. Skilled
          in HTML, CSS, JavaScript, and modern frameworks like React and
          Next.js. Enthusiastic about creating seamless user experiences and
          continuously improving UI design and development practices.
        </p>
      </div>

      <div className="relative group">
        <a
          href="mailto:call.nurulid@gmail.com"
          title="Get in touch"
          className="text-right inline-block p-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-gray-800 rounded-xl w-[60%] md:w-[40%] lg:w-[30%] text-sm"
        >
          <span className="rounded-md px-6 py-2 bg-white dark:bg-white/90 dark:hover:bg-white shadow-md group-hover:shadow-sm dark:text-black transition-all block text-center">
            Get In Touch
          </span>
        </a>
        <div className="absolute left-1 top-1">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-4 items-center">
        {contact.map(({ title, url, icon: Icon, email }, i) => (
          <LinkIcon key={i} {...{ title, url, Icon, email }} />
        ))}
      </div>
    </motion.div>
  );
};
