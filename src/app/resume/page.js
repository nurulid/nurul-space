import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import { About } from '@/components/resume/about';
import { Intro } from '@/components/resume/intro';
import { Work } from '@/components/resume/work';
import { Skills } from '@/components/resume/skills';
import { Portfolio } from '@/components/resume/portfolio';
import { Education } from '@/components/resume/education';

const resume = RESUME_DATA;

export default function Page() {
  return (
    <>
      <div className="resume space-y-8">
        <Intro data={resume} />
        <About data={resume} />
        <Work data={resume} />
        <Education data={resume} />
        <Skills data={resume} />
        <Portfolio data={resume} />
      </div>
      <div className="mt-24 px-5 text-gray-600 text-xs text-center">
        Design of this resume credit to{' '}
        <a href="https://cv.jarocki.me/" target='_blank' className="underline hover:opacity-80">
          Bartosz Jarocki
        </a>
      </div>
    </>
  );
}
