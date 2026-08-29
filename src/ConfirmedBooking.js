import { Helmet } from "react-helmet-async";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <>
    <Helmet>
      <title>Booking Confirmed | The Grill</title>
    </Helmet>
    <section className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for reserving a table with The Grill. We look forward to seeing you.</p>
    </section>
    </>
  );
}

export default ConfirmedBooking;