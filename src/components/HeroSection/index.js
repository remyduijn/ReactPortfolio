import React from 'react';
import '../../styles/Hero.css'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

function HeroSection () {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <div className='masthead'></div>
      </HeroBg>
      <HeroContent>
        <HeroH1>Web Developer</HeroH1>
        <HeroP>
        &lt; Full Stack /&gt; 
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
