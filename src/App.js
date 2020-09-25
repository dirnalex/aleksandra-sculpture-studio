import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import LanguageSelectPage from './pages/LanguageSelectPage';
import Internationalize from './components/Internationalize';

import InternationalizedApp from './InternationalizedApp';

const AppStyle = createGlobalStyle`
  body {
    background: #E5E5E5;
    color: black;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.055em;
    text-transform: uppercase;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul, ol {
    list-style: none;
  }
  
  ul, ol {
    padding: 0;
  }
  
  body, h1, h2, h3, h4, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }
`;

function App() {
  return (
    <Router>
      <AppStyle/>
      <Switch>
        <Route exact path="/">
          <LanguageSelectPage/>
        </Route>
        <Route path="/:locale">
          <Internationalize>
            <InternationalizedApp/>
          </Internationalize>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
