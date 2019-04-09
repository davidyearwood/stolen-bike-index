import React from "react";
import { render } from "react-testing-library";
import Loading from "../index";

test("It should render the error message", () => {
  const { queryByText } = render(<Loading />);

  expect(queryByText("Loading...")).toBeVisible();
});
