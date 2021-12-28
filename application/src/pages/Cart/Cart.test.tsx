import { Cart } from './Cart';
import i18n from '../../utils/i18next';
import { render } from '../../utils/test-utils/test-utils';

const setUp = () => <Cart />;
describe('Cart component', () => {
  test('text', () => {
    i18n.init();
    render(setUp());
  });
});
