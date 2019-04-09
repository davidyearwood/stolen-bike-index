import React from "react";
import { render } from "react-testing-library";
import ErrorMessage from "../index";

test("It should render the error message", () => {
  const { queryByText } = render(<ErrorMessage />);

  expect(queryByText("Ooops, something went wrong")).toBeVisible();
});
