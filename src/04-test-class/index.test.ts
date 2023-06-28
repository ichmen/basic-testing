// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  TransferFailedError,
  getBankAccount,
  SynchronizationFailedError,
} from '.';
const initialBalance = 22;

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.getBalance()).toBe(22);
  });
});

test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
  // Write your test here
  const bankAccount = getBankAccount(initialBalance);
  expect(() => bankAccount.withdraw(23)).toThrowError(InsufficientFundsError);
});

test('should throw  error when transferring more than balance', () => {
  // Write your test here

  const bankAccount = getBankAccount(initialBalance);
  const anotherBankAccount = getBankAccount(initialBalance);
  expect(() => bankAccount.transfer(23, anotherBankAccount)).toThrow(
    InsufficientFundsError,
  );
});

test('should throw TransferFailedError error when transferring to the same account', () => {
  // Write your test here
  const bankAccount = getBankAccount(initialBalance);
  expect(() => bankAccount.transfer(21, bankAccount)).toThrow(
    TransferFailedError,
  );
});

test('should deposit money', () => {
  // Write your test here
  const bankAccount = getBankAccount(initialBalance);
  bankAccount.deposit(21);
  expect(bankAccount.getBalance()).toBe(43);
});

test('should withdraw money', () => {
  // Write your test here
  const bankAccount = getBankAccount(initialBalance);
  expect(bankAccount.withdraw(2).getBalance()).toBe(20);
});

test('should transfer money', () => {
  // Write your test here
  const bankAccount = getBankAccount(initialBalance);
  const anotherBankAccount = getBankAccount(initialBalance);
  bankAccount.transfer(20, anotherBankAccount);
  expect(anotherBankAccount.getBalance()).toBe(42);
  expect(bankAccount.getBalance()).toBe(2);
});

test('fetchBalance should return number in case if request did not failed', async () => {
  // Write your tests here
  const bankAccount = getBankAccount(initialBalance);
  const balance = await bankAccount.fetchBalance();
  expect(typeof balance).toBe('number');
});

test('should set new balance if fetchBalance returned number', async () => {
  // Write your tests here
  const bankAccount = getBankAccount(initialBalance);
  jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValueOnce(20);
  await bankAccount.synchronizeBalance();
  expect(bankAccount.getBalance()).toBe(20);
});

test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
  // Write your tests here
  const bankAccount = getBankAccount(initialBalance);
  jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValueOnce(null);
  await expect(bankAccount.synchronizeBalance()).rejects.toThrow(
    SynchronizationFailedError,
  );
});
