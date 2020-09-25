import styled from 'styled-components';

export const Logo = styled.svg`
  width: 27px; 
  height: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Diagonal = styled.path`
  fill: #1E1D1D;
`;

export const Vertical = styled.path`
  fill: #303535
`;

export const LanguageSelect = styled.div`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  
  &>*:nth-child(n+2) {
    margin-left: 40px;
  }
  &>*:hover {
    color: #00EED1;
  }
`;