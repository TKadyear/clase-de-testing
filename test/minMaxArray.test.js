const minMaxArray = require('../src/js/minMaxArray');

test('Devuelve el menor y el mayor', () => {
  expect(minMaxArray([1, 2, 3, 4, 5])).toEqual([1, 5]);
  expect(minMaxArray([1, -2, -3, 4, 15])).toEqual([-3, 15]);
})
test('Devuelve null cuando hay un string', () => {
  expect(minMaxArray('cualquier cosa')).toEqual(null);
})
test('Devuelve false cuando hay algo que no sea número en el array', () => {
  expect(minMaxArray([1, 2, 'tres', 4])).toEqual(false);
})
test('Devuelve el mismo número como valor máximo y como mínimo ', () => {
  expect(minMaxArray(27)).toEqual([27, 27]);
})

