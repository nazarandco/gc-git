import { reverseArray } from './task1';
import { withdraw } from './task2';
import { getAdults } from './task3';


it('should return null', () => {
  const result = reverseArray(!Array);
  expect(result).toEqual(null);
});
it('shouldn`t return the same array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).not.toEqual([1, 2, 3]);
});
it('should return the reversed array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});


it('should get the rest sum', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('should get the rest sum', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, 0], 'User', 0);
  expect(result).toEqual(-1);
});
it('should return NaN', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John');
  expect(result).toEqual(NaN);
});


it('should return {}', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
it('should return {}', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should return {}', () => {
  const result = getAdults({ Ann: 12, Andrey: -7 });
  expect(result).toEqual({});
});
