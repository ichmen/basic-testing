// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Substract, expected: 1 },
  { a: 4, b: 2, action: Action.Substract, expected: 2 },
  { a: 5, b: 2, action: Action.Substract, expected: 3 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 4, b: 2, action: Action.Multiply, expected: 8 },
  { a: 5, b: 2, action: Action.Multiply, expected: 10 },
  { a: 3, b: 2, action: Action.Divide, expected: 3 / 2 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 5, b: 2, action: Action.Divide, expected: 5 / 2 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 5 ** 2 },
  { a: 5, b: 3, action: Action.Exponentiate, expected: 5 ** 3 },
  { a: 5, b: 4, action: Action.Exponentiate, expected: 5 ** 4 },
  { a: '5', b: 4, action: Action.Exponentiate, expected: null },
  { a: 5, b: 4, action: 'Add', expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  // test('should blah-blah', () => {
  //   expect(true).toBe(true);
  // });
  // Consider to use Jest table tests API to test all cases above
  test.each(testCases)(
    'should perform $action',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
