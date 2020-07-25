import React from 'react';
import { render } from '@testing-library/react';
import Root from './Root';

test('<Root /> 렌더링 테스트', () => {
  const { getByTestId } = render(<Root />);
  console.log('getByTestId', getByTestId);
  // const linkElement = getByText(/learn react/i);
  // expect(renderResult).toBeTruthy();
});

/**
 * app render 되는지
 * */
