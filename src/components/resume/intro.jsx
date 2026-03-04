import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dot, Dribbble, Github, Globe, Linkedin } from 'lucide-react';
import { LinkIcon } from './ui/linkIcon';
import { XIcon } from './icons/xIcon';

export const Intro = ({ data, social }) => {
  const iconMap = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Dribbble: Dribbble,
    'X/Twitter': XIcon,
  };

  return (
    <>
      <section className="flex gap-4 justify-between items-center">
        <div className="pr-0 sm:pr-10 md:pr-20">
          <h1 className="text-lg font-bold">{data[0].value}</h1>
          <p className="font-mono">{data[1].value}</p>
          <p className='flex items-center'>
            <Link
              href={data[2].value}
              target="_blank"
              className="flex gap-1 items-center"
            >
              <Globe size={14} />
              {data[2].value}
            </Link>

            <Dot />

            <span>{data[4].value}</span>
          </p>
          <div className="flex gap-1 items-center mt-3">
            {social.map(({ id, platform, link }) => {
              const Icon = iconMap[platform];

              if (!Icon) return null;

              return (
                <LinkIcon
                  key={id ?? platform}
                  link={link}
                  target="_blank"
                  title={platform}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
        <div className="rounded-md">
          <Image
            src="/images/nid.jpeg"
            width={170}
            height={170}
            alt="Avatar"
            className="rounded-md"
          />
        </div>
      </section>
      <section>
        <h2 className="title">About</h2>
        <p>{data[5].value}</p>
      </section>
    </>
  );
};
