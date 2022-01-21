const sum = require('../src/js/calculator');
test('Test para sum, donde 1+2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
}
)
