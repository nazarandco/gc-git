import { minSqNum } from './getMinSquaredNumber';

it('should return null', () => {
  const result = minSqNum([]);

  expect(result).toEqual(null);
});

it('should return null', () => {
  const result = minSqNum('string');

  expect(result).toEqual(null);
});

it('should return min abs squared number form array', () => {
  const result = minSqNum([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
