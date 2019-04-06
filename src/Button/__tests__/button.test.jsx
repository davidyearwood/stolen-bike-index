import React from "react";
import { render } from "react-testing-library";
import Button from "../index";

test("Button should render passed props that are passed", () => {
  const { queryByText } = render(<Button>Find Cases</Button>);

  expect(queryByText("Find Cases")).toBeVisible();
});


test("Button should have a 'btn' class name", () => {
  const { queryByText } = render(<Button>Find Cases</Button>);

  expect(queryByText("Find Cases")).toHaveClass("btn");
});
