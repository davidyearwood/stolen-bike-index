import React from "react";
import { render } from "react-testing-library";
import Header from "../index";

test("It should render header component", () => {
  const { queryByText } = render(<Header />);

  describe(queryByText("Stolen Bike Index")).toBeVisible();
});
