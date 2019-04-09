import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "../App";

test("It should display 'Find Cases' button", () => {
  const { queryByText } = render(<App />);

  expect(queryByText("Find Cases")).toBeVisible();
});

test("Empty state should render on initial load", () => {
  const { queryByText } = render(<App />);

  expect(queryByText("No results")).toBeVisible();
});

test("Search field should display what the user has input", () => {
  const { queryByPlaceholderText, queryByDisplayValue } = render(<App />);
  const searchField = queryByPlaceholderText("Search case descriptions");

  fireEvent.change(searchField, { target: { value: "Road bike" } });

  expect(queryByDisplayValue("Road bike")).toBeVisible();
});
