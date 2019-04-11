import React from "react";
import { render } from "react-testing-library";
import Pagination from "../index";

test("It should render a 'Prev' button", () => {
  const { queryByText } = render(<Pagination buttonsCount={3} />);

  expect(queryByText("Previous")).toBeVisible();
});

test("It should render a 'Next' button", () => {
  const { queryByText } = render(<Pagination buttonsCount={3} />);

  expect(queryByText("Next")).toBeVisible();
});

test("It should render a '1' button", () => {
  const { queryByText } = render(<Pagination buttonsCount={3} />);

  expect(queryByText("1")).toBeVisible();
});

test("It should render a '2' button", () => {
  const { queryByText } = render(<Pagination buttonsCount={3} />);

  expect(queryByText("2")).toBeVisible();
});

test("It should render a '3' button", () => {
  const { queryByText } = render(<Pagination buttonsCount={3} />);

  expect(queryByText("3")).toBeVisible();
});
