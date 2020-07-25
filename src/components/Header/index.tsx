import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../Routes';
import { StyledHeader } from './styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <ol>
        {Routes.map((route) => {
          const { name, path, isVisible } = route;

          return (
            isVisible && (
              <li key={`nav-${name}`}>
                <Link to={path}>{name}</Link>
              </li>
            )
          );
        })}
      </ol>
    </StyledHeader>
  );
};

export default Header;
