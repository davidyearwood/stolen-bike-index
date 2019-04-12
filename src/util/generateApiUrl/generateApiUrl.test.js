import generateApiUrl from "./generateApiUrl";

test("It should add query parameters to the URL", () => {
  const queryParams = {
    page: 1,
    per_page: 30,
    proximity_square: 50,
  };

  const url = generateApiUrl(queryParams);

  expect(url.searchParams.get("page")).toBe("1");
  expect(url.searchParams.get("proximity_square")).toBe("50");
  expect(url.searchParams.get("per_page")).toBe("30");
});
