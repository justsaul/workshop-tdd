import { something } from "../example";

describe("something test suite", () => {
  test("something return something", () => {
    expect(something()).toBe("something");
  });

  test("given that we provide value greater than 3, we should get that value printed instead", () => {
    expect(something(4)).toBe(4);
  });

  test("given that we provide callback function, it should be called twice, when value is greater than 5", () => {
    const mockedCallback = jest.fn();
    something(6, mockedCallback);
    expect(mockedCallback).toHaveBeenCalledTimes(2);
  });
});
