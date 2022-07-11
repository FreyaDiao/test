const calc = (a: number, b: number, type?: string): number => {
  switch (type) {
    case 'minus':
      return a - b;
    default:
      return a + b;
  }
}
export default calc
