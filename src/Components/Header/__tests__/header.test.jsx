import React from "react";
import { render } from "react-testing-library";
import Header from "../index";

test("It should display 'Stolen Bike Index' as its header", () => {
  const { queryByText } = render(<Header />);

  expect(queryByText("Stolen Bike Index")).toBeVisible();
});

test("It should display 'Chicago Police Department' as its subheader", () => {
  const { queryByText } = render(<Header />);

  expect(queryByText("Chicago Police Department")).toBeVisible();
});
