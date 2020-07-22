import { images } from '../misc';

export const getRandomThumnail = () => {
  return images[Math.floor(Math.random() * 3)];
};
