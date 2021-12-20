import { formatTotalAmount } from './formatTotalAmount';

describe('formatTotalAmount function', () => {
  let value;
  beforeEach(() => {
    value = 0;
  });
  test('format 1.5555555 to 1.56', () => {
    value = formatTotalAmount(1.5555555);
    expect(value).toBeGreaterThanOrEqual(1.55);
  });
  test('format 1 to 1', () => {
    value = formatTotalAmount(1);
    expect(value).toBe(1);
  });

  test('format 0.543 to 0.54', () => {
    value = formatTotalAmount(0.543);
    expect(value).toBe(0.54);
  });
});
