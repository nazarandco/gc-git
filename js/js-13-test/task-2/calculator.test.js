import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
    const result = getSquaredNumbers([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 5, 3, 8, 10]);

  expect(result).toEqual([1, 5, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(1, 2);

  expect(result).toEqual(3);
});