import React, {useLayoutEffect, useState} from "react";
import CursorChangeContext from '../contexts/CursorChangeContext';
import {CursorText, StyledCursor} from './CursorStyles';

const Cursor = ({children}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [cursor, setCursor] = useState({});

  const changeCursor = (changes) => {
    if (changes) {
      setCursor({...cursor, ...changes});
    } else {
      setCursor({});
    }
  };

  useLayoutEffect(() => {
    const handleMouseMove = ({clientX, clientY}) => {
      setX(clientX);
      setY(clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <CursorChangeContext.Provider value={changeCursor}>
      <StyledCursor {...{...cursor, x, y}}>
        {cursor.text && <CursorText>{cursor.text}</CursorText>}
      </StyledCursor>
      {children}
    </CursorChangeContext.Provider>
  );
};

export default Cursor;