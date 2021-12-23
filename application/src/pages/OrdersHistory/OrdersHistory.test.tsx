/* eslint-disable jest/expect-expect */
import { OrdersHistory } from './OrdersHistory';
import i18n from '../../utils/i18next';
import { render } from '../../utils/test-utils/test-utils';

describe('OrdersHistory component', () => {
  test('text', () => {
    i18n.init();
    render(<OrdersHistory />);
  });
});
