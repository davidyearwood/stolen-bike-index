import React from "react";
import { render } from "react-testing-library";
import Case from "../index";

test("Case should render passed props that are passed", () => {
  const { queryByText } = render(
    <Case
      title="Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)"
      description="Locked cellar in Warthestrasse 8, Kryptonite U-lock with cable
      both tyres locked to frame. Someone got in and took the whole thing as well
      as forced some storage doors open."
      date={1554667697}
      address="Chicago, Lincoln Yards"
    />,
  );

  expect(queryByText("Sun Apr 7 2019")).toBeVisible();
  expect(queryByText("Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)")).toBeVisible();
  expect(queryByText("Chicago, Lincoln Yards")).toBeVisible();
});
