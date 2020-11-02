const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 15;
  const e = new Manager("Fanny", 1, "Fanny@mail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Fanny", 1, "Fanny@mail.com", 15);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 20;
  const e = new Manager("Joey", 1, "joey@mail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
