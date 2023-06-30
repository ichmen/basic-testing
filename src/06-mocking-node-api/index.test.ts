// Uncomment the code below and write your tests
import path from 'path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
// import { mock } from 'node:test';

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

  const interval = 2000;
  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const mockSetInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(mockSetInterval).toBeCalledTimes(1);
    expect(mockSetInterval).toBeCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callback = jest.fn();
    const callsNumber = 3;
    doStuffByInterval(callback, interval);
    expect(callback).not.toHaveBeenCalled();
    for (let i = 1; i <= callsNumber; i += 1) {
      jest.advanceTimersByTime(interval);
      expect(callback).toBeCalledTimes(i);
    }
  });
});

describe('readFileAsynchronously', () => {
  const filePath = '\\1a.txt';
  jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFile: jest.fn(),
  }));
  test('should call join with pathToFile', async () => {
    // Write your test here
    const mockPath = jest.spyOn(path, 'join');
    readFileAsynchronously(filePath);
    expect(mockPath).toHaveBeenCalledWith(__dirname, filePath);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    (existsSync as jest.Mock) = jest.fn().mockReturnValue(false);
    // const result = await readFileAsynchronously(filePath);
    expect(await readFileAsynchronously(filePath)).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    (existsSync as jest.Mock).mockImplementation(() => true);
    (readFile as unknown as jest.Mock).mockResolvedValue('print me');
    expect(readFileAsynchronously(filePath)).toBe('print me');
  });
});
