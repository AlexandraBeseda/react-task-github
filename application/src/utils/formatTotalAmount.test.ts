import { formatTotalAmount } from './formatTotalAmount';

describe('formatTotalAmount function', () => {
  let value;
  let initvalue;
  beforeEach(() => {
    value = 0;
    initvalue = 0;
  });
  test('value should be round up', () => {
    initvalue = 1.5555555;
    value = formatTotalAmount(initvalue);
    expect(value).toBeGreaterThanOrEqual(1.55);
  });
  test('value should not be round', () => {
    initvalue = 1;
    value = formatTotalAmount(initvalue);
    expect(value).toBe(initvalue);
  });

  test('value should be round down', () => {
    initvalue = 0.543;
    value = formatTotalAmount(initvalue);
    expect(value).toBe(0.54);
  });
});
