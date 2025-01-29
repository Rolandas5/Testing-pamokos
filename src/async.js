async function returnTrue() {
  return true;
}

async function returnReject() {
  throw new Error('Klaida');
}

async function getNumberArray() {
  return [1, 2, 3, 5, 7, 9];
}

async function getObjectAfter5Seconds(obj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj);
    }, 5000);
  });
}

// Sukuriame funkcija kuri po 5 sekundziu turetu grazinti objekta

module.exports = {
  returnTrue,
  returnReject,
  getNumberArray,
  getObjectAfter5Seconds,
};
