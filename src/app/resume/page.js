import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import { About } from '@/components/resume/about';
import { Intro } from '@/components/resume/intro';
import { Work } from '@/components/resume/work';
import { Skills } from '@/components/resume/skills';
import { Portfolio } from '@/components/resume/portfolio';
import { Education } from '@/components/resume/education';
import { Github } from 'lucide-react';

const resume = RESUME_DATA;

export const metadata = {
  title: "CV / Resume | Nurul's website",
  description: resume.summary,
  keyword:
    "resume web, minimalist resume, resume, cv, minimalist cv, nurul's resume, nurul insani dewi, nurul insani, nurul, nurul insan, nurul id, nurulid, nurulide",
};

export default function Page() {
  return (
    <>
      <div className="resume space-y-8">
        <Intro data={resume} />
        <About data={resume} />
        <Work data={resume.work} />
        <Education data={resume.education} />
        <Skills data={resume.skills} />
        <Portfolio data={resume.portfolio} />
      </div>
      <div className="max-w-[500px] w-full mx-auto border-t-[0.5px] border-gray-200 mt-10 pt-5 text-gray-600 flex justify-between items-center">
          <a
            href="https://github.com/nurulid/nurul-space/tree/main/src/components/resume"
            title="Source code" 
            target='_blank'
            className='hover:text-violet-600 transition-all'
          >
            <Github size={18}/>
          </a>
          <p className='text-xs'>
            Design of this resume credit to{' '}
            <a
              href="https://cv.jarocki.me/"
              target="_blank"
              className="underline hover:opacity-80"
            >
              Bartosz Jarocki
            </a>{' '}
            🙌
          </p>
      </div>
    </>
  );
}
