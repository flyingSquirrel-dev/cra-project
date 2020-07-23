import styled from 'styled-components';

interface StyledStarsProps {
  color: string;
}

export const StyledWrapSars = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;

export const StyledStars = styled.i<StyledStarsProps>`
  font-size: 1.3em;
  color: ${(props) => props.color};

  &:before {
    content: '\\2605';
  }
`;
