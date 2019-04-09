import React from "react";
import { render } from "react-testing-library";
import Pagination from "../index";

test("It should render a 'First' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("First")).toBeVisible();
});

test("It should render a 'Prev' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("Prev")).toBeVisible();
});

test("It should render a 'Next' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("Next")).toBeVisible();
});

test("It should render a 'Last' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("Last")).toBeVisible();
});

test("It should render a '1' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("1")).toBeVisible();
});

test("It should render a '2' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("2")).toBeVisible();
});

test("It should render a '3' button", () => {
  const { queryByText } = render(<Pagination />);

  expect(queryByText("3")).toBeVisible();
});
