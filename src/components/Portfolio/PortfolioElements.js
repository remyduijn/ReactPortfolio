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
  background-color: rgba(255, 215, 64, 1);
  
  @media screen and (max-width: 768px) {
    height: 750px;
  }
  @media screen and (max-width: 425px) {
    height: 700px;
  }
  `;
  
// export const PortfolioWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   align-items: center;
//   grid-gap: 16px;
//   padding: 0 50px;
//   z-index: 3;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
//   }
// `;

export const CarouselContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  z-index: 2;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const PortfolioCard = styled.div`
  display: flex;
  margin-top: 0.4em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: solid 1px #263238;
  // max-height: 340px;
  // max-width: 335px;
  height: 286px;
  width: 335px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  
  @media screen and (max-width: 1200px) {
    width: 310px;
    height: 264px;
  }

  @media screen and (max-width: 1100px) {
    width: 290px;
    height: 248px;
  }

  @media screen and (max-width: 1020px) {
    width: 250px;
    height: 213px;
  }

  @media screen and (max-width: 880px) {
    width: 300px;
    height: 255px;
  }

  @media screen and (max-width: 725px) {
    width: 270px;
    height: 230px;
  }

  @media screen and (max-width: 375px) {
    width: 255px;
    height: 217px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
    height: 170px;
  }
`;

export const PortfolioItem = styled.div`
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.4em;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const PortfolioLabel = styled.h1`
  background: #263238;
  display: flex;
  // margin-top: .3em;
  // margin-bottom: 0.4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-left: auto;
  // margin-right: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // width: 250px;
  padding: 15px;
  border: solid 1px #263238;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #F5F5F5;
  font-size: 1rem;
  letter-spacing: 1px;
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
  height: 160px;
  width: 190px;

  // @media (min-width: 1000px) {
  //   height: 190px;
  //   width: 210px;
  // }
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
