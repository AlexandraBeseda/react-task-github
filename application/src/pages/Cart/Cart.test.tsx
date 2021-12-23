/* eslint-disable jest/expect-expect */
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from './Cart';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';
import { render } from './../../utils/test-utils/test-utils';

const setUp = () => <Cart />;
describe('Cart component', () => {
  test('text', () => {
    i18n.init();
    render(setUp());
  });
});
