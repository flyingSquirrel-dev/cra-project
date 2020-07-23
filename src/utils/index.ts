export const setCommasIfNumber = (x: string | number): string => {
  if (typeof x === 'string') return x;

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
