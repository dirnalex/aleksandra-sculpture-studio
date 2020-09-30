import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 210px 50px 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledVideo = styled.video` 
  cursor: pointer;
`;
export const StyledTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  font-size: 0.75em;
  line-height: 133%;
  
  color: #00EED1;
`;