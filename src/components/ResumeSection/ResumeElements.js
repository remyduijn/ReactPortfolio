import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoContainer = styled.div`
  color: #fff;
  background: #f5f5f5;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid; 
  z-index: 1;
  height: 780px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 880px;
  }
  @media screen and (max-width: 425px) {
    height: 680px;
  }
  @media screen and (max-width: 320px) {
    height: 620px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
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
  padding-left: 40px; 

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
  @media screen and (max-width: 425px) {
    padding-top: 0;
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
  color: #263238;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 26px;
  color: #546e7a;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.div`
  border-radius: 50px;
  background: #ffab00;
  white-space: nowrap;
  padding: 14px 18px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: 1px solid #ffab00;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e69900;
    border: 1px solid #e69900;
  }

  @media screen and (max-width: 425px) {
    padding: 12px 18px;
    font-size: 15px;
  }
`;

export const Button2 = styled(Link)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 14px 22px;
  margin-left: 1rem;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: 1px solid #ffe6b3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #ffab00;
  }

  @media screen and (max-width: 425px) {
    padding: 12px 18px;
    font-size: 15px;
  }
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

