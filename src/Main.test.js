import { initializeTimes, updateTimes } from './Main';

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

afterEach(() => {
  delete global.fetchAPI;
});

test('initializeTimes returns the times provided by fetchAPI', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00"]);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns the times provided by fetchAPI for the selected date', () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", payload: "2026-08-25" };

  const newState = updateTimes(state, action);

  expect(newState).toEqual(["17:00", "18:00", "19:00"]);
  expect(global.fetchAPI).toHaveBeenCalled();
});