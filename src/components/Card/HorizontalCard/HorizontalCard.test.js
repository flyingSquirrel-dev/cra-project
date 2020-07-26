import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HorizontalCard from './index';

afterEach(cleanup);

describe('<HorizontalCard />', () => {
  test('<HorizontalCard /> 렌더링 테스트', () => {
    const properties = {
      imgURL: 'https://i.pinimg.com/564x/78/54/69/785469f406cc57c2d87b785fee934cc5.jpg',
      type: 'horizon',
      numberOfStars: 5,
      cardTitle: '날다람쥐 키우는 노하우 공유 드려요',
      url: '/',
      descriptionText:
        '몸길이 12-13cm, 꼬리길이 11-12cm이며, 머리는 둥글고 꼬리에 긴 털이 술 모양으로 났다. 눈은 둥글고 크다. 몸통의 양 옆으로 늘어진 비막이 앞다리에서 뒷다리까지 이어져 있어 다리를 뻗치면 막이 퍼져 마치 날개 같다. ',
      author: '박지혜',
    };

    const { getByTestId } = render(
      <HorizontalCard
        type={properties.type}
        url={properties.url}
        imgURL={properties.imgURL}
        numberOfStars={Math.floor(properties.numberOfStars)}
        cardTitle={properties.cardTitle}
        descriptionText={properties.descriptionText}
        author={properties.author}
      />,
    );

    expect(getByTestId('HorizontalCard')).toBeInTheDocument();
  });
});
