import { getDiff } from './index';

const stDat = new Date(2021, 12, 12, 12, 12, 12, 0);
const enDat = new Date(2021, 11, 1, 8, 8, 8, 0);

it('getting correct Date', () => {
  const result = getDiff(stDat, enDat);

  expect(result).toEqual('42d 4h 4m 4s');
});