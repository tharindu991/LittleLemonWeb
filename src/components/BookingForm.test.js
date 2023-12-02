import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  var d = new Date();
  const today = d.toISOString().substring(0, 10);
  const submitForm = jest.fn((e) => e.preventDefault());

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

  test("should submit form with default values successfully", () => {
    render(
      <BookingForm
        date={today}
        time={availableTimes[0]}
        numOfGuests={1}
        occasion="Birthday"
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    );

    const submitButton = screen.getByText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numOfGuests: 1,
      occasion: "Birthday",
    });
  });
});
