const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "YorkU";
  const e = new Intern("Fanny", 1, "fanny@mail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Fanny", 1, "fanny@mail.com", "YorkU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "YorkU";
  const e = new Intern("Fanny", 1, "fanny@mail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
