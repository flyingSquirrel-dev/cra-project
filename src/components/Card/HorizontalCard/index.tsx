import React, { FC } from 'react';
import {
  StyledHorizonCard,
  StyledThumbnail,
  StyledWrapThumbnail,
  StyledContentArea,
  StyledWrapStarsAndAuthor,
  StyledTitle,
  StyledDescription,
  StyledAuthor,
} from './styled';
import { FakeAPIResponseProps } from '../../../interfaces';
import Stars from '../../Stars';

const HorizontalCard: FC<FakeAPIResponseProps> = ({ imgURL, numberOfStars, cardTitle, descriptionText, author }) => {
  return (
    <StyledHorizonCard>
      <StyledWrapThumbnail>
        <StyledThumbnail thumbnail={imgURL} />
      </StyledWrapThumbnail>
      <StyledContentArea>
        <StyledTitle>{cardTitle}</StyledTitle>
        <StyledDescription>{descriptionText}</StyledDescription>
        {numberOfStars || descriptionText ? (
          <StyledWrapStarsAndAuthor>
            {numberOfStars ? <Stars number={numberOfStars} /> : null}
            {author && <StyledAuthor>{author}</StyledAuthor>}
          </StyledWrapStarsAndAuthor>
        ) : null}
      </StyledContentArea>
    </StyledHorizonCard>
  );
};

export default HorizontalCard;
