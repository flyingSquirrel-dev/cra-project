export const setCommasIfNumber = (x: string | number | undefined): string => {
  if (typeof x === 'undefined') return '';
  if (typeof x === 'string') return x;

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
