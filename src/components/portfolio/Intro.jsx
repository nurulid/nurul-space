'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Dribbble, X, Twitter } from 'lucide-react';

import { LinkIcon } from '@/components/ui/linkIcon';

const contact = [
  {
    title: 'X/Twitter',
    url: 'https://x.com/nurulide',
    icon: Twitter,
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
    url: 'https://linkedin.com/in/nurul-insani-dewi/',
    icon: Linkedin,
    email: false,
  },
  { title: 'Mail', url: 'call.nurulid@gmail.com', icon: Mail, email: true },
];

export const Intro = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');
  const displayedUrl = hoveredUrl.replace(/^https?:\/\//, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween' }}
      className="leading-6 max-w-[1020px] mx-auto space-y-4 mt-4 md:mt-8"
    >
      <div className="space-y-2">
        <h2 className="font-semibold font-mono">Nurul Insani Dewi</h2>

        <p className="text-gray-500 dark:text-gray-400 leading-loose">
          I’m Nurul a frontend developer that cares about UI and how a product actually
          feels to use. I like thinking about how users interact with a product
          and making sure the interface feels clear, simple, and functional. And I enjoy shaping ideas into real, and working products.
        </p>
        <p className="text-gray-500 dark:text-gray-400 leading-loose">
          For me, good design isn’t just about how it looks, but how it works.
        </p>
      </div>

      {/* get in thouch */}
      {/* <div className="relative group">
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
      </div> */}

      <div className="flex gap-4 items-center">
        <div className="flex justify-start gap-4 items-center">
          {contact.map(({ title, url, icon: Icon, email }, i) => (
            <LinkIcon
              key={i}
              {...{ title, url, Icon, email }}
              onHoverChange={setHoveredUrl}
            />
          ))}
        </div>
        <div className="min-h-4 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {hoveredUrl ? (
              <motion.p
                key={hoveredUrl}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="text-xs text-gray-800 dark:text-gray-400"
              >
                {displayedUrl}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
