import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import {homeObjOne} from '../components/AboutSection/Data';
import Portfolio from '../components/Portfolio';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeObjOne} />
      <Portfolio />
      <ResumeSection />
      <Footer />
    </>
  );
}

export default Home;
