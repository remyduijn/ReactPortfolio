import React from 'react';
import '../../styles/About.css'
import img1 from '../../images/svg-4.svg';
import img2 from '../../images/browser.png';
import img3 from '../../images/laptop.png';
import img4 from '../../images/cloud.png';
import img5 from '../../images/diagram.png';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from './AboutElements';

const AboutSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  alt,
  id,
  primary,
  darkText,
}) => {
  console.log(primary); 
  return ( 
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <br></br>
                <h1>What I can do</h1>
                <div class="line"></div>
                {/* <FontAwesomeIcon icon="fa-solid fa-code" /> */}
                <div class="about-text">
                  <h3>Front-end web development</h3>
                  <p>I create web projects with JavaScript and React, as well as integrating React with Ruby on Rails.</p>
                </div>
                <img class="img-position" src={img2} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Performance optimization</h3>
                  <p>I implement unit and integration tests, and analyze projects in order to find a technical solution.</p>
                </div>
                <img class="img-position" src={img3} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Back-end programming</h3>
                  <p>I write PHP and Ruby code, run SQL queries on databases and create Ruby on Rails applications.</p>
                </div>
                <img class="img-position" src={img4} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Application deployment</h3>
                  <p>I manage application deployment, put project on servers and design technical architecture using UML diagrams.</p>
                </div>
                <img class="img-position" src={img5} alt="" width="45" height="45"></img>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img1} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutSection;
