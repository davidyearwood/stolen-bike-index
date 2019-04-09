import React from "react";
import { render } from "react-testing-library";
import SearchForm from "../index";

test("It should render a search description field", () => {
  const { queryByPlaceholderText } = render(<SearchForm />);

  expect(queryByPlaceholderText("Search case descriptions")).toBeVisible();
});

test("It should render a 'From' field", () => {
  const { queryByPlaceholderText } = render(<SearchForm />);

  expect(queryByPlaceholderText("From")).toBeVisible();
});

test("It should render a 'To' field", () => {
  const { queryByPlaceholderText } = render(<SearchForm />);

  expect(queryByPlaceholderText("To")).toBeVisible();
});

test("It should render a 'Find Cases' button", () => {
  const { queryByText } = render(<SearchForm />);

  expect(queryByText("Find Cases")).toBeVisible();
});
