import { getDate } from './getDate';

it('sums numbers', () => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  expect(getDate()).toEqual(`${day}.${month}.${year}`);
});
