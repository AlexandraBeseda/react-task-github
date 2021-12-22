import {
  cartReducer,
  addToCart,
  addAmount,
  deleteCar,
  cleanCart,
  CartPropTypes
} from './cartReducer';
import cars from '../../data/database.json';

describe('Cart reducer tests', () => {
  let initState: Array<CartPropTypes> = [];
  const defaultCartState: Array<CartPropTypes> = [];
  let newState: Array<CartPropTypes> = [];
  beforeEach(() => {
    initState = cartReducer(defaultCartState, addToCart(cars[0]));
  });
  test('add car to cart', () => {
    expect(initState).toHaveLength(1);
  });
  test('add amount to cars', () => {
    newState = cartReducer(initState, addAmount(cars[0].id, 2));
    expect(newState[0].id).toBe(cars[0].id);
    expect(newState[0].amount).toBeGreaterThan(1);
  });
  test('delete car', () => {
    newState = cartReducer(initState, deleteCar(cars[0].id));
    expect(newState.length).toBeLessThan(2);
  });
  test('clean cart', () => {
    const initState2 = cartReducer(initState, addToCart(cars[1]));
    const initState3 = cartReducer(initState2, addToCart(cars[2]));
    expect(initState3).toHaveLength(3);
    const initState4 = cartReducer(initState3, cleanCart());
    expect(initState4).toHaveLength(0);
  });
});
