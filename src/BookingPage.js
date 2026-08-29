import { Helmet } from "react-helmet-async";
import "./BookingPage.css";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
    <Helmet>
      <title>Reserve a Table | The Grill</title>
      <meta name="description" content="Book your table at The Grill, Chicago's family-owned Mediterranean restaurant." />
    </Helmet>
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Fill in the details below and we'll have your table ready.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
    </>
  );
}

export default BookingPage;