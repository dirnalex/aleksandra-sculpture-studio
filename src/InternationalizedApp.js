import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppStyles from './AppStyles';
import AnimationStyles from './AnimationStyles';
import Cursor from './components/Cursor';
import InternalizeRouter from './routers/InternalizeRouter';
import {ThemeProvider} from 'styled-components';

const defaultTheme = {
  mobileBreakpoint: () => defaultTheme.app.leftMargin * 2 + defaultTheme.app.rightMargin * 2 + defaultTheme.menu.maxItemWidth * 2 + defaultTheme.content.minWidth,
  app: {
    backgroundColor: '#E5E5E5',
    textColor: '#000000',
    emphasisedTextColor: '#00EED1',
    topMargin: 30,
    bottomMargin: 30,
    leftMargin: 30,
    rightMargin: 30,
    topMarginMobile: 40,
    bottomMarginMobile: 40,
    leftMarginMobile: 15,
    rightMarginMobile: 15,
  },
  menu: {
    maxItemWidth: 80,
    itemHeight: 20,
  },
  scroller: {
    arrow: {
      width: 50,
      height: 13,
      z: 1000,
    }
  },
  verticalScroll: {
    blur: {
      top: {
        height: 20,
      },
      bottom: {
        height: 40,
      },
    }
  },
  content: {
    minWidth: 420,
  }
};

function InternationalizedApp() {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <Router>
      <ThemeProvider theme={{
        ...theme,
        setTheme: newTheme => setTheme({...theme, ...newTheme}),
        setDefaultTheme: () => setTheme(defaultTheme)
      }}>
        <Cursor>
          <AppStyles/>
          <AnimationStyles/>
          <InternalizeRouter/>
        </Cursor>
      </ThemeProvider>
    </Router>
  );
}

export default InternationalizedApp;
