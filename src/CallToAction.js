import { useNavigate } from "react-router-dom";
import "./CallToAction.css";
import signatureDish from "./assets/signature-dish.png";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">The Grill</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <button
          className="hero-btn"
          type="button"
          aria-label="On Click"
          onClick={() => navigate("/reservations")}
        >
          Reserve a Table
        </button>
      </div>
      <img src={signatureDish} alt="The Grill restaurant dish" className="hero-img" width="300" height="300" />
    </section>
  );
}

export default CallToAction;