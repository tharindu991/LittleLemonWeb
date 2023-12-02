const BookingForm = (props) => {
  const {
    date,
    setDate,
    availableTimes,
    dispatchAvailableTimes,
    setTime,
    time,
    numOfGuests,
    setNumOfGuests,
    occasions,
    setOccation,
    occasion,
    submitForm,
  } = props;

  // var defaultDate = date.toISOString().substring(0, 10);

  const handleAvailableTimes = (selectedDate) => {
    setDate(new Date(selectedDate));
    dispatchAvailableTimes(new Date(selectedDate));
  };

  return (
    <form
      className="booking-form"
      onSubmit={() =>
        submitForm({
          date: date,
          time: time,
          numOfGuests: numOfGuests,
          occasion: occasion,
        })
      }
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        // defaultValue={defaultDate}
        onChange={(e) => handleAvailableTimes(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      >
        {availableTimes &&
          availableTimes.map((item) => <option key={item}>{item}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numOfGuests}
        onChange={(e) => setNumOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => setOccation(e.target.value)}
        value={occasion}
      >
        {occasions &&
          occasions.map((item) => <option key={item}>{item}</option>)}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
