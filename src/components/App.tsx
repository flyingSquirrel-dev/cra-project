import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyled from './styled';

import Loading from './Loading';
import Routes from './Routes';

import NotFound from '../pages/NotFound';
import Header from './Header';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          {Routes.map((route) => (
            <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <GlobalStyled />
    </>
  );
};

export default App;
