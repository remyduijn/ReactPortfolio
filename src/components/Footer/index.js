import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>RD</SocialLogo>
            <WebsiteRights>Remy Duijn © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.linkedin.com/in/remy-duijn-00827036/' target='_blank' aria-label='Linkedin' rel='noopener noreferrer'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/remyduijn' target='_blank' aria-label='Github' rel='noopener noreferrer'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/remyduijn/?hl=en' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.facebook.com/remy.duijn/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
