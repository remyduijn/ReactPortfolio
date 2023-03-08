import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../styles/Portfolio.css'
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioLabel,
  PortfolioCard,
  PortfolioItem,
  CarouselContainer,
} from './PortfolioElements';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>Portfolio</PortfolioH1>
      <div class="line2"></div>

      <CarouselContainer>
      <Carousel breakPoints={breakPoints} className="carousel">
        <PortfolioItem>
          <a href='https://www.ikigaibrazil.com/' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg'></PortfolioCard>
          </a>
            <PortfolioLabel>Ikigai Brazil</PortfolioLabel>
        </PortfolioItem>

        <PortfolioItem>
          <a href='https://remyduijn.github.io/PetPlatform-Front-end/' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg4'></PortfolioCard>
          </a>
          <PortfolioLabel>Pet Platform</PortfolioLabel>
        </PortfolioItem>

        <PortfolioItem>
          <a href='https://github.com/remyduijn/Move-and-Groove' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg6'></PortfolioCard>
          </a>
          <PortfolioLabel>Move and Groove</PortfolioLabel>
        </PortfolioItem>

        <PortfolioItem>
          <a href='https://remyduijn.github.io/Watch-it-Outside/' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg2'></PortfolioCard>
          </a>
          <PortfolioLabel>Watch it Outside</PortfolioLabel>
        </PortfolioItem>

        <PortfolioItem>
          <a href='https://remyduijn.github.io/BoulderBikeTour/' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg5'></PortfolioCard>
          </a>
          <PortfolioLabel>Boulder Bike Tour</PortfolioLabel>
        </PortfolioItem>

        <PortfolioItem>
          <a href='https://remyduijn.github.io/Nutrition-Needs/' target="_blank" rel="noopener noreferrer">
            <PortfolioCard className='bg3'></PortfolioCard>
          </a>
          <PortfolioLabel>Nutrition Needs</PortfolioLabel>
        </PortfolioItem>

        </Carousel>
      </CarouselContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
