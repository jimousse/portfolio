import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Resume from '../components/Resume';

export const TABS = [
  {
    name: 'about',
    label: 'About',
    comp: About
  },
  {
    name: 'projects',
    label: 'Projects',
    comp: Projects
  },
  {
    name: 'resume',
    label: 'Resume',
    comp: Resume
  },
  {
    name: 'contact',
    label: 'Contact',
    comp: Contact
  }
];