import styled, {css} from 'styled-components';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

export const StyledHorizontalScroll = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  
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
export const StyledPage = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
`;
export const PageSlider = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: 10px;
  background-color: #00EED1;
`;
const ArrowStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 13px;
  z-index: 1000;
`;
export const StyledArrowLeft = styled(ArrowLeft)`
  ${ArrowStyle};
  left: 100px;
`;
export const StyledArrowRight = styled(ArrowRight)`
  ${ArrowStyle};
  right: 100px;
`;