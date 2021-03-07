import React from 'react';
import {generatePath, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import useExtendedRouteMatch from '../../hooks/useExtendedRouteMatch';

const ConnectParamToLastPartOfRoute = ({children, defaultParam = ""}) => {
  const {pathWithoutSlash, urlWithoutSlash} = useExtendedRouteMatch();
  const history = useHistory();

  return (
    <Switch>
      <Redirect exact from={`${pathWithoutSlash}/`} to={`${urlWithoutSlash}/${defaultParam}`}/>
      <Route path={`${pathWithoutSlash}/:param`}>
        {({match: {params: {param}}}) => children(param, newParam => history.push(generatePath(`${urlWithoutSlash}/:newParam`, {newParam})))}
      </Route>
    </Switch>
  );
};

ConnectParamToLastPartOfRoute.propTypes = {};

export default ConnectParamToLastPartOfRoute;