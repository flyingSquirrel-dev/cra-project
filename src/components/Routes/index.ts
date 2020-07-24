import React, { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Menu1 = lazy(() => import('../../pages/Menu1'));
const Menu2 = lazy(() => import('../../pages/Menu2'));

interface Routes {
  path: string;
  component: React.FC;
  name: string;
  exact?: boolean;
}

const Routes: Routes[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/menu1',
    name: 'MENU1',
    component: Menu1,
    exact: true,
  },
  {
    path: '/menu2',
    name: 'MENU2',
    component: Menu2,
    exact: true,
  },
];

export default Routes;
