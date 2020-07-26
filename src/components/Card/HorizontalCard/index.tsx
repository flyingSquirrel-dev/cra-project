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

const HorizontalCard: FC<FakeAPIResponseProps> = ({
  imgURL,
  numberOfStars,
  url,
  cardTitle,
  descriptionText,
  author,
}) => {
  return (
    <StyledHorizonCard tabIndex={0} data-testid="HorizontalCard">
      <StyledWrapThumbnail>
        <StyledThumbnail href={url} thumbnail={imgURL} tabIndex={0} aria-label={cardTitle} />
      </StyledWrapThumbnail>
      <StyledContentArea>
        <StyledTitle tabIndex={0}>{cardTitle}</StyledTitle>
        <StyledDescription tabIndex={0}>{descriptionText}</StyledDescription>
        {numberOfStars || descriptionText ? (
          <StyledWrapStarsAndAuthor>
            {numberOfStars ? <Stars tabIndex={0} number={numberOfStars} /> : null}
            {author && <StyledAuthor tabIndex={0}>{author}</StyledAuthor>}
          </StyledWrapStarsAndAuthor>
        ) : null}
      </StyledContentArea>
    </StyledHorizonCard>
  );
};

export default HorizontalCard;
