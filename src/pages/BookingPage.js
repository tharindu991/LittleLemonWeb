import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Title from "../components/Title";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../utils/Api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();

  const occasions = ["Birthday", "Anniversary"];

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccation] = useState(["Birthday"]);

  // will change the availableTimes based on the selected date.
  const updateTimes = (state, action) => {
    const response = fetchAPI(new Date(action));

    return response && response.length !== 0 ? response : state;
  };

  // will create the initial state for the availableTimes.
  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    [],
  ];

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  useEffect(() => {}, [availableTimes]);

  const formSubmission = () => {
    if (submitAPI({ date, time, numOfGuests, occasion }))
      navigate("/booking-confirmed");
  };

  return (
    <>
      <Nav />
      <div className="booking-page-container">
        <Title text={"Table Reservation"} />

        <BookingForm
          date={date}
          setDate={setDate}
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
          occasions={occasions}
          setTime={setTime}
          time={time}
          numOfGuests={numOfGuests}
          setNumOfGuests={setNumOfGuests}
          setOccation={setOccation}
          occasion={occasion}
          submitForm={formSubmission}
        />
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
