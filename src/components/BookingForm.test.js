import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the date label", () => {
  render(
    <BookingForm
      date={""}
      setDate={jest.fn()}
      availableTimes={[]}
      dispatchAvailableTimes={jest.fn()}
      occasions={[]}
      setTime={jest.fn()}
      time={""}
      numOfGuests={"1"}
      setNumOfGuests={jest.fn()}
      setOccation={jest.fn()}
      occation={""}
    />
  );
  const dateElement = screen.getByText("Choose date");
  expect(dateElement).toBeInTheDocument();
});
