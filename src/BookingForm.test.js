import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

const mockAvailableTimes = ["17:00", "18:00", "19:00"];

function renderForm() {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
}

test('Renders the BookingForm heading', () => {
  renderForm();
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// Step 1: HTML5 validation attributes

test('date input has required and min attributes', () => {
  renderForm();
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("min");
});

test('guests input has required, min, and max attributes', () => {
  renderForm();
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test('time select is required', () => {
  renderForm();
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toBeRequired();
});

test('occasion select is required', () => {
  renderForm();
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toBeRequired();
});

// Step 2: JavaScript validation logic (valid + invalid states)

test('submit button is disabled when the date field is empty', () => {
  renderForm();
  const submitButton = screen.getByRole("button", { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button becomes enabled when all fields are valid', () => {
  renderForm();
  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByRole("button", { name: /make your reservation/i });

  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(dateInput, { target: { value: today } });
  fireEvent.change(guestsInput, { target: { value: "4" } });

  expect(submitButton).not.toBeDisabled();
});

test('submit button is disabled and error shows when guests is below the minimum', () => {
  renderForm();
  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByRole("button", { name: /make your reservation/i });

  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(dateInput, { target: { value: today } });
  fireEvent.change(guestsInput, { target: { value: "0" } });

  expect(submitButton).toBeDisabled();
  expect(screen.getByText("Guests must be between 1 and 10.")).toBeInTheDocument();
});

test('submit button is disabled and error shows when a past date is entered', () => {
  renderForm();
  const dateInput = screen.getByLabelText("Choose date");
  const submitButton = screen.getByRole("button", { name: /make your reservation/i });

  fireEvent.change(dateInput, { target: { value: "2020-01-01" } });

  expect(submitButton).toBeDisabled();
  expect(screen.getByText("Please choose today or a future date.")).toBeInTheDocument();
});