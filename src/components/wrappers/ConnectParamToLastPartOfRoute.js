import React from 'react';
import {generatePath, Redirect, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';

const ConnectParamToLastPartOfRoute = ({children, defaultParam = ""}) => {
  const {path, url} = useRouteMatch();
  const history = useHistory();

  return (
    <Switch>
      <Redirect strict exact from={`${path}/`} to={`${url}${defaultParam}`}/>
      <Redirect strict exact from={`${path}`} to={`${url}/${defaultParam}`}/>
      <Route path={`${path}/:param`}>
        {({match: {params: {param}}}) => children(param, newParam => history.push(generatePath(`${url}/:newParam`, {newParam})))}
      </Route>
    </Switch>
  );
};

ConnectParamToLastPartOfRoute.propTypes = {};

export default ConnectParamToLastPartOfRoute;