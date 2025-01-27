const { addNumbers, multiply } = require('../src/math');

// Describe - funkcija, kuri leid=ia grupuoti testus

// Unit testas

describe('Testing math function', () => {
  // Test - funkcija, kuri leid=ia aprasyti pati testa
  test('Tikriname ar du skaiciai yra sudedami teisingai', () => {
    // expect - funkcija, kuri leidzia patikrinti ar duotas rezultatas yra teisingas
    // .toBe() - funkcija, kuri tikrina butent gauta reiksme
    expect(addNumbers(1, 2)).toBe(3);
    expect(addNumbers(1, 10)).toBe(11);
    expect(addNumbers(1, '')).toBe(0);
    // situacijai paduodami: 1 ir 'stringas'
    expect(addNumbers(undefined, undefined)).toBe(0);
    // kad ir bus undefined visteik gausime nuli 0
    expect(addNumbers(null, undefined)).toBe(0);
    expect(addNumbers(NaN, NaN)).toBe(0);
    expect(addNumbers(true, 19)).toBe(0);
    expect(addNumbers({}, 10)).toBe(0);
    expect(addNumbers([], 5)).toBe(0);
    // visais penkaiais paskutiniais atvejais gausime nuli 0
  });

  test('Tikriname ar du skaiciai yra sudauginami teisingai', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2.5, 15)).toBe(37.5);
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(null, 5)).toBe(0);
    expect(multiply(undefined, 5)).toBe(0);
    expect(multiply([], {})).toBe(0);
  });

  // Integracinis testas (Integracinis todel, nes testo metu yra tikrinama 2 funkcijos)

  test('Tikriname ar daugybos ir sudeties funkcijos veikia kartu teisingai', () => {
    expect(addNumbers(multiply(2, 2), multiply(2, 4))).toBe(12);
    expect(addNumbers(multiply(2, undefined), multiply(2, 4))).toBe(8);
  });
});

// describe('Testuojame matematinius veiksmus', () => {
//   test('Testuojame 2 + 2 kad bus 4', () => {
//     expect(addNumbers(2, 2)).toBe(4);
//   });
//   test('Testuojame 1 + 1 kad bus 2', () => {
//     expect(addNumbers(1, 1)).toBe(2);
//   });
//   test('Testuojame 5 + 5 kad bus 10', () => {
//     expect(addNumbers(5, 5)).toBe(11);
//   });
// });
