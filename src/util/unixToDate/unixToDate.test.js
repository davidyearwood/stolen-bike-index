import unixToDate from "./index";

test("it should return the date in {day month date fullYear} format", () => {
  expect(unixToDate(1554667697)).toBe("Sun Apr 7 2019");
});
