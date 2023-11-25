import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState, useReducer } from "react";

const BookingPage = () => {
  // const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const occasions = ["Birthday", "Anniversary"];

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occation, setOccation] = useState(["Birthday", "Anniversary"]);

  //This function will change the availableTimes based on the selected date.
  const updateTimes = (state, action) => {
    console.log(">>>>>>state>>>>", state);
    console.log(">>>>>>action>>>>", action);

    // return state;
    return ["18:00", "19:00", "20:00", "22:00"];
  };

  //which will create the initial state for the availableTimes.
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  return (
    <>
      <Nav />
      <div className="booking-page-container">
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
          occation={occation}
        />
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
