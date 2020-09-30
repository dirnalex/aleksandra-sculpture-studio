import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LanguageSelectPage from './pages/LanguageSelectPage';
import Internationalize from './components/wrappers/Internationalize';

import InternationalizedApp from './InternationalizedApp';
import {AppStyle} from './AppStyles';
import Cursor from './components/Cursor';

function App() {
  return (
    <Router>
      <Cursor>
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
      </Cursor>
    </Router>
  );
}

export default App;
