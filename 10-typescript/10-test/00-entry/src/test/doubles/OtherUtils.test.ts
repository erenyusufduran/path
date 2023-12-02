import { OtherStringUtils, calculateComplexity, toUpperCaseWithCb } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
  //spies
  describe.only('OtherStringUtils tests with spies', () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test('Use a spy to track calls', () => {
      const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
      sut.toUpperCase('asa');
      expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
    });

    test('Use a spy to track calls to other module', () => {
      const consoleLogSpy = jest.spyOn(sut, 'logString');
      sut.logString('abc');
      expect(consoleLogSpy).toHaveBeenCalledWith('abc');
    });

    test('Use a spy to replace the implementation of a method', () => {
      jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
        console.log('Calling mocked implementation');
      });
      sut.callExternalService();
    });
  });

  // mocks
  describe('Tracking callbacks with Jest Mocks', () => {
    const callbackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Calls callback for invalid argument - tracks calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith('Invalid argument!');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it('Calls callback for valid argument - tracks calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toHaveBeenCalledWith('Called function with abc');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });

  // mocks
  describe('Tracking callbacks', () => {
    let cbArgs = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      // clearing tracking fields
      cbArgs = [];
      timesCalled = 0;
    });

    it('Calls callback for invalid argument - tracks calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('Invalid argument!');
      expect(timesCalled).toBe(1);
    });

    it('Calls callback for valid argument - tracks calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(cbArgs).toContain('Called function with abc');
      expect(timesCalled).toBe(1);
    });
  });

  // fakes
  it('toUpperCase - calls callback for invalid argument', () => {
    const actual = toUpperCaseWithCb('', () => {});
    expect(actual).toBeUndefined();
  });

  it('toUpperCase - calls callback for valid argument', () => {
    const actual = toUpperCaseWithCb('abc', () => {});
    expect(actual).toBe('ABC');
  });

  // stubs
  it('Calculates complexity', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo',
      },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
