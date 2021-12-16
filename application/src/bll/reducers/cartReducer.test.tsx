import {
  cartReducer,
  addToCart,
  addAmount,
  deleteCar,
  cleanCart,
  CartPropTypes
} from './cartReducer';
import cars from '../../data/database.json';

const defaultCartState: Array<CartPropTypes> = [];

describe('cart reducer tests', () => {
  test('add car to cart', () => {
    const action = addToCart(cars[0]);
    const newState = cartReducer(defaultCartState, action);
    expect(newState).toHaveLength(1);
  });
  test('add amount to cars', () => {
    const initState = cartReducer(defaultCartState, addToCart(cars[0]));
    const newState = cartReducer(initState, addAmount(cars[0].id, 2));
    expect(newState[0].id).toBe(cars[0].id);
    expect(newState[0].amount).toBeGreaterThan(1);
  });
  test('delete car', () => {
    const initState = cartReducer(defaultCartState, addToCart(cars[0]));
    const newState = cartReducer(initState, deleteCar(cars[0].id));
    expect(newState.length).toBeLessThan(2);
  });
  test('clean cart', () => {
    const initState1 = cartReducer(defaultCartState, addToCart(cars[0]));
    const initState2 = cartReducer(initState1, addToCart(cars[1]));
    const initState3 = cartReducer(initState2, addToCart(cars[2]));
    expect(initState3).toHaveLength(3);
    const initState4 = cartReducer(initState3, cleanCart());
    expect(initState4).toHaveLength(0);
  });
});
