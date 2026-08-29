import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | The Grill</title>
      </Helmet>
    <section className="not-found">
      <h1>Page Not Found</h1>
      <p>This page is still on our menu to build. Head back to the homepage.</p>
      <Link to="/" className="not-found-link">Back to Home</Link>
    </section>
    </>
  );
}

export default NotFound;