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
  const { queryByPlaceholderText, getByTestId } = render(<App />);
  const searchField = queryByPlaceholderText("Search case descriptions");

  fireEvent.change(searchField, { target: { value: "Road bike" } });

  expect(getByTestId("search-form")).toHaveFormValues({
    Case: "Road bike",
  });
});

test("From field should display what the user has input", () => {
  // YYYY-MM-DD
  const { getByTestId } = render(<App />);

  fireEvent.change(getByTestId("fromDate"), { target: { value: "2019-12-31" } });

  expect(getByTestId("search-form")).toHaveFormValues({
    From: "2019-12-31",
  });
});

test("To field should display what the user has input", () => {
  // YYYY-MM-DD
  const { getByTestId, getByLabelText } = render(<App />);

  fireEvent.change(getByLabelText("To"), { target: { value: "2019-12-31" } });

  expect(getByTestId("search-form")).toHaveFormValues({
    To: "2019-12-31",
  });
});
