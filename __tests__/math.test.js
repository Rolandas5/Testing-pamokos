const addNumbers = require('../src/math');

describe('Testuojame matematinius veiksmus', () => {
  test('Testuojame 2 + 2 kad bus 4', () => {
    expect(addNumbers(2, 2)).toBe(4);
  });
  test('Testuojame 1 + 1 kad bus 2', () => {
    expect(addNumbers(1, 1)).toBe(2);
  });
  test('Testuojame 5 + 5 kad bus 10', () => {
    expect(addNumbers(5, 5)).toBe(11);
  });
});
