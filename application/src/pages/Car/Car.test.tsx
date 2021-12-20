import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Car } from './Car';
import cars from '../../data/database.json';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';
import { CartPropTypes } from '../../bll/reducers/cartReducer';

let car: CartPropTypes;

beforeEach(() => {
  car = { ...cars[0], amount: 0, total: 0 };
});
const setup = () => {
  const { getAllByAltText, getByText } = render(
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
  return [getAllByAltText, getByText];
};
describe('Car componenet', () => {
  test('check only text render', () => {
    const [getAllByAltText, getByText] = setup();
    i18n.init();
    expect(getAllByAltText(/car/i)).toBeDefined();
    expect(getByText(/Add to cart/i)).toBeInTheDocument();
    expect(getByText(`Model: ${car.brand} ${car.model}`)).toBeInTheDocument();
    expect(getByText(`Price: ${car.price}$`)).toBeInTheDocument();
    expect(getByText(`Description: ${car.description}`)).toBeInTheDocument();
  });
});
