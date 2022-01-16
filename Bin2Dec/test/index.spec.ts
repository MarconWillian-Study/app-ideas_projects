import bin2dec from '../src';

describe('Test change binary', () => {
  test('101 binary to 5 decimal', () => {
    const actual = 101;
    const decimalNumber = bin2dec(actual);

    expect(decimalNumber).toBe(parseInt(String(actual), 2));
  });

  test('10101011 binary to 171 decimal', () => {
    const actual = 10101111;
    const decimalNumber = bin2dec(actual);

    expect(decimalNumber).toBe(parseInt(String(actual), 2));
  });

  test('101010101 binary is a error', () => {
    const actual = 101010101;

    expect(() => {
      bin2dec(actual);
    }).toThrowError();
  });
});
