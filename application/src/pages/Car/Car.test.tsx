import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Car } from './Car';
import cars from '../../data/database.json';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';
import { CartPropTypes } from '../../bll/reducers/cartReducer';

let car: CartPropTypes;
const setup = () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Car
          picture={car.picture}
          brand={car.brand}
          model={car.model}
          price={car.price}
          color={car.color}
          length={car.length}
          height={car.height}
          width={car.width}
          description={car.description}
          id={car.id}
        />
      </Provider>
    </BrowserRouter>
  );
};
describe('Car componenet', () => {
  beforeEach(() => {
    car = { ...cars[0], amount: 0, total: 0 };
  });
  test('check only test render', () => {
    act(() => {
      setup();
    });
    i18n.init();
    expect(screen.getAllByAltText('car')).toBeDefined();
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
    expect(
      screen.getByText(`Model: ${car.brand} ${car.model}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Price: ${car.price}$`)).toBeInTheDocument();
    expect(
      screen.getByText(`Description: ${car.description}`)
    ).toBeInTheDocument();
  });
});
