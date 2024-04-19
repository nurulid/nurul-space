import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import { About } from '@/components/resume/about';
import { Intro } from '@/components/resume/intro';
import { WorkExperience } from '@/components/resume/workExperience';

const resume = RESUME_DATA;

export default function Page() {
  return (
    <div className="resume">
      <Intro data={resume}/>
      <About data={resume}/>
      <WorkExperience data={resume}/>
    </div>
  );
}
