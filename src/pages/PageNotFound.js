import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${({theme}) => theme.app.topMargin * 2 + theme.menu.itemHeight}px;
  padding-bottom: ${({theme}) => theme.app.bottomMargin * 2 + theme.menu.itemHeight}px;
  @media only screen and 
    (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    padding-top: ${({theme}) => theme.app.topMarginMobile * 2 + theme.menu.itemHeight}px;
    padding-bottom: ${({theme}) => theme.app.bottomMarginMobile * 2 + theme.menu.itemHeight}px;
  }
  padding-right: ${({theme}) => theme.app.rightMargin * 2 + theme.menu.maxItemWidth}px;
  @media only screen and 
    (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    padding-right: ${({theme}) => theme.app.rightMarginMobile}px;
  }
  padding-left: ${({theme}) => theme.app.leftMargin * 2 + theme.menu.maxItemWidth}px;
  @media only screen and 
    (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    padding-left: ${({theme}) => theme.app.leftMarginMobile}px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNotFound = () => {
  return (
    <Container>
      404 - Page not found
    </Container>
  );
};

export default PageNotFound;