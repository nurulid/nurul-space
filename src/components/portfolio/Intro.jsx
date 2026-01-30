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
      className="mt-10 leading-6"
    >
      <h2 className="mb-2 text-xl lg:text-2xl font-mono">
        Hello there, <br />
        I'm <span className="text-purple-500">Nurul</span> a Frontend Developer
        from Indonesia.
      </h2>
      <p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 3, stiffness: 1500 }}
        className="text-gray-500 dark:text-gray-400 leading-7"
      >
        Passionate Frontend Developer with 5+ years of experience specializing
        in building intuitive and visually appealing user interfaces. <br/>
        Enthusiastic about creating seamless user experiences and continuously
        improving UI design and development practices.
      </p>

      <div className="relative inline group">
        <a
          href="mailto:call.nurulid@gmail.com"
          title="Get in touch"
          className="text-right inline-block mt-2 mb-4 p-2 bg-violet-50 dark:bg-violet-800/40 border border-violet-100 dark:border-gray-800 rounded-xl w-[60%] md:w-[30%] lg:w-[20%]"
        >
          <span className="rounded-md px-6 py-2 bg-white dark:bg-white/90 dark:hover:bg-white shadow-md group-hover:shadow-sm dark:text-black transition-all block text-center">
            Get In Touch
          </span>
        </a>
        <div className="absolute left-2 -top-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 items-center mt-4">
        {contact.map(({ title, url, icon: Icon, email }, i) => (
          <LinkIcon key={i} {...{ title, url, Icon, email }} />
        ))}
      </div>
    </motion.div>
  );
};
