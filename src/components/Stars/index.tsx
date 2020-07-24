import React, { FC } from 'react';
import { StyledStars, StyledWrapSars } from './styled';
import { StarsProps } from '../../interfaces';

const Stars: FC<StarsProps> = ({ number = 1 }) => {
  const starsArray = new Array(5).fill(true);

  return (
    <StyledWrapSars>
      {starsArray.map((e, index) => {
        if (index >= number) {
          return <StyledStars key={index} color={'#d9d9d9'} />;
        }
        return <StyledStars key={index} color={'#ffc801'} />;
      })}
    </StyledWrapSars>
  );
};

export default Stars;
