function bin2dec(binaryInput: string | number) {
  const binary = String(binaryInput);

  if (binary.length > 8) {
    throw new Error(`${binary} is bigger with 8 length`);
  }

  if (/[^0-1]/g.test(binary)) {
    throw new Error(`${binary} not is a binary number`);
  }

  let decimal = 0;

  const lengthIndex = binary.length - 1;

  for (let numberBase = lengthIndex; numberBase >= 0; numberBase--) {
    const index = lengthIndex - numberBase;
    const characters = binary.slice(index, index + 1);

    let multiple = 1;

    if (numberBase > 0) {
      multiple = 2 ** numberBase;
    }

    decimal += multiple * Number(characters);
  }

  return decimal;
}

export default bin2dec;
export { bin2dec };
