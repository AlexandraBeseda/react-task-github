import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CarInCart } from './CarInCart';
import i18n from '../../../utils/i18next';
import cars from '../../../data/database.json';
import { store } from '../../../bll/store';

import { CartPropTypes } from '../../../bll/reducers/cartReducer';

const setUp = (props: CartPropTypes) => (
  <Provider store={store}>
    <CarInCart {...props} />
  </Provider>
);
describe('CarInCart component', () => {
  let car: CartPropTypes;
  beforeEach(() => {
    car = { ...cars[0], amount: 2, total: 100500 };
  });
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(setUp(car));
    expect(getByText(`${car.brand} ${car.model}`)).toBeInTheDocument();
    expect(getByText(`${car.price} $`)).toBeInTheDocument();
    expect(getByText('100500 $')).toBeInTheDocument();
  });
});
