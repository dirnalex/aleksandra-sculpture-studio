import styled from 'styled-components';

export const MenuList = styled.ul`
  position: fixed;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const MenuItem = styled.li`
  position: absolute;
  
  color: #1E1D1D;
  
  pointer-events: auto;
  
  & a.selected {
    display: none;
  }
`;

export const Home = styled(MenuItem)`
  bottom: 30px;
  right: 30px;
`;

export const About = styled(MenuItem)`
  top: 30px;
  right: 30px;
`;

export const Work = styled(MenuItem)`
  top: 30px;
  left: 30px;
`;

export const Contact = styled(MenuItem)`
  bottom: 30px;
  left: 30px;
`;