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

interface VerticalCardProps {
  imgURL: string;
  numberOfStars?: number;
  cardLabel: string;
  cardTitle: string;
  highLight: string | number;
  crossOut: string | number;
  descriptionText?: string;
}

const VerticalCard: FC<VerticalCardProps> = ({
  imgURL,
  numberOfStars,
  cardLabel,
  cardTitle,
  highLight,
  crossOut,
  descriptionText,
}) => (
  <StyledVerticalCard>
    <StyledThumbnail thumbnail={imgURL} />
    <div>
      <StyledDescriptionArea>
        <StyledLabel>{cardLabel}</StyledLabel>
        <StyledTitle>{cardTitle}</StyledTitle>
        <StyledWrapHighLight>
          <StyledHighLight>{setCommasIfNumber(highLight)}</StyledHighLight>
          <StyledCrossOut>{setCommasIfNumber(crossOut)}</StyledCrossOut>
        </StyledWrapHighLight>
      </StyledDescriptionArea>
      {numberOfStars || descriptionText ? (
        <StyledWrapStarsAndDescription>
          {numberOfStars ? <Stars number={numberOfStars} /> : null}
          {descriptionText && <StyledSubDescription>{descriptionText}</StyledSubDescription>}
        </StyledWrapStarsAndDescription>
      ) : null}
    </div>
  </StyledVerticalCard>
);

export default VerticalCard;
