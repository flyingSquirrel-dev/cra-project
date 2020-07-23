export const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/AsterNovi-belgii-flower-1mb.jpg/800px-AsterNovi-belgii-flower-1mb.jpg',
];

interface fakeAPIResponseProps {
  imgURL: string;
  numberOfStars: number;
  cardLabel: string;
  cardTitle: string;
  highLight: string | number;
  crossOut: string | number;
  descriptionText?: string;
}

export const fakeAPIResponse: fakeAPIResponseProps[] = [
  {
    imgURL: 'https://hackercdn.hackerztrickz.com/wp-content/uploads/2019/06/mario_PNG59-821x1024.png',
    numberOfStars: 3,
    cardLabel: '아케이드',
    cardTitle: '즐거운 게임',
    highLight: 30000,
    crossOut: 100000,
    descriptionText: '세상에서 제일 재미있는 게임인 것 같아요. 시간 가는 줄 몰랐어요.',
  },
  {
    imgURL:
      'https://www.lego.com/cdn/cs/aboutus/assets/bltcf9a9efc1be61f2c/Feature_Image.jpg?disable=upscale&width=1920&quality=50',
    numberOfStars: 2,
    cardLabel: '공방',
    cardTitle: '나만의 레고 만들기',
    highLight: '최고의 선물!',
    crossOut: '흔한 레고 이제 그만',
  },
  {
    imgURL: 'https://hackercdn.hackerztrickz.com/wp-content/uploads/2019/06/ezgif.com-webp-to-jpg-2.jpg',
    numberOfStars: 0,
    cardLabel: '달려라 거북',
    cardTitle: '거북이 키우는 노하우 공유 드려요',
    highLight: 1000,
    crossOut: 50000,
  },
];
