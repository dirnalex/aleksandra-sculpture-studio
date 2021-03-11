import styled, {css} from 'styled-components';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';
import {HideScrollbar} from '../ReuseStyles';

export const StyledHorizontalScroll = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  
  ${HideScrollbar};
`;
export const StyledPage = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  & > * {
    flex: auto 1 1;
    margin-top: 0;
    margin-bottom: 0;
    @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
      margin-top: ${({theme}) => theme.app.topMarginMobile * 2 + theme.menu.itemHeight}px;
      margin-bottom: ${({theme}) => theme.app.bottomMarginMobile * 2 + theme.menu.itemHeight}px;
    }
  }
  
  & > *:last-child {
    margin-right: ${({theme}) => theme.app.rightMargin * 4 + theme.menu.maxItemWidth}px;
    @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
      margin-right: ${({theme}) => theme.app.rightMarginMobile}px;
    }
  }
  
  & > *:first-child {
    margin-left: ${({theme}) => theme.app.leftMargin * 4 + theme.menu.maxItemWidth}px;
    @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
      margin-left: ${({theme}) => theme.app.leftMarginMobile}px;
    }
  }
`;

const ArrowStyle = css`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  & * {
    fill: ${props => props.theme.textColor || 'black'};
  }
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    top: auto;
    bottom: ${({theme}) => theme.app.bottomMarginMobile + theme.menu.itemHeight + (theme.app.bottomMarginMobile - theme.scroller.arrow.height) / 2}px;
    transform: none;    
  }
  width: ${({theme}) => theme.scroller.arrow.width}px;
  height: ${({theme}) => theme.scroller.arrow.height}px;
  z-index: ${({theme}) => theme.scroller.arrow.z};
`;
export const StyledArrowLeft = styled(ArrowLeft)`
  ${ArrowStyle};
  left: ${({theme}) => theme.app.leftMargin}px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    left: 50%;
    transform: translateX(-${({theme}) => theme.scroller.arrow.width + 30}px);
  }
`;
export const StyledArrowRight = styled(ArrowRight)`
  ${ArrowStyle};
  right: ${({theme}) => theme.app.rightMargin}px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    right: 50%;
    transform: translateX(${({theme}) => theme.scroller.arrow.width + 30}px);
  }
`;