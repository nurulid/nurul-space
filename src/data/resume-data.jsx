import { Dribbble, Github, Linkedin } from 'lucide-react';
import { XIcon } from "../components/resume/icons/xIcon";

export const RESUME_DATA = {
  name: "Nurul Insani Dewi",
  role: "Frontend Developer, UI crafter, CSS user, Tailwind CSS lover",
  location: {
    state: "Indonesia",
    link: "https://www.google.com/maps/place/Indonesia/",
  },
  contact: {
    email: "call.nurulid@gmail.com",
    social: [
      {
        name: "GitHub",
        link: "https://github.com/nurulid",
        icon: Github
      },
      {
        name: "LinkedIn",
        link: "https://id.linkedin.com/in/nurul-insani-dewi",
        icon: Linkedin
      },
      {
        name: "Dribbble",
        link: "http://dribbble.com/nurulid",
        icon: Dribbble
      },
      {
        name: "X",
        link: "http://dribbble.com/nurulid",
        icon: XIcon
      }
    ]
  },
  about: "I'm an experienced Frontend Developer, especially in User Interface (UI). During my experience, I learn and practice how to build beautiful and functional products.",
  work: [
    {
      role: "Frontend Developer",
      company: "PeepSo",
      year: "2020 - 2023",
      location: "Jakarta, Indonesia",
      status: "Full Time",
      desc: "working with bla bla bla"
    },
    {
      role: "Frontend Developer",
      company: "PeepSo",
      year: "2020 - 2023",
      location: "Jakarta, Indonesia",
      status: "Full Time",
      desc: "working with bla bla bla"
    },
    {
      role: "Frontend Developer",
      company: "PeepSo",
      year: "2020 - 2023",
      location: "Jakarta, Indonesia",
      status: "Full Time",
      desc: "working with bla bla bla"
    }
  ]
}
