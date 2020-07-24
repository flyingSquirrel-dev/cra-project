import React, { FC } from 'react';
import VerticalCard from '../../components/Card/VerticalCard';
import HorizontalCard from '../../components/Card/HorizontalCard';
import { PageWrapMenu1 } from './styled';
import { fakeAPIResponse } from '../../misc';
import { CardTypes } from '../../enums';

const Menu1: FC = () => (
  <PageWrapMenu1>
    {fakeAPIResponse.map((payload, index) => {
      if (payload.type.toUpperCase() === CardTypes.VERTICAL) {
        return (
          <VerticalCard
            key={`verticalCard-${index}`}
            type={payload.type}
            imgURL={payload.imgURL}
            numberOfStars={Math.floor(payload.numberOfStars)}
            cardLabel={payload.cardLabel}
            cardTitle={payload.cardTitle}
            highLight={payload.highLight}
            crossOut={payload.crossOut}
            descriptionText={payload.descriptionText}
          />
        );
      }
      return (
        <HorizontalCard
          key={`horizonCard-${index}`}
          type={payload.type}
          imgURL={payload.imgURL}
          numberOfStars={Math.floor(payload.numberOfStars)}
          cardTitle={payload.cardTitle}
          descriptionText={payload.descriptionText}
          author={payload.author}
        />
      );
    })}
  </PageWrapMenu1>
);

export default Menu1;
