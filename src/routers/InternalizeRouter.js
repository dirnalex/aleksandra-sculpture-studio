import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LanguageSelectPage from '../pages/LanguageSelectPage';
import Internationalize from '../components/wrappers/Internationalize';
import App from '../App';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';

const InternalizeRouter = () => {
  const {pathWithoutSlash} = useExtendedRouteMatch();

  return (
    <Switch>
      <Route exact path={`${pathWithoutSlash}/`}>
        <LanguageSelectPage/>
      </Route>
      <Route path={`${pathWithoutSlash}/:locale`}>
        {({match}) =>
          <Internationalize locale={match.params.locale}>
            <App/>
          </Internationalize>
        }
      </Route>
    </Switch>
  );
};

export default InternalizeRouter;