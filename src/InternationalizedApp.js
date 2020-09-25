import React, {Fragment} from 'react';
import Menu from './components/Menu';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';

const InternationalizedApp = props => {
  const {path, url} = useRouteMatch();

  return (
    <Fragment>
      <Menu/>
      <Switch>
        <Redirect strict exact from={`${path}/`} to={`${url}home`}/>
        <Redirect strict exact from={`${path}`} to={`${url}/home`}/>
        <Route path={`${path}/home`}>
          <HomePage/>
        </Route>
        <Route path={`${path}/contact`}>
          <ContactPage/>
        </Route>
        <Route path={`${path}/about`}>
          <AboutPage/>
        </Route>
        <Route path={`${path}/work`}>
          <WorkPage/>
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </Fragment>
  );
};

InternationalizedApp.propTypes = {};

export default InternationalizedApp;