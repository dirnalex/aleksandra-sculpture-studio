import {css} from 'styled-components';

export const HideScrollbar = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export const Blinking = (delayMs = 0) => css`
  animation: 1s ease-in-out ${delayMs}ms infinite alternate changeColor;
  
  @keyframes changeColor {
    from {
      color: #000000;
    }
    to {
      color: #00EED1;
    }
  }
`;

export const StandardTopBottomMargin = css`
  &&{
    margin-top: ${({theme}) => theme.app.topMargin * 2 + theme.menu.itemHeight}px;
    margin-bottom: ${({theme}) => theme.app.bottomMargin * 2 + theme.menu.itemHeight}px;
    @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
      margin-top: ${({theme}) => theme.app.topMarginMobile * 2 + theme.menu.itemHeight}px;
      margin-bottom: ${({theme}) => theme.app.bottomMarginMobile * 2 + theme.menu.itemHeight}px;
    }
  }
`;

