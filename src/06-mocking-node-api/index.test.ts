// Uncomment the code below and write your tests
import {
  // readFileAsynchronously,
  doStuffByTimeout,
  doStuffByInterval,
} from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  const callBack = jest.fn();
  const timeOut = 2000;
  test('should set timeout with provided callback and timeout', () => {
    // Write your test here

    const mockSetTimeout = jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(callBack, timeOut);

    expect(mockSetTimeout).toHaveBeenCalledTimes(1);
    expect(mockSetTimeout).toHaveBeenCalledWith(callBack, timeOut);
    jest.runAllTimers();
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    jest.useFakeTimers();
    doStuffByTimeout(callBack, timeOut);
    expect(callBack).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(callBack).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  const callback = jest.fn();
  const interval = 2000;
  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const mockSetInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(mockSetInterval).toBeCalledTimes(1);
    expect(mockSetInterval).toBeCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    // const mockSetInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(1);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
