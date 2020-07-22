import React, { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Homework1 = lazy(() => import('../../pages/Homework1'));
const Homework2 = lazy(() => import('../../pages/Homework2'));

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
    path: '/homework1',
    name: 'Homework1',
    component: Homework1,
    exact: true,
  },
  {
    path: '/homework2',
    name: 'Homework2',
    component: Homework2,
    exact: true,
  },
];

export default Routes;
