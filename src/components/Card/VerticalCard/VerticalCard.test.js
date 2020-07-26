import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VerticalCard from './index';

afterEach(cleanup);

describe('<VerticalCard />', () => {
  test('별점 있고, 설명도 있는 <VerticalCard /> 렌더링 테스트', () => {
    const properties = {
      imgURL:
        'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      type: 'vertical',
      numberOfStars: 3,
      cardLabel: '아케이드',
      cardTitle: '즐거운 게임',
      highLight: 30000,
      crossOut: 100000,
      url: '/',
      descriptionText: '세상에서 제일 재미있는 게임인 것 같아요. 시간 가는 줄 몰랐어요.',
    };

    const { getByTestId } = render(
      <VerticalCard
        type={properties.type}
        url={properties.url}
        imgURL={properties.imgURL}
        numberOfStars={Math.floor(properties.numberOfStars)}
        cardLabel={properties.cardLabel}
        cardTitle={properties.cardTitle}
        highLight={properties.highLight}
        crossOut={properties.crossOut}
        descriptionText={properties.descriptionText}
      />,
    );

    expect(getByTestId('VerticalCard')).toBeInTheDocument();
    expect(getByTestId('Stars')).toBeInTheDocument();
    expect(getByTestId('SubDescription')).toBeInTheDocument();
  });

  test('별점 있고, 설명은 없는 <VerticalCard /> 렌더링 테스트', () => {
    const properties = {
      imgURL:
        'https://www.lego.com/cdn/cs/aboutus/assets/bltcf9a9efc1be61f2c/Feature_Image.jpg?disable=upscale&width=1920&quality=50',
      type: 'vertical',
      numberOfStars: 2,
      cardLabel: '공방',
      cardTitle: '나만의 레고 만들기',
      highLight: '최고의 선물!',
      url: '/',
      crossOut: '흔한 레고 이제 그만',
    };

    const { getByTestId } = render(
      <VerticalCard
        type={properties.type}
        url={properties.url}
        imgURL={properties.imgURL}
        numberOfStars={Math.floor(properties.numberOfStars)}
        cardLabel={properties.cardLabel}
        cardTitle={properties.cardTitle}
        highLight={properties.highLight}
        crossOut={properties.crossOut}
        descriptionText={properties.descriptionText}
      />,
    );

    const starsAndDescWrapper = document.querySelector('div[data-testid=StarsAndDescriptionWrapper]').innerHTML;

    expect(getByTestId('VerticalCard')).toBeInTheDocument();
    expect(getByTestId('Stars')).toBeInTheDocument();
    expect(!starsAndDescWrapper.includes('SubDescription')).toBeTruthy();
  });

  test('별점도 없고, 설명도 없는 <VerticalCard /> 렌더링 테스트', () => {
    const properties = {
      imgURL: 'https://hackercdn.hackerztrickz.com/wp-content/uploads/2019/06/ezgif.com-webp-to-jpg-2.jpg',
      type: 'vertical',
      numberOfStars: 0,
      cardLabel: '달려라 거북',
      cardTitle: '거북이 키우는 노하우 공유 드려요',
      highLight: 1000,
      url: '/',
      crossOut: 50000,
    };

    const { getByTestId } = render(
      <VerticalCard
        type={properties.type}
        url={properties.url}
        imgURL={properties.imgURL}
        numberOfStars={Math.floor(properties.numberOfStars)}
        cardLabel={properties.cardLabel}
        cardTitle={properties.cardTitle}
        highLight={properties.highLight}
        crossOut={properties.crossOut}
        descriptionText={properties.descriptionText}
      />,
    );

    const starsAndDescWrapper = document.querySelector('li[data-testid=VerticalCard]').innerHTML;

    expect(getByTestId('VerticalCard')).toBeInTheDocument();
    expect(!starsAndDescWrapper.includes('Stars')).toBeTruthy();
    expect(!starsAndDescWrapper.includes('SubDescription')).toBeTruthy();
  });
});
