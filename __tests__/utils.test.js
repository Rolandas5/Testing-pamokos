const {
  isEven,
  averageArray,
  cloneObject,
  zodziai,
  squareNumber,
  squarePerimeter,
  biggestNumber,
  returrnNull,
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

  // 
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

  // 
  test('Tikrianme ar skaiciaus kvadratas skaiciuojamas teisingai', () => {
    expect(squareNumber(5)).toBe(25);
    expect(squareNumber(0)).toBe(0);
    expect(() => squareNumber('abc')).toThrow(
      'Neteisingas duomenų tipas! Reikia Number tipo!'
    );
  });

  //
  test('Tikriname ar kvadrato perimetras apskaiciuojamas teisingai', () => {
    expect(squarePerimeter(5)).toBe(20);
    expect(() => squarePerimeter(0)).toThrow(
      'Kvadrato krastine negali buti minusine!'
    );
    expect(() => squarePerimeter(-5)).toThrow(
      'Kvadrato krastine negali buti minusine!'
    );
    expect(() => squareNumber('abc')).toThrow(
      'Neteisingas duomenų tipas! Reikia Number tipo!'
    );
  });
  // 
  test('Tikriname ar kvadrato perimetras skaiciuojamas teisingai', () => {
    expect(biggestNumber([1, 2, 3, 4, 5])).toBe(5);
    expect(biggestNumber([-1, -2, -3])).toBe(-1);
    expect(() => biggestNumber('abc')).toThrow('Masyvas negali buti tuscias!');
  });
  //
  test('Tikrianme ar grazina null', () => {
    expect(returrnNull()).toBeNull();
    expect(returrnNull(1)).toBeNull();
    expect(returrnNull('abc')).toBeNull();
    expect(returrnNull([])).toBeNull();
    expect(returrnNull({ name: 'Jonas' })).toBeNull();
  });
});

// https://jestjs.io/
