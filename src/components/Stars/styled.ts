import styled from 'styled-components';
import { StyledStarsProps } from '../../interfaces';

export const StyledWrapSars = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;

export const StyledStars = styled.i<StyledStarsProps>`
  font-size: 20px;
  color: ${(props) => props.color};

  &:before {
    content: '\\2605';
  }
`;
