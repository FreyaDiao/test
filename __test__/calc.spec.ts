import calc from '../src'

test('The minus calculation result should be 996.', () => {
  expect(calc(1024, 28, 'minus')).toBe(996)
})

test('The plus calculation result should be 100.', () => {
  expect(calc(50, 50)).toBe(100)
})
