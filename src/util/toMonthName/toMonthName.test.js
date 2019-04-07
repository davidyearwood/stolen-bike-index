import toMonthName from "./index";

test("Should return the month's name in abbreviation format", () => {
  expect(toMonthName(0)).toBe("Jan");
  expect(toMonthName(1)).toBe("Feb");
  expect(toMonthName(2)).toBe("Mar");
  expect(toMonthName(3)).toBe("Apr");
  expect(toMonthName(4)).toBe("May");
  expect(toMonthName(5)).toBe("Jun");
  expect(toMonthName(6)).toBe("Jul");
  expect(toMonthName(7)).toBe("Aug");
  expect(toMonthName(8)).toBe("Sept");
  expect(toMonthName(9)).toBe("Oct");
  expect(toMonthName(10)).toBe("Nov");
  expect(toMonthName(11)).toBe("Dec");
});

test("Should throw an error when argument value is out of 0 to 11 range", () => {
  expect(() => {
    toMonthName(12);
  }).toThrow("12 is not a valid month index");
});
