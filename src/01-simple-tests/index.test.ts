
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator(2, 3, Action.ADD);
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator(5, 3, Action.SUBTRACT);
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator(4, 3, Action.MULTIPLY);
    expect(result).toBe(12);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator(6, 2, Action.DIVIDE);
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator(2, 3, Action.EXPONENTIATE);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator(2, 3, 'INVALID_ACTION');
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator('a', 3, Action.ADD);
    expect(result).toBeNull();
  });
});