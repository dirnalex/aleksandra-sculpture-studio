import React from 'react';
import styled from 'styled-components';
import {HideScrollbar} from '../ReuseStyles';

const BlurContainer = styled.div`
  width: 100%;
  height: 100%;
  
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: ${({theme}) => theme.verticalScroll.blur.top.height}px;
    background:linear-gradient(${({theme}) => theme.app.backgroundColor} 0%, ${({theme}) => theme.app.backgroundColor} 50%, ${({theme}) => theme.app.backgroundColor}00 100%);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({theme}) => theme.verticalScroll.blur.bottom.height}px;
    background: linear-gradient(${({theme}) => theme.app.backgroundColor}00 0%, ${({theme}) => theme.app.backgroundColor} 50%, ${({theme}) => theme.app.backgroundColor} 100%);
  }
`;


const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
    
  overflow-y: scroll;
  
  ${HideScrollbar};
  
  & > *:first-child {
    padding-top: ${({theme}) => theme.verticalScroll.blur.top.height}px;
  }
  & > *:last-child {
    padding-bottom: ${({theme}) => theme.verticalScroll.blur.bottom.height}px;
  }
`;

const VerticalScroll = ({className, children, scrollRef}) => {
  return (
    <BlurContainer>
      <ScrollContainer ref={scrollRef} className={className}>
        {children}
      </ScrollContainer>
    </BlurContainer>
  );
};

export default VerticalScroll;