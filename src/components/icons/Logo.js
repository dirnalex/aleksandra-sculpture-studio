import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.svg`
  width: 27px; 
  height: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: 500ms ease-in-out infinite alternate pulse;
  
  @keyframes pulse {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`;

const Diagonal = styled.path`
  fill: #1E1D1D;
`;

const Vertical = styled.path`
  fill: #303535
`;

const Logo = () => {
  return (
    <StyledLogo viewBox="0 0 27 40">
      <Diagonal
        d="M19.9641 0.00930016L3.07421 24.5245C2.79973 24.9244 2.35141 25.1569 1.87564 25.1569H0V26.6915H1.58285H2.69908H7.53914L25.9387 0L19.9641 0.00930016Z"/>
      <Vertical
        d="M22.041 16.322V36.4569L27 40.0002V13.4482H22.041H19.3511V14.9828H20.7235C21.4554 14.9828 22.041 15.5873 22.041 16.322Z"/>
    </StyledLogo>
  );
};

export default Logo;