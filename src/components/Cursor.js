import React, {useLayoutEffect, useRef, useState} from "react";
import CursorChangeContext from '../contexts/CursorChangeContext';
import styled from 'styled-components';

const StyledCursor = styled.div.attrs(props => ({
  style: {
    width: props.text ? '40px' : '15px',
    height: props.text ? '40px' : '15px'
  }
}))`
    top: 50%;
    left: 50%;
    pointer-events: none;
    user-select: none;
    display: block;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: 10000;
    background-color: #00EED1;
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition-duration: 0.8s;
`;
export const CursorText = styled.p`
  position:absolute;
  white-space: nowrap;
  color: #323232;
  top: 17px;
  left: 17px;
`;

const Cursor = ({children}) => {
  const cursorRef = useRef(null);
  const [cursor, setCursor] = useState({});

  const changeCursor = (changes) => {
    if (changes) {
      setCursor({...cursor, ...changes});
    } else {
      setCursor({});
    }
  };

  useLayoutEffect(() => {
    let lastMoveTimestamp = 0;
    const handleMouseMove = ({clientX, clientY}) => {
      if (Date.now() > lastMoveTimestamp + 100) {
        cursorRef.current.style.left = clientX + 'px';
        cursorRef.current.style.top = clientY + 'px';
        lastMoveTimestamp = Date.now();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [cursorRef]);

  return (
    <CursorChangeContext.Provider value={changeCursor}>
      <StyledCursor {...cursor} ref={cursorRef}>
        {cursor.text && <CursorText>{cursor.text}</CursorText>}
      </StyledCursor>
      {children}
    </CursorChangeContext.Provider>
  );
};

export default Cursor;