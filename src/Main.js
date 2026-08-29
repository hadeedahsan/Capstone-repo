import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Main.css";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import NotFound from "./NotFound";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";
/* global fetchAPI, submitAPI */

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type !== "UPDATE_TIMES") {
    return state;
  }
  const selectedDate = action.payload ? new Date(action.payload) : new Date();
  return fetchAPI(selectedDate);
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
    return success;
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;