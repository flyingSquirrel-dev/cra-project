import React, { FC } from 'react';
import {
  StyledThumbnail,
  StyledVerticalCard,
  StyledDescriptionArea,
  StyledLabel,
  StyledTitle,
  StyledHighLight,
  StyledCrossOut,
  StyledWrapHighLight,
  StyledWrapStarsAndDescription,
  StyledSubDescription,
} from './styled';
import { setCommasIfNumber } from '../../../utils';
import Stars from '../../Stars';
import { FakeAPIResponseProps } from '../../../interfaces';

const VerticalCard: FC<FakeAPIResponseProps> = ({
  imgURL,
  numberOfStars,
  url,
  cardLabel,
  cardTitle,
  highLight,
  crossOut,
  descriptionText,
}) => (
  <StyledVerticalCard tabIndex={0} data-testid="VerticalCard">
    <StyledThumbnail href={url} thumbnail={imgURL} tabIndex={0} aria-label={cardTitle} />
    <StyledDescriptionArea>
      <StyledLabel tabIndex={0}>{cardLabel}</StyledLabel>
      <StyledTitle tabIndex={0}>{cardTitle}</StyledTitle>
      <StyledWrapHighLight>
        <StyledHighLight tabIndex={0}>{setCommasIfNumber(highLight)}</StyledHighLight>
        <StyledCrossOut tabIndex={0}>{setCommasIfNumber(crossOut)}</StyledCrossOut>
      </StyledWrapHighLight>
    </StyledDescriptionArea>
    {numberOfStars || descriptionText ? (
      <StyledWrapStarsAndDescription data-testid="StarsAndDescriptionWrapper">
        {numberOfStars ? <Stars number={numberOfStars} tabIndex={0} /> : null}
        {descriptionText && (
          <StyledSubDescription tabIndex={0} data-testid="SubDescription">
            {descriptionText}
          </StyledSubDescription>
        )}
      </StyledWrapStarsAndDescription>
    ) : null}
  </StyledVerticalCard>
);

export default VerticalCard;
