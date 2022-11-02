/*
  Takes a string input and checks if its a valid decimal number or not.
  For a decimal Number to be valid
  - the input starts with a digit, dot(.) or a minus(-)
  - does not have any special charaters
*/

export const isValidDecimal = (input) => {
  const decimalRE =  /^-?\d*\.?\d+$/;
  return decimalRE.test(input);
};