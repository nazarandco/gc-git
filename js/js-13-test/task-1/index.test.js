import { getEvenNumbers } from './index-test';

it('17 it`s 17', () => {
  expect(17).toEqual(17);
});

it('18 it isn`t 17', () => {
  expect(18).not.toEqual(17);
});

it('getting even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
