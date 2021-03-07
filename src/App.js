import React, {Fragment} from 'react';
import Menu from './components/Menu';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <Fragment>
      <Menu/>
      <AppRouter/>
    </Fragment>
  );
};

export default App;