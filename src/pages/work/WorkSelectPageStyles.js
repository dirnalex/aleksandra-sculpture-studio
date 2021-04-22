import styled from 'styled-components';
import {HideScrollbar} from '../../ReuseStyles';

export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WorkList = styled.ul`
  position: relative;
  
  font-size: 2em;
  line-height: 100%;
  
  max-height: 100%;
  width: 100%;
  
  overflow: scroll;
  overscroll-behavior: contain;
  
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    font-size: 1.25em;
    line-height: 160%;   
  }
  ${HideScrollbar}
`;

export const WorkItem = styled.li`
  margin-left: 250px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    margin-left: 50px;    
  }
  color: ${({disabled}) => disabled ? "dimgrey" : "black"};
  position: relative;
  display: table;
  cursor:pointer;
  
  &:hover .work-id {
    visibility: visible;
  }
  &:hover img {
    visibility: visible;
  }
`;

export const WorkId = styled.div`
  visibility: hidden;
  position: absolute;
  width: 60px;
  top: 4px;
  left: -70px;
  text-align: right;
  font-size: 0.6em;
  line-height: 133%;
`;

export const Image = styled.img.attrs(({width, height, left, top}) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`
  }
}))`
  visibility: hidden;
  position: fixed;
  object-fit: contain;
  z-index: -1;
`;