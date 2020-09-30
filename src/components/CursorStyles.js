import styled from 'styled-components';

export const StyledCursor = styled.div.attrs(props => ({
  style: {
    top: props.y ? (props.y + 'px') : '50%',
    left: props.x ? (props.x + 'px') : '50%',
    width: props.text ? '40px' : '15px',
    height: props.text ? '40px' : '15px'
  }
}))`
    pointer-events: none;
    user-select: none;
    display: block;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: 10000;
    background-color: #00EED1;
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition-duration: 0.8s
`;
export const CursorText = styled.p`
  position:absolute;
  top: 17px;
  left: 17px;
`;