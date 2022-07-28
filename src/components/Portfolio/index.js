import React from 'react';
import '../../styles/Portfolio.css'
import Icon1 from '../../images/travel.svg';
import Icon2 from '../../images/diet.svg';
import Icon3 from '../../images/movie.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon1,
  PortfolioIcon2,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP
} from './PortfolioElements';

const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>Portfolio</PortfolioH1>
      <div class="line2"></div>
      <PortfolioWrapper>
        <a href='https://remyduijn.github.io/Watch-it-Outside/' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon1 src={Icon3} />
          <PortfolioH2>Watch it Outside</PortfolioH2>
          <PortfolioP>
            A registration website for a film festival.
          </PortfolioP>
        </PortfolioCard></a>
        <a href='https://www.ikigaibrazil.com/' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Ikigai Brazil</PortfolioH2>
          <PortfolioP>
            A blog about travel and immigration in Brazil.
          </PortfolioP>
        </PortfolioCard></a>
        {/* <a href='' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Chalets & Caviar</PortfolioH2>
          <PortfolioP>
            A Wordpress creation that showcases luxury real estate.
          </PortfolioP>
        </PortfolioCard></a> */}
        <a href='https://remyduijn.github.io/Nutrition-Needs/' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon2 src={Icon2} />
          <PortfolioH2>Nutrition Needs</PortfolioH2>
          <PortfolioP>
            A web program that calculates nutritional needs.
          </PortfolioP>
        </PortfolioCard></a>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
