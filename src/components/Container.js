import React, { useState, Fragment, useEffect, useRef } from 'react';
import NavSideBar from './NavSideBar';
import FloatingNav from './FloatingNav';
import SvgBackground from './SvgBackground';

import Contact from './Contact';
import Resume from './resume/Resume';
import Projects from './Projects';
import About from './About';

const pages = [
  { comp: About, name: 'about', label: 'About', id: 'about-section' },
  { comp: Projects, name: 'projects', label: 'Projects', id: 'projects-section' },
  { comp: Resume, name: 'resume', label: 'Resume', id: 'resume-section' },
  { comp: Contact, name: 'contact', label: 'Contact', id: 'contact-section' }
];

const DEFAULT_ACTIVE_TAB = pages[0].name;

export default function Container() {
  const [ currentPage, setCurrentPage ] = useState(DEFAULT_ACTIVE_TAB);
  const scrollableContainerRef = useRef();
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);



  const handleScroll = () => {
    const currentScrollTop = scrollableContainerRef.current.scrollTop;
  
    // about boundaries
    const aboutStart = 0;
    const aboutEnd = aboutStart + aboutSectionRef.current.offsetHeight;
    // projects boundaries
    const projectsStart = projectsSectionRef.current.offsetTop;
    const projectEnd = projectsStart + projectsSectionRef.current.offsetHeight;
    // resume boundaries
    const resumeStart = resumeSectionRef.current.offsetTop;
    const resumeEnd = resumeStart + resumeSectionRef.current.offsetHeight;

    // the following percentages are kind of arbitruary
    if (currentScrollTop <=  0.7 * aboutEnd) {
      setCurrentPage('about');
    } else if (currentScrollTop > 0.7 * aboutEnd && currentScrollTop <= 0.9 * projectEnd) {
      setCurrentPage('projects');
    } else if (currentScrollTop > 0.9 * projectEnd && currentScrollTop <= 0.95 * resumeEnd) {
      setCurrentPage('resume');
    } else {
      setCurrentPage('contact');
    }
  };

  useEffect(() => {
    scrollableContainerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollableContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <NavSideBar currentPage={currentPage} pages={pages} onChangePage={setCurrentPage} />
      <FloatingNav currentPage={currentPage} pages={pages} onChangePage={setCurrentPage} />
      <main className="main-content">
        <SvgBackground />
        <div ref={scrollableContainerRef} className="scrollable-container">
          <About ref={aboutSectionRef} id="about-section" label="About" />
          <Projects ref={projectsSectionRef} id="projects-section" label="Projects" />
          <Resume ref={resumeSectionRef} id="resume-section" label="Resume" />
          <Contact ref={contactSectionRef} id="contact-section" label="Contact" />
        </div>
      </main>
    </Fragment>
  );
}