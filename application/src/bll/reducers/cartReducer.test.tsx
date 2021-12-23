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
  const defaultCartState: Array<CartPropTypes> = [];
  let initState: Array<CartPropTypes> = [];
  let newState: Array<CartPropTypes> = [];
  const defaultStateLenght = 0;
  const initStateLenght = 1;
  let car;
  beforeEach(() => {
    car = { ...cars[0] };
    initState = cartReducer(defaultCartState, addToCart(car));
  });
  test('check defaultState lenght and initState lenght', () => {
    expect(defaultCartState).toHaveLength(defaultStateLenght);
    expect(initState).toHaveLength(initStateLenght);
  });
  test('should be added amount of first car', () => {
    const amountFirstCar = 2;
    newState = cartReducer(initState, addAmount(cars[0].id, amountFirstCar));
    expect(newState[0].id).toBe(cars[0].id);
    expect(newState[0].amount).toBe(amountFirstCar);
  });
  test('initial state should be decrease on one car', () => {
    expect(initState).toHaveLength(initStateLenght);
    newState = cartReducer(initState, deleteCar(cars[0].id));
    expect(newState).toHaveLength(defaultStateLenght);
  });
  test('cart should be clean', () => {
    expect(initState).toHaveLength(initStateLenght);
    const newStateTwoElem = cartReducer(initState, addToCart(cars[1]));
    const newStateTwoElemLenght = 2;
    expect(newStateTwoElem).toHaveLength(newStateTwoElemLenght);
    const newStateThreeElem = cartReducer(newStateTwoElem, addToCart(cars[2]));
    const newStateThreeElemLenght = 3;
    expect(newStateThreeElem).toHaveLength(newStateThreeElemLenght);
    const cleanState = cartReducer(newStateThreeElem, cleanCart());
    expect(cleanState).toHaveLength(defaultStateLenght);
  });
});
