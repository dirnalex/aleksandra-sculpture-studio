import {createGlobalStyle} from 'styled-components';

export const AppStyle = createGlobalStyle`
  body {
    background: #E5E5E5;
    color: black;
    font-family: Neue Montreal, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.055em;
    text-transform: uppercase;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul, ol {
    list-style: none;
  }
  
  ul, ol {
    padding: 0;
  }
  
  body, h1, h2, h3, h4, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }
`;