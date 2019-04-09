import React from "react";
import { render } from "react-testing-library";
import EmptyMessage from "../index";

test("It should render the error message", () => {
  const { queryByText } = render(<EmptyMessage />);

  expect(queryByText("No results")).toBeVisible();
});
