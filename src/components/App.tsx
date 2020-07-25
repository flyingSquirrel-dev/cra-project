import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import GlobalStyled from './styled';

import Loading from './Loading';
import Routes from './Routes';

import Header from './Header';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          {Routes.map((route) => {
            const { name, exact, path, component } = route;
            return <Route key={name} exact={exact} path={path} component={component} />;
          })}
          <Redirect to="/notfound" />
        </Switch>
      </Suspense>
      <GlobalStyled />
    </>
  );
};

export default App;
