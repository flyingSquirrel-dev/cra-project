import React, { FC } from 'react';
import VerticalCard from '../../components/Card/VerticalCard';
import HorizontalCard from '../../components/Card/HorizontalCard';
import { StyledWrapMenu1 } from './styled';
import { fakeAPIResponse } from '../../misc';
import { CardTypes } from '../../enums';

const Menu1: FC = () => (
  <StyledWrapMenu1 data-testid="menu1-wrapper">
    {fakeAPIResponse.map((payload, index) => {
      const {
        type,
        url,
        imgURL,
        numberOfStars,
        cardLabel,
        cardTitle,
        highLight,
        crossOut,
        descriptionText,
        author,
      } = payload;

      if (type.toUpperCase() === CardTypes.VERTICAL) {
        return (
          <VerticalCard
            key={`verticalCard-${index}`}
            type={type}
            url={url}
            imgURL={imgURL}
            numberOfStars={Math.floor(numberOfStars)}
            cardLabel={cardLabel}
            cardTitle={cardTitle}
            highLight={highLight}
            crossOut={crossOut}
            descriptionText={descriptionText}
          />
        );
      }
      return (
        <HorizontalCard
          key={`horizonCard-${index}`}
          type={type}
          url={url}
          imgURL={imgURL}
          numberOfStars={Math.floor(numberOfStars)}
          cardTitle={cardTitle}
          descriptionText={descriptionText}
          author={author}
        />
      );
    })}
  </StyledWrapMenu1>
);

export default Menu1;
