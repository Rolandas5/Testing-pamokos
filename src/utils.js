function isEven(number) {
  // tikrina boolena ar skaicius yra lyginis
  return number % 2 === 0;
}

function averageArray(array) {
  return array.reduce((sum, num) => sum + num, 0) / array.length;
}

function cloneObject(obj) {
  return { ...obj };
}

// 1. Sukurkite funkciją, kuri skaičiuoja žodžių kiekį tekste.
function zodziai(text) {
  if (typeof text !== 'string') {
    throw new Error('Netiesingas duomenu tipas! Reikia String tipo!');
  }
  return text.length;
}

// 2. Sukurkite funkciją, kuri grąžina skaičiaus kvadratą.
function squareNumber(number) {
  if (typeof number !== 'number') {
    throw new Error('Neteisingas duomenų tipas! Reikia Number tipo!');
  }
  return number * number;
}

// 3. Sukurkite funkciją, kuri apskaičiuoja kvadrato perimetrą.
function squarePerimeter(side) {
  if (side <= 0) {
    throw new Error('Kvadrato krastine negali buti minusine!');
  }
  if (typeof side !== 'number') {
    throw new Error('Neteisingas duomenų tipas! Reikia Number tipo!');
  }

  return 4 * side;
}

// 4. Sukurkite funkciją, kuri kaip argumentą priimtų skaičių masyvą. Funkcijos esmė grąžinti didžiausią skaičių. Parašykite keletą testų patikrinimui ar jūsų funkcija veikia tinkamai.
function biggestNumber(array) {
  if (array.length === 0) {
    throw new Error('Masyvas negali buti tuscias!');
  }
  return Math.max(...array);
}

// 5. Sukurkite funkciją, kuri jums visada grąžins null. Naudojantis .toBeNull() patikrinkite ar jūsų funkcija veikia tinkamai.
function returrnNull() {
  return null;
}

module.exports = {
  isEven,
  averageArray,
  cloneObject,
  zodziai,
  squareNumber,
  squarePerimeter,
  biggestNumber,
  returrnNull,
};
