// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Add })).toBe(5);
  });

  test('should substract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Substract })).toBe(-1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 3, b: 3, action: Action.Divide })).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 2, action: Action.Exponentiate })).toBe(
      4,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 3, b: 3, action: '!' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: 'a', b: 3, action: Action.Divide })).toBe(
      null,
    );
  });
});
