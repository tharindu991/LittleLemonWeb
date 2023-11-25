import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("renders the date label", () => {
  render(<BookingPage />);
  const dateElement = screen.getByText("Choose date");
  expect(dateElement).toBeInTheDocument();
});
