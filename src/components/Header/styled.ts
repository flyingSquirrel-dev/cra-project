import styled from 'styled-components';
import { defaultCoral } from '../../baseStyled';

export const StyledHeader = styled.nav`
  height: 100%;
  padding: 1rem 0;
  background: ${defaultCoral};
  font-weight: bold;
  color: #fff;

  ol {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 1rem;
    }
  }
`;
