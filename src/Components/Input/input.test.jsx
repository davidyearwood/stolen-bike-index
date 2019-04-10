import React from "react";
import { render } from "react-testing-library";
import Input from "./index";

test("Input should render with a placeholder attribute", () => {
  const { queryByPlaceholderText } = render(<Input placeholder="Search case description" />);

  expect(queryByPlaceholderText("Search case description")).toBeVisible();
});
