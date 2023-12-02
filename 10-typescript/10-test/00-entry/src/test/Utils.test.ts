import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  test('Should return uppercase of valid string', () => {
    // arrange:
    const sut = toUpperCase;
    const expected = 'ABC';
    // act:
    const actual = sut('abc');

    // assert:
    expect(actual).toBe(expected);
  });

  describe('toUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
      { input: 'eren', expected: 'EREN' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    test('Return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });
    test('Return right lowercase', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    });
    test('Return right uppercase', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });
    test('Return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-']));
    });
    test('Return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
