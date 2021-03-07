import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WorkSelectPage from '../pages/work/WorkSelectPage';
import WorkPage from '../pages/work/WorkPage';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';

const WorkRouter = props => {
  const {pathWithoutSlash} = useExtendedRouteMatch();
  return (
    <Switch>
      <Route exact path={`${pathWithoutSlash}/`}>
        <WorkSelectPage/>
      </Route>
      <Route path={`${pathWithoutSlash}/:workId`}>
        {({match}) => <WorkPage id={match.params.workId}/>}
      </Route>
    </Switch>
  );
};

WorkRouter.propTypes = {};

export default WorkRouter;