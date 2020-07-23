import styled from 'styled-components';

export const PageWrapHomeWork1 = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    display: inline-block;
  }
`;
