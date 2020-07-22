import React, { FC } from 'react';
import { StyledVerticalCard } from './styled';
import { getRandomThumnail } from '../../../utils';
import { StyledThumnail } from '../HorizontalCard/styled';

interface VerticalCardProps {
  stars: boolean;
  subDescription: boolean;
}

const VerticalCard: FC<VerticalCardProps> = ({ stars, subDescription }) => {
  const thumbnail = getRandomThumnail();

  return (
    <StyledVerticalCard>
      <StyledThumnail thumnail={thumbnail} />
      <div>
        <div>label</div>
        <div>Title</div>
        <div>
          <span>Highlight</span>
          <span>Cross out</span>
        </div>
        <div>
          {/* 별: "\e938" */}
          {stars && <i>Stars</i>}
          {subDescription && <div>Description</div>}
        </div>
      </div>
    </StyledVerticalCard>
  );
};

export default VerticalCard;
