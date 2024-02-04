const addSeparatorToNumber = (number: number): string => {
  const numberString = number.toString().padStart(4, '0');
  const formattedNumber = `${numberString.charAt(0)},${numberString.substring(
    1
  )}`;

  return formattedNumber;
};

export default addSeparatorToNumber;
