import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

test("renders login button", () => {
  const wrapper = rtl.render(<Login />);

  const loginButton = wrapper.getByText(/login/i);

  expect(loginButton).toBeVisible();
});
