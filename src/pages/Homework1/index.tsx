import React from 'react';
import VerticalCard from '../../components/Card/VerticalCard';
import { PageWrapHomeWork1 } from './styled';
import { fakeAPIResponse } from '../../misc';

const Homework1: React.FC = () => (
  <PageWrapHomeWork1>
    {fakeAPIResponse.map((payload, index) => (
      <VerticalCard
        key={`verticalCard-${index}`}
        imgURL={payload.imgURL}
        numberOfStars={payload.numberOfStars}
        cardLabel={payload.cardLabel}
        cardTitle={payload.cardTitle}
        highLight={payload.highLight}
        crossOut={payload.crossOut}
        descriptionText={payload.descriptionText}
      />
    ))}
  </PageWrapHomeWork1>
);

export default Homework1;
