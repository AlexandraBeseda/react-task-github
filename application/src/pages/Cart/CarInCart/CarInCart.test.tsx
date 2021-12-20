import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CarInCart } from './CarInCart';
import i18n from '../../../utils/i18next';
import cars from '../../../data/database.json';
import { store } from '../../../bll/store';

describe('CarInCart component', () => {
  beforeEach(() => {});
  test('check only text render', () => {
    i18n.init();

    const car = cars[0];
    render(
      <Provider store={store}>
        <CarInCart
          id={car.id}
          brand={car.brand}
          model={car.model}
          color={car.color}
          picture={car.picture}
          description={car.description}
          price={car.price}
          length={car.length}
          height={car.height}
          width={car.width}
          amount={2}
          total={100500}
        />
      </Provider>
    );
    expect(screen.getByText(`${car.brand} ${car.model}`)).toBeInTheDocument();
    expect(screen.getByText(`${car.price} $`)).toBeInTheDocument();
    expect(screen.getByText('100500 $')).toBeInTheDocument();
  });
});
