import { initializeTimes, updateTimes } from "./App";

describe("initializeTimes function", () => {
  test("should return the correct initial times", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe("updateTimes function", () => {
  test("should return the same state when action type is unsupported", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNSUPPORTED_ACTION" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  test("should return the same state for UPDATE_TIMES action (current placeholder logic)", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
