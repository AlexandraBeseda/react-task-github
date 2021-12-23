import { getDate } from './getDate';

describe('getDate function', () => {
  it('should get todays date', () => {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    expect(getDate()).toEqual(`${day}.${month}.${year}`);
    expect(getDate()).not.toBeNull();
  });
});
