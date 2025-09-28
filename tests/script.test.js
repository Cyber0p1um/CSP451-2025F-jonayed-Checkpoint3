// tests/script.test.js
import { jest } from "@jest/globals";

// mock index.js (must be registered before importing the module under test)
jest.unstable_mockModule("../src/index.js", () => ({
  runExample: jest.fn(() => "mock-output"),
}));

describe("script.js", () => {
  it("should call runExample and log the output", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // after the mock is registered, import the mocked module
    const { runExample } = await import("../src/index.js");

    // import script.js (this executes its top-level code once)
    await import("../src/script.js");

    expect(runExample).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Boot:", "mock-output");

    logSpy.mockRestore();
  });
});
