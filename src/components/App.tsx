import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyled from './styled';

import Loading from './Loading';
import Routes from './Routes';

import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {Routes.map((route) => (
            <Route exact={route.exact} path={route.path} component={route.component} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <GlobalStyled />
    </>
  );
};

export default App;
