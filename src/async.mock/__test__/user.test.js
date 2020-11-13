import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    register("123","123").then(data => expect(data).toEqual({}))
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false)
    expect(register("123","123")).rejects.toEqual(new Error("wrong username or password"));
  });
});
