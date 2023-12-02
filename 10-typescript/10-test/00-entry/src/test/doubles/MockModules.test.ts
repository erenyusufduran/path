jest.mock('../../app/doubles/OtherUtils', () => ({
  ...jest.requireActual('../../app/doubles/OtherUtils'),
  calculateComplexity: () => 10,
}));
jest.mock('uuid', () => ({
  v4: () => '123',
}));
import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('module tests', () => {
  test('Calculate complexity', () => {
    const result = OtherUtils.calculateComplexity({} as any);
    console.log(result);
  });

  test('keep other functions', () => {
    const result = OtherUtils.toUpperCase('abc');
    expect(result).toBe('ABC');
  });

  test('string with id', () => {
    const result = OtherUtils.toLowerCaseWithId('ABC');
    console.log(result);
  });
});
