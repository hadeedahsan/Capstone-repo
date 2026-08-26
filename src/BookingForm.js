import { useState } from "react";
import "./BookingForm.css";

function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [submitError, setSubmitError] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const formData = { date, time, guests, occasion };
    const success = submitForm(formData);
    if (!success) {
      setSubmitError(true);
    }
  };

  const isDateValid = date !== "" && date >= getToday();
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isFormValid = isDateValid && isGuestsValid && time && occasion;

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
  type="date"
  id="res-date"
  value={date}
  min={getToday()}
  required
  aria-invalid={date !== "" && !isDateValid}
  aria-describedby={date !== "" && !isDateValid ? "date-error" : undefined}
  onChange={handleDateChange}
/>
{date !== "" && !isDateValid && (
  <span className="field-error" id="date-error">Please choose today or a future date.</span>
)}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
  type="number"
  id="guests"
  placeholder="1"
  min="1"
  max="10"
  required
  value={guests}
  aria-invalid={!isGuestsValid}
  aria-describedby={!isGuestsValid ? "guests-error" : undefined}
  onChange={(e) => setGuests(Number(e.target.value))}
/>
{!isGuestsValid && (
  <span className="field-error" id="guests-error">Guests must be between 1 and 10.</span>
)}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      {submitError && (
  <span className="field-error" role="alert">
    Something went wrong submitting your reservation. Please try again.
  </span>
)}
      <input type="submit" value="Make Your Reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;