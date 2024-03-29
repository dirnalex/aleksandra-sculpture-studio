import styled from 'styled-components';

export const MenuList = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  color: ${props => props.theme.textColor || 'black'};
`;

const MenuItem = styled.li`
  position: absolute;
    
  pointer-events: auto;
  
  & a.selected {
    display: none;
  }
`;

export const LanguageSwitch = styled(MenuItem)`
  font-size: 0.75em;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5px;
`;

export const Start = styled(MenuItem)`
  bottom: 30px;
  right: 30px;
  @media only screen and (max-width : 500px) {
    bottom: 40px;
    right: 15px;
  }
`;

export const About = styled(MenuItem)`
  top: 30px;
  right: 30px;
  @media only screen and (max-width : 500px) {
    top: 40px;
    right: 15px;
  }
`;

export const Work = styled(MenuItem)`
  top: 30px;
  left: 30px;
  @media only screen and (max-width : 500px) {
    top: 40px;
    left: 15px;
  }
`;

export const Contact = styled(MenuItem)`
  bottom: 30px;
  left: 30px;
  @media only screen and (max-width : 500px) {
    bottom: 40px;
    left: 15px;
  }
`;