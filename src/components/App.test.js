import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App /> ', () => {
  test('렌더링', () => {
    const resultOfRender = render(<App />);
    expect(resultOfRender).toBeTruthy();
  });
});
