import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail } from 'lucide-react';

export const Intro = ({ data }) => {
  return (
    <section className="flex gap-4 justify-between items-center">
      <div>
        <h1 className="title">{data.name}</h1>
        <p className="font-mono">{data.role}</p>
        <p>
          <Link
            href={data.location.link}
            target="_blank"
            className="flex gap-1 items-center"
          >
            <Globe size={14} />
            {data.location.state}
          </Link>
        </p>
        <div className="flex gap-1 items-center mt-3">
          <Link
            href={`mailto:${data.contact.email}`}
            title="Get in touch"
            className="p-[5px] text-resumeGray rounded-md border border-gray-200"
          >
            <Mail size={18} />
          </Link>
          {data.contact.social.map(({ name, link, icon: Icon }, i) => (
            <Link
              key={i}
              href={link}
              target='_blank'
              title={name}
              className="p-[5px] text-resumeGray rounded-md border border-gray-200 hover:bg-gray-100 transition-all"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
      <div className="rounded-md">
        <Image
          src="/images/nid.jpeg"
          width={100}
          height={100}
          alt="Avatar"
          className="rounded-md"
        />
      </div>
    </section>
  );
};
