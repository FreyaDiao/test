import calc from '../src'

test('The minus calculation result should be 996.', () => {
  expect(calc(1024, 28, 'minus')).toBe(996)
})

test('The plus calculation result should be 100.', () => {
  expect(calc(50, 50)).toBe(100)
})

test('The multiply calculation result should be 900.', () => {
  expect(calc(30, 30, 'multiply')).toBe(900)
})

test('The divide calculation result should be 1.', () => {
  expect(calc(30, 30, 'divide')).toBe(1)
})
