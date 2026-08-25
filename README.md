# The Grill — Restaurant Web App

A responsive React web application for The Grill, a family-owned Mediterranean restaurant in Chicago. Built as a capstone project covering component architecture, routing, form handling, API integration, accessibility, and testing.

## Features

- Responsive homepage with hero section, weekly specials, customer testimonials, and restaurant story
- Table reservation system with live availability by date
- Client-side form validation (HTML5 + React)
- Booking confirmation flow
- Accessible markup with semantic HTML and ARIA attributes
- Unit tests for components and reducer logic

## Tech Stack

- React (Create React App)
- React Router (`react-router-dom`)
- React Testing Library / Jest
- CSS (no framework — custom styles)

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes bundled with Node.js)

## Getting Started

1. Clone the repository:
```bash
   https://github.com/hadeedahsan/Capstone-repo.git
   cd Capstone-repo
```

2. Install dependencies:
```bash
   npm install
```

3. Start the development server:
```bash
   npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm test` | Runs the test suite in watch mode |
| `npm run build` | Builds the app for production to the `build` folder |

## Project Structure
```
src/
├── App.js Root component, layout wrapper
├── Header.js Logo/header bar
├── Nav.js Site navigation
├── Main.js Route definitions, availableTimes state
├── Footer.js Site footer
├── Homepage.js Assembles homepage sections
├── CallToAction.js Hero section
├── Specials.js Weekly specials (data-driven)
├── CustomersSay.js Testimonials
├── Chicago.js Restaurant story section
├── BookingPage.js Reservation page wrapper
├── BookingForm.js Controlled reservation form
├── ConfirmedBooking.js Booking confirmation page
└── assets/ Images
```
## Testing

Run all unit tests:
```bash
npm test
```

Tests cover:
- Static content rendering
- Form field validation (required fields, min/max constraints)
- Reducer logic for available booking times

## Notes

- The booking API (`fetchAPI` / `submitAPI`) is loaded via an external script in `public/index.html` and is used for demo/course purposes.
- This project was built as part of a Meta React coursework capstone.