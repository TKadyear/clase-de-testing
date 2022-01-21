const getTLD = require('../src/js/tld');

test('Devuelve el TLD de la url', () => {
  expect(getTLD('tahichemena.es')).toBe('.es')
})
test('Devuelve el TLD de la url aunque sea una ruta compleja', () => {
  expect(getTLD('epicgames.com/store/es-ES')).toBe('.com')
})
test('Si no hay TLD, devuelve null', () => {
  expect(getTLD(5666)).toBeNull();
  expect(getTLD('mojo_picón')).toBeNull();
})
