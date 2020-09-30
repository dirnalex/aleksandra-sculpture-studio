import styled from 'styled-components';

export const LanguageSelectBox = styled.div`
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