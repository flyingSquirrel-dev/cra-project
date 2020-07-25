import React, { FC } from 'react';
import { StyledStars, StyledWrapSars } from './styled';
import { StarsProps } from '../../interfaces';
import { getTextForStars } from '../../misc';

const Stars: FC<StarsProps> = React.memo(({ number = 1, tabIndex }) => {
  const starsArray = new Array(5).fill(true);

  return (
    <StyledWrapSars tabIndex={tabIndex} aria-label={getTextForStars(number)}>
      {starsArray.map((e, index) => {
        if (index >= number) {
          return <StyledStars key={index} color={'#d9d9d9'} />;
        }
        return <StyledStars key={index} color={'#ffc801'} />;
      })}
    </StyledWrapSars>
  );
});

export default Stars;
