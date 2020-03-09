import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders home link", () => {
  const wrapper = rtl.render(<App />);

  const homeLink = wrapper.getByText(/secret family recipes/i);

  expect(homeLink).toBeVisible();
});
