import { getDiff } from './index';

// const stDat = new Date(2021, 12, 12, 12, 12, 12, 0);
// const enDat = new Date(2021, 11, 1, 8, 8, 8, 0);
// it('getting correct Date', () => {
//   const result = getDiff(stDat, enDat);

//   expect(result).toEqual('42d 4h 4m 4s');
// });


// const stDat1 = new Date(2021, 0, 0, 0, 0, 0, 0);
// const enDat1 = new Date(2021, 11, 1, 8, 8, 8, 0);
// it('getting correct Date1', () => {
//   const result = getDiff(stDat1, enDat1);

//   expect(result).toEqual('335d 8h 8m 8s');
// });

// const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
// const endDate = new Date(Date.UTC(2019, 1, 22, 17, 58, 18));
// it('getting correct Date2', () => {
//   const result = getDiff(startDate, endDate);

//   expect(result).toEqual('275d 2h 52m 16s');
// });

const startDate = new Date(Date.UTC(2019, 10, 24, 20, 45, 34, 44));
const endDate = new Date(Date.UTC(2019, 1, 22, 17, 48, 18));
it('getting correct Date2', () => {
  const result = getDiff(startDate, endDate);

  expect(result).toEqual('275d 2h 57m 16s');
});