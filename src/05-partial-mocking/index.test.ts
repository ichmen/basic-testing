// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  // const originalModule =
  jest.requireActual<typeof import('./index')>('./index');
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });
  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    // const consoleLog = jest.spyOn(console, 'warn').mockImplementation();
    mockOne();
    mockTwo();
    mockThree();
    expect(mockOne).not.toHaveBeenCalled();
    expect(mockTwo).not.toHaveBeenCalled();
    expect(mockThree).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();
    unmockedFunction();
    expect(consoleLog).toBeCalledTimes(1);
    expect(consoleLog).toBeCalledWith('I am not mocked');
    consoleLog.mockRestore();
  });
});
