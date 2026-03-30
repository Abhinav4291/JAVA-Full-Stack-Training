import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all three employee skill tracker versions", () => {
  render(<App />);
  expect(screen.getAllByText(/employee skill tracker/i)).toHaveLength(3);
  expect(screen.getByText(/plain css/i)).toBeInTheDocument();
  expect(screen.getByText(/css modules/i)).toBeInTheDocument();
  expect(screen.getByText(/styled components/i)).toBeInTheDocument();
});
