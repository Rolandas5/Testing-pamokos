function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return 0;
  }
  return a + b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  return a * b;
}

// Pasakome, kad sis failas yra modulis ir todel mes ji galime eksportuoti i kitus failus
module.exports = { addNumbers, multiply };
