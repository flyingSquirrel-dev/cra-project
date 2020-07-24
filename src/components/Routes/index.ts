import React, { lazy } from 'react';

import { RoutesProps } from '../../interfaces';

const Home = lazy(() => import('../../pages/Home'));
const Menu1 = lazy(() => import('../../pages/Menu1'));
const Menu2 = lazy(() => import('../../pages/Menu2'));

const Routes: RoutesProps[] = [
  {
    path: '/',
    name: 'HOME',
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
