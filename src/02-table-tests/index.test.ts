import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 3, action: 'INVALID_ACTION', expected: null }, // invalid action
  { a: 'a', b: 3, action: Action.Add, expected: null },     // invalid input
];

describe('simpleCalculator', () => {
test.each(testCases)('should calculate $a $action $b and return $expected', ({ a, b, action, expected }) => {
  const result = simpleCalculator({ a, b, action });
  expect(result).toBe(expected);
});
});