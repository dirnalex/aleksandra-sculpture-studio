import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  .fade-enter {
    opacity: 0.01;
  }
  
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
  .fade-exit {
    opacity: 1;
  }
  
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;