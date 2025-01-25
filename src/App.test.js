import { initializeTimes, updateTimes } from "./App";


jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

import { fetchAPI } from "./api";

describe("initializeTimes function", () => {
  test("should call fetchAPI with today's date and return the result", () => {
    const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    fetchAPI.mockReturnValue(mockTimes);


    const result = initializeTimes();

    const today = new Date();
    expect(fetchAPI).toHaveBeenCalledWith(today);

    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes function", () => {
  test("should call fetchAPI with the payload date and return the result", () => {
    const mockUpdatedTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockReturnValue(mockUpdatedTimes);

    const action = { type: "UPDATE_TIMES", payload: new Date("2023-12-01") };
    const initialState = ["17:00", "18:00", "19:00"];
    const result = updateTimes(initialState, action);


    expect(fetchAPI).toHaveBeenCalledWith(action.payload);

    expect(result).toEqual(mockUpdatedTimes);
  });

  test("should return the current state if action type is unsupported", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNSUPPORTED_ACTION" };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
  });
});

