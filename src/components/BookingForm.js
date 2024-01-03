import FormField from "./FormField";
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
      <FormField>
        <label htmlFor="res-date">Choose date</label>
        <input
          aria-label="date"
          min={new Date().toJSON().slice(0, 10)}
          type="date"
          id="res-date"
          onChange={(e) => handleAvailableTimes(e.target.value)}
          required
        />
      </FormField>

      <FormField>
        <label htmlFor="res-time">Choose time</label>
        <select
          aria-label="time"
          id="res-time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
        >
          {availableTimes &&
            availableTimes.map((item) => <option key={item}>{item}</option>)}
        </select>
      </FormField>
      <FormField>
        <label htmlFor="guests">Number of guests</label>
        <input
          aria-label="number of guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(e.target.value)}
          required
        />
      </FormField>
      <FormField>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          aria-label="occation"
          onChange={(e) => setOccation(e.target.value)}
          value={occasion}
          required
        >
          {occasions &&
            occasions.map((item) => <option key={item}>{item}</option>)}
        </select>
      </FormField>
      <div className="submit-button-container">
        <input
          aria-label="Submit and make reservation"
          className="button-container"
          type="submit"
          value="Make Reservation"
        />
      </div>
    </form>
  );
};

export default BookingForm;
