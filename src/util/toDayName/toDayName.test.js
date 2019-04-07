import toDayName from "./index";

test("Should return the day's name in abbreviation format", () => {
  expect(toDayName(0)).toBe("Sun");
  expect(toDayName(1)).toBe("Mon");
  expect(toDayName(2)).toBe("Tues");
  expect(toDayName(3)).toBe("Wed");
  expect(toDayName(4)).toBe("Thurs");
  expect(toDayName(5)).toBe("Fri");
  expect(toDayName(6)).toBe("Sat");
});

test("Should throw an error when argument value is out of 0 to 6 range", () => {
  expect(() => {
    toDayName(12);
  }).toThrow("12 is invalid. Pick a number 0 - 6");
});
