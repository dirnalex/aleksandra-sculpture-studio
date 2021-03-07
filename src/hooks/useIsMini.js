import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from 'styled-components';

export default (width) => {
  const theme = useContext(ThemeContext);
  const [mini, setMini] = useState(false);
  useEffect(() => {
    if (width <= theme.mobileBreakpoint()) {
      setMini(true);
    } else {
      setMini(false);
    }
  }, [width]);

  return mini;
}