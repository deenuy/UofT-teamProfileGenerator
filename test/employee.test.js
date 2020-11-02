const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');
});

test('Can set name via constructor arguments', () => {
  const name = 'Deenu';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const testValue = 20;
  const e = new Employee('Paul', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
  const testValue = 'joey@mail.com';
  const e = new Employee('Joey', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
  const testValue = 'Stephen';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
  const testValue = 10;
  const e = new Employee('Fanny', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
  const testValue = 'Fanny@mail.com';
  const e = new Employee('Fanny', 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = 'Employee';
  const e = new Employee('Sally', 1, 'sally@mail.com');
  expect(e.getRole()).toBe(testValue);
});
