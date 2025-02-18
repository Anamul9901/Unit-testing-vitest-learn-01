import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import { User } from "./hooks";

let testEmail = "test@gmail.com";
let user;
beforeAll(() => {
  console.log("befor all test run the function----------------");
});
afterAll(() => {
  console.log("after all test run the function----------------");
});
beforeEach(() => {
  user = new User(testEmail);
  console.log("befor every test run the function----------------");
});
afterEach(() => {
  console.log("after every test run the function----------------");
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email"); // check isEmail
});

it("should update the email", () => {
  const newTestEmail = "test2@gmail.com";
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();
  expect(user.email).toBe("");
});
