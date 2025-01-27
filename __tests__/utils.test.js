const {
  isEven,
  averageArray,
  cloneObject,
  zodziai,
  squareNumber,
  squaresquareNumber,
} = require('../src/utils');
const { maistoProduktai } = require('../src/products');

describe('Testing utils functions', () => {
  test('Tikriname ar skaicius yra lyginis', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  });

  test('Tikriname ar vidurkis skaiciuojamas teisingai', () => {
    expect(averageArray([1, 2, 3, 4])).toBe(2.5);
    expect(averageArray([2, 4, 6, 8])).toBe(5);
  });

  test('Tikriname ar maisto produktuose yra kefyras', () => {
    expect(maistoProduktai).toContain('kefyras');
    expect(maistoProduktai).toContain('limonadas');
  });

  test('Tikriname ar sukurs objekto klona', () => {
    const originalObject = {
      name: 'Jonas',
      age: 25,
    };
    const clonedObject = cloneObject(originalObject);
    expect(clonedObject).toEqual(originalObject);
  });

  // 1. Sukurkite funkciją, kuri skaičiuoja žodžių kiekį tekste.
  test('Tikriname ar raidziu kiekis skaiciuojamas teisingai', () => {
    expect(zodziai('Tekste')).toBe(6);
    expect(zodziai('Ar tekste butu zodziai?')).toBe(23);
    expect(zodziai('')).toBe(0);
    expect(zodziai(' ')).toBe(1);
    expect(zodziai('   ')).toBe(3);
    // Mes tikimes jog funkcija ismes teisinga klaida
    expect(() => zodziai(1)).toThrow(
      'Netiesingas duomenu tipas! Reikia String tipo!'
    );
  });

  // 2. Sukurkite funkciją, kuri grąžina skaičiaus kvadratą.
  test('Tikrianme ar skaiciaus kvadratas skaiciuojamas teisingai', () => {
    expect(squareNumber(5)).toBe(25);
    expect(squareNumber(0)).toBe(0);
    expect(() => squareNumber('abc')).toThrow(
      'Neteisingas duomenų tipas! Reikia Number tipo!'
    );
  });

  // 3. Sukurkite funkciją, kuri apskaičiuoja kvadrato perimetrą.
  test('Tikriname ar kvadrato perimetras apskaiciuojamas teisingai', () => {
    expect(squaresquareNumber(5)).toBe(20);
    expect(squareNumber(0)).toBe(0);
    expect(() => squareNumber('abc')).toThrow(
      'Neteisingas duomenų tipas! Reikia Number tipo!'
    );
  });
});

// 4. Sukurkite funkciją, kuri kaip argumentą priimtų skaičių masyvą. Funkcijos esmė grąžinti didžiausią skaičių. Parašykite keletą testų patikrinimui ar jūsų funkcija veikia tinkamai.
// 5. Sukurkite funkciją, kuri jums visada grąžins null. Naudojantis .toBeNull() patikrinkite ar jūsų funkcija veikia tinkamai.

// https://jestjs.io/
