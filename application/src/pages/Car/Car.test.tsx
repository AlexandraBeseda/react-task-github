import { Car, CarPropTypes } from './Car';
import cars from '../../data/database.json';
import i18n from '../../utils/i18next';
import { CartPropTypes } from '../../bll/reducers/cartReducer';
import { render } from '../../utils/test-utils/test-utils';

const setUp = (props: CarPropTypes) => <Car {...props} />;

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
