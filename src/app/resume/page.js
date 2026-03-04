import React, { cache } from 'react';
import { Intro } from '@/components/resume/intro';
import { Work } from '@/components/resume/work';
import { Skills } from '@/components/resume/skills';
import { Portfolio } from '@/components/resume/portfolio';
import { Education } from '@/components/resume/education';
import { Github } from 'lucide-react';
import { getResumeData } from '@/lib/fetch-resume';

const getCv = cache(getResumeData);

export async function generateMetadata() {
  const cv = await getCv();

  return {
    title: "CV / Resume | Nurul's website",
    description: cv?.profile?.[5]?.value || "Curriculum Vitae / Resume",
    keywords:
      "resume web, minimalist resume, resume, cv, minimalist cv, nurul's resume, nurul insani dewi, nurul insani, nurul, nurul insan, nurul id, nurulid, nurulide",
  };
}

export default async function Page() {
  const cv = await getCv();

  return (
    <>
      <div className="resume space-y-8">
        <Intro data={cv.profile} social={cv.social} />
        <Work data={cv.work} />
        <Education data={cv.education[0]} />
        <Skills data={cv.profile[6].value} />
        <Portfolio data={cv.portfolio} />
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
