import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-bottom: 2rem;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(255, 215, 64, 1) 0%,
        rgba(255, 215, 64, 1) 100%
      );
      // linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
 
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (max-width: 425px) {
    height: 1240px;
  }
  `;
  
export const PortfolioWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  z-index: 3;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  max-width: 335px;
  min-height: 286px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
    min-height: 0;  
  }
`;

export const PortfolioIcon1 = styled.img`
  height: 160px;
  width: 200px;
  padding-top: 10px;
`;

export const PortfolioIcon2 = styled.img`
  height: 160px;
  width: 140px;
  padding-top: 10px;
`;

export const PortfolioIcon = styled.img`
  height: 170px;
  width: 200px;

  @media (min-width: 1000px) {
    height: 190px;
    width: 210px;
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #263238;
  margin-bottom: 64px;
  z-index: 3;

  @media (min-width: 1000px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #263238;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #546e7a;
`;
