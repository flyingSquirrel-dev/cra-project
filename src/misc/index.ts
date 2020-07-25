import { CustomInputTypesProps, FakeAPIResponseProps } from '../interfaces';

export const fakeAPIResponse: FakeAPIResponseProps[] = [
  {
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
  },
  {
    imgURL:
      'https://www.lego.com/cdn/cs/aboutus/assets/bltcf9a9efc1be61f2c/Feature_Image.jpg?disable=upscale&width=1920&quality=50',
    type: 'vertical',
    numberOfStars: 2,
    cardLabel: '공방',
    cardTitle: '나만의 레고 만들기',
    highLight: '최고의 선물!',
    url: '/',
    crossOut: '흔한 레고 이제 그만',
  },
  {
    imgURL: 'https://hackercdn.hackerztrickz.com/wp-content/uploads/2019/06/ezgif.com-webp-to-jpg-2.jpg',
    type: 'vertical',
    numberOfStars: 0,
    cardLabel: '달려라 거북',
    cardTitle: '거북이 키우는 노하우 공유 드려요',
    highLight: 1000,
    url: '/',
    crossOut: 50000,
  },
  {
    imgURL: 'https://i.pinimg.com/564x/78/54/69/785469f406cc57c2d87b785fee934cc5.jpg',
    type: 'horizon',
    numberOfStars: 5,
    cardTitle: '날다람쥐 키우는 노하우 공유 드려요',
    url: '/',
    descriptionText:
      '몸길이 12-13cm, 꼬리길이 11-12cm이며, 머리는 둥글고 꼬리에 긴 털이 술 모양으로 났다. 눈은 둥글고 크다. 몸통의 양 옆으로 늘어진 비막이 앞다리에서 뒷다리까지 이어져 있어 다리를 뻗치면 막이 퍼져 마치 날개 같다. ',
    author: '박지혜',
  },
];

export const customInputTypes: CustomInputTypesProps[] = [
  {
    isDisable: false,
    isReadOnly: false,
    isButtonNecessary: true,
    buttonCtx: 'Save',
    maxTextLength: 500,
    placeholder: '초기값이 입력되어 있습니다.',
  },
  {
    isDisable: true,
    isReadOnly: false,
    isButtonNecessary: false,
    maxTextLength: 400,
    placeholder: '비활성화 상태입니다.',
  },
  {
    isDisable: false,
    isReadOnly: true,
    isButtonNecessary: false,
    maxTextLength: 300,
    placeholder: '읽기 전용 상태입니다.',
  },
];

export const DISABLE_TEXTAREA = '비활성된 영역으로 텍스트를 입력할 수 없는 영역입니다.';

export const READONLY_TEXTAREA = '읽기 전용 영역으로  텍스트를 입력할 수 없는 영역입니다.';

export const AVAILABLE_TEXTAREA = '텍스트를 입력할 수 있는 영역입니다.';

export const getTextForStars = (stars: number | undefined) => `별점 ${stars || 0}개`;
