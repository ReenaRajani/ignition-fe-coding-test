import { isValidDecimal } from "./isValidDecimal";

describe('isValidDecimal', () => {
  it("returns false for inputs which dont have numbers", () => {
    expect(isValidDecimal('')).toBe(false);
    expect(isValidDecimal(' ')).toBe(false);
    expect(isValidDecimal('/')).toBe(false);
    expect(isValidDecimal('abc')).toBe(false);
    expect(isValidDecimal('12a')).toBe(false);
    expect(isValidDecimal('1.1.1')).toBe(false);
    expect(isValidDecimal('1.1.1.1')).toBe(false);
    expect(isValidDecimal('1..11')).toBe(false);
    expect(isValidDecimal('-11 1')).toBe(false);
    expect(isValidDecimal('--11.1')).toBe(false);
    expect(isValidDecimal('-11.1a')).toBe(false);
    expect(isValidDecimal('-11E1')).toBe(false);
    expect(isValidDecimal('-11,1')).toBe(false);
    expect(isValidDecimal('\n-11')).toBe(false);
    expect(isValidDecimal('1.')).toBe(false);
  });
  
  it("returns true for valid input values ", () => {
    expect(isValidDecimal('1')).toBe(true);
    expect(isValidDecimal('0')).toBe(true);
    expect(isValidDecimal('1.1')).toBe(true);
    expect(isValidDecimal('.1')).toBe(true);
    expect(isValidDecimal('0.1')).toBe(true);
    expect(isValidDecimal('-0.1')).toBe(true);
    expect(isValidDecimal('-.1')).toBe(true)
    expect(isValidDecimal('112.11')).toBe(true);
    expect(isValidDecimal('-11')).toBe(true);
    expect(isValidDecimal('-11.0')).toBe(true);
    expect(isValidDecimal('1.0')).toBe(true);
    expect(isValidDecimal('112.11111')).toBe(true);
  });

});

