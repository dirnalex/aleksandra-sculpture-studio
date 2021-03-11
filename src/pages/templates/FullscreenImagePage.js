import React, {useLayoutEffect, useRef} from 'react';
import styled from 'styled-components';
import {StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
`;

const StyledImagePage = styled.img`
  width: 100vw;
  margin-top: -${({theme}) => theme.app.topMargin * 2 + theme.menu.itemHeight}px;
  margin-right: -${({theme}) => theme.app.rightMargin * 4 + theme.menu.maxItemWidth}px;
  margin-bottom: -${({theme}) => theme.app.bottomMargin * 2 + theme.menu.itemHeight}px;
  margin-left: -${({theme}) => theme.app.leftMargin * 4 + theme.menu.maxItemWidth}px;
  @media only screen and 
    (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    margin-top: -${({theme}) => theme.app.topMarginMobile * 2 + theme.menu.itemHeight}px;
    margin-right: -${({theme}) => theme.app.rightMarginMobile}px;
    margin-bottom: -${({theme}) => theme.app.bottomMarginMobile * 2 + theme.menu.itemHeight}px;
    margin-left: -${({theme}) => theme.app.leftMarginMobile}px;
  }
  min-width: 100%;
  min-height: 100%;
  text-align: center;
  object-fit: cover;
`;

const FullscreenImagePage = ({imageLink}) => {
  const imgRef = useRef();

  useLayoutEffect(() => {
    imgRef.current.style.height = window.innerHeight + 'px';
  });

  return (
    <PageContainer>
      <StyledImagePage ref={imgRef} src={imageLink} alt="An image should be here, but we've lost it =("/>
    </PageContainer>
  );
};

export default FullscreenImagePage;