const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Joey", 1, "joey@mail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Fanny", 1, "Fanny@mail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
