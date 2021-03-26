import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

test("Input and Button Render", () => {
  const { getByLabelText, getByRole } = screen;
  render(<Search />);
  const input = getByLabelText(/enter location/i);
  const button = getByRole("button");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
test("Verify input takes in value", async () => {
  const { getByLabelText } = screen;
  render(<Search />);
  const input = getByLabelText(/enter location/i);
  expect(input).toBeInTheDocument();
  await userEvent.type(input, "Tampa");
  expect(input).toHaveValue("Tampa");
});
