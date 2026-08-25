import "./Chicago.css";
import outer from "./assets/outer.png";
import interior from "./assets/interior.png";

function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-heading">
      <div className="chicago-text">
        <h2 id="chicago-heading">The Grill</h2>
        <h3>Chicago</h3>
        <p>
          The Grill is owned by two Italian brothers, Mario and Adrian,
          who moved to the United States to pursue their shared dream of
          owning a restaurant. Mario and Adrian's passion for great food
          and welcoming customers is what makes The Grill truly special.
        </p>
      </div>
      <img src={outer} alt="The Grill outdoor seating area" className="chicago-img-1" />
      <img src={interior} alt="The Grill restaurant interior" className="chicago-img-2" />
    </section>
  );
}

export default Chicago;