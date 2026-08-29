import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Main.css";
import { lazy, Suspense } from "react";
import Homepage from "./Homepage";

const BookingPage = lazy(() => import("./BookingPage"));
const ConfirmedBooking = lazy(() => import("./ConfirmedBooking"));
const NotFound = lazy(() => import("./NotFound"));
const AboutPage = lazy(() => import("./AboutPage"));
const MenuPage = lazy(() => import("./MenuPage"));
const OrderPage = lazy(() => import("./OrderPage"));
const LoginPage = lazy(() => import("./LoginPage"));
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
      <Suspense fallback={<div style={{ padding: "60px", textAlign: "center" }}>Loading...</div>}>
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
      </Suspense>
    </main>
  );
}

export default Main;