import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f5f5f5' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1130px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto; 
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1450px;
  }
  @media screen and (max-width: 425px) {
    height: 1270px;
  }
  @media screen and (max-width: 375px) {
    height: 1320px;
  }
  @media screen and (max-width: 320px) {
    height: 1350px;
    padding: 0 14px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 40px;
  padding-bottom: 60px;
  padding-right: 40px;
  
  @media screen and (min-width: 1440px) {
    padding-right: 80px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;
  }

  @media screen and (max-width: 425px) {
    padding-top: 20px;
  }
`;

export const TopLine = styled.div`
  color: #ffab00;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#263238')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 26px;
  color: ${({ darkText }) => (darkText ? '#546e7a' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
