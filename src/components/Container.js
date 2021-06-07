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

    // if (currentScrollTop >= aboutSectionRef.current.offsetTop &&
    //   currentScrollTop <= aboutSectionRef.current.offsetHeight/2) {
    //   setCurrentPage('about');
    // } else if (currentScrollTop >= aboutSectionRef.current.offsetHeight/2 &&
    //   currentScrollTop <= projectsSectionRef.current.offsetTop + projectsSectionRef.current.offsetHeight/2) {
    //     setCurrentPage('projects');
    // } else if (currentScrollTop >= resumeSectionRef.current.offsetTop - projectsSectionRef.current.offsetHeight/2 &&
    //   currentScrollTop <= resumeSectionRef.current.offsetTop + resumeSectionRef.current.offsetHeight/2) {
    //     setCurrentPage('resume');
    //     console.log('resume');
    // } else {
    //     setCurrentPage('contact');
    // }
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