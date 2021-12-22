/* eslint-disable jest/expect-expect */
import { Cars } from './Cars';
import { render } from '../../utils/test-utils/test-utils';

describe('Cars component', () => {
  test('render', () => {
    render(<Cars />);
  });
});
