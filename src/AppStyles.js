import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    word-break: break-word;
  }
  
  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  
  body {
    height: 100vh;
    background: #E5E5E5;
    overscroll-behavior: contain;
    color: #000000;
    font-family: NeueMontrealRegular, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.055em;
    text-transform: uppercase;
  }
  
  #root {
    height: 100%;
  }
  
  p {
    white-space: pre-wrap;
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