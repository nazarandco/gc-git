import { calc } from './calculator';

it('should make + correctly', () => {
  const result = calc('3 + 3');

  expect(result).toEqual('3 + 3 = 6');
});
it('should make - correctly', () => {
  const result = calc('3 - 3');

  expect(result).toEqual('3 - 3 = 0');
});
it('should make * correctly', () => {
  const result = calc('3 * 3');

  expect(result).toEqual('3 * 3 = 9');
});
it('should make / correctly', () => {
  const result = calc('10 / 2');

  expect(result).toEqual('10 / 2 = 5');
});
it('should return null', () => {
  const result = calc(10);

  expect(result).toEqual(null);
});
