import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import App from './App';

import Home from '../pages/Home';
import Menu1 from '../pages/Menu1';
import Menu2 from '../pages/Menu2';
import NotFound from '../pages/NotFound';

afterEach(cleanup);

describe('<App /> ', () => {
  test('<App /> 렌더링시 / 으로 렌더링 되는가?', async () => {
    const { getByTestId, getByText } = render(<App />);
    const navbar = getByTestId('navbar');
    const link = getByTestId('HOME');

    await wait();
    expect(getByText(/안녕하세요/i)).toBeInTheDocument();
    expect(navbar).toContainElement(link);
  });

  test('/menu1 로 렌더링 되는가?', async () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('MENU1'));

    await wait();
    expect(getByTestId('menu1-wrapper')).toBeInTheDocument();
  });

  test('/menu2 로 렌더링 되는가?', async () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('MENU2'));

    await wait();
    expect(getByTestId('menu2-wrapper')).toBeInTheDocument();
  });

  test('routing에 해당되지 않는 path인 경우 /notfound 로 렌더링 되는가?', async () => {
    const history = createMemoryHistory();
    history.push('/not/found');

    const { getByTestId } = render(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu1" component={Menu1} />
          <Route path="/menu2" component={Menu2} />
          <Route component={NotFound} />
        </Switch>
      </Router>,
    );

    await wait();
    expect(getByTestId('404-notfound')).toBeInTheDocument();
  });
});
