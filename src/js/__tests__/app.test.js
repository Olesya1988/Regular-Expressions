import Validator from '../app';

test.each([
  ['Olesya', true],
  ['Ole-sya', true],
  ['Ole_sya', true],
  ['Ole777sya', true],
  ['Ole-777_sya', true],
  ['Olesya777', false],
  ['777Olesya', false],
  ['Olesya-', false],
  ['_Olesya', false],
  ['_Olesya777', false],
  ['Ole7777sya', false],
  ['Олеся', false],
])('testing class Validator for %s name', (name, expected) => {
  const userName = new Validator(name);
  const result = userName.validateUsername();
  expect(result).toBe(expected);
});
