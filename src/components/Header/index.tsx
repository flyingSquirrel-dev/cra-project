import React, { FC } from 'react';

import Routes from '../Routes';
import { StyledHeader } from './styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <ol>
        {Routes.map((route) => (
          <li key={`nav-${route.name}`}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ol>
    </StyledHeader>
  );
};

export default Header;
