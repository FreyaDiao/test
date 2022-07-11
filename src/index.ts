const calc = (a: number, b: number, type?: string): number => {
  switch (type) {
    case 'mutiply':
      return a * b
    case 'divide':
      return a / b
    case 'minus':
      return a - b
    default:
      return a + b
  }
}
export default calc
