import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Car, CarPropTypes } from './Car';
import cars from '../../data/database.json';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';
import { CartPropTypes } from '../../bll/reducers/cartReducer';

const setUp = (props: CarPropTypes) => (
  <BrowserRouter>
    <Provider store={store}>
      <Car {...props} />
    </Provider>
  </BrowserRouter>
);

describe('Car componenet', () => {
  let car: CartPropTypes;
  beforeEach(() => {
    car = { ...cars[0], amount: 0, total: 0 };
  });
  test('check only text render', () => {
    i18n.init();
    const { getAllByAltText, getByText } = render(setUp({ ...car }));
    expect(getAllByAltText(/car/i)).toBeDefined();
    expect(getByText(/Add to cart/i)).toBeInTheDocument();
    expect(getByText(`Model: ${car.brand} ${car.model}`)).toBeInTheDocument();
    expect(getByText(`Price: ${car.price}$`)).toBeInTheDocument();
    expect(getByText(`Description: ${car.description}`)).toBeInTheDocument();
  });
});
