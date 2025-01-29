const {
  returnTrue,
  returnReject,
  getNumberArray,
  getObjectAfter5Seconds,
} = require('../src/async');

describe('Async funkciju testai', () => {
  // Testuojame funkcija kuri gra=ina Promise su reiksme true
  test('Tikriname ar returnTrue funkcija grazina Promise su reiksme true', async () => {
    const result = await returnTrue();
    expect(result).toBe(true);
  });

  test('Tikriname ar returnReject funkcija grazina Promise su klaida', async () => {
    expect(returnReject()).rejects.toThrow('Klaida');
  });

  // toContain
  test('Tikriname ar funkcija grazina skaiciu masyva, kuriame yra skaicius 5', async () => {
    const result = await getNumberArray();
    expect(result).toContain(5);
  });

  //  Sukuriame funkcija kuri po 5 sekundziu turetu grazinti objekta
  test('Patikriname, ar funkcija grąžina objektą po 5 sekundžių', async () => {
    const startTime = Date.now();
    await getObjectAfter5Seconds({ name: 'Tomas', age: 25 });
    const endTime = Date.now(); // Pakeistas kintamojo pavadinimas
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).toBeGreaterThanOrEqual(5000); // Pataisyta funkcija
  });
});
