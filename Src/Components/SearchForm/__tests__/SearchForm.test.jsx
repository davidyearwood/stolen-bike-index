import React from "react";
import { render } from "react-testing-library";
import SearchForm from "../index";

test("It should render a search description field", () => {
  const { queryByPlaceholderText } = render(<SearchForm placeholder="Search case descriptions"/>);

  expect(queryByPlaceholderText("Search case for description")).toBeVisible();
});