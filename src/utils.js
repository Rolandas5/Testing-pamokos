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

// Skukurkite funkcija, kuri skaiciuoja raidziu kieki tekste
function zodziai(text) {
  if (typeof text !== 'string') {
    throw new Error('Netiesingas duomenu tipas! Reikia String tipo!');
  }
  return text.length;
}

// Sukurkite funkcija, kuri grazina skaiciaus kvadrata
function squareNumber(number) {
  if (typeof number !== 'number') {
    throw new Error('Neteisingas duomenų tipas! Reikia Number tipo!');
  }
  return number * number;
}

// Sukurkite funkciją, kuri apskaičiuoja kvadrato perimetrą
function squaresquareNumber(side) {
    if (typeof side !== 'number' || side <= 0) {
      throw new Error('Neteisingas duomenų tipas! Reikia Number tipo!');
    }
    return 4 * side;
  }
module.exports = { isEven, averageArray, cloneObject, zodziai, squareNumber, squaresquareNumber };
