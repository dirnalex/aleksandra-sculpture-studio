import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import StartPage from '../pages/start/StartPage';
import ContactPage from '../pages/contact/ContactPage';
import AboutPage from '../pages/about/AboutPage';
import WorkRouter from './WorkRouter';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';

const AppRouter = props => {
  const {pathWithoutSlash, urlWithoutSlash} = useExtendedRouteMatch();
  return (
    <Switch>
      <Redirect exact from={`${pathWithoutSlash}/`} to={`${urlWithoutSlash}/start`}/>
      <Route path={`${pathWithoutSlash}/start`}>
        <StartPage/>
      </Route>
      <Route path={`${pathWithoutSlash}/contact`}>
        <ContactPage/>
      </Route>
      <Route path={`${pathWithoutSlash}/about`}>
        <AboutPage/>
      </Route>
      <Route path={`${pathWithoutSlash}/work`}>
        <WorkRouter/>
      </Route>
      <Route>
        404
      </Route>
    </Switch>
  );
};

AppRouter.propTypes = {};

export default AppRouter;