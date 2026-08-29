import { Helmet } from "react-helmet-async";
import "./AboutPage.css";
import interior from "./assets/interior.png";
import outer from "./assets/outer.png";

const team = [
  {
    id: 1,
    name: "Mario Rossi",
    role: "Co-Founder & Head Chef",
    initials: "MR",
  },
  {
    id: 2,
    name: "Adrian Rossi",
    role: "Co-Founder & Restaurant Manager",
    initials: "AR",
  },
];

const values = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description: "We source produce daily from local Chicago markets — nothing sits in a walk-in for long.",
  },
  {
    id: 2,
    title: "Family Recipes",
    description: "Every dish traces back to a recipe passed down through generations, not a corporate menu template.",
  },
  {
    id: 3,
    title: "Warm Hospitality",
    description: "We treat every table like it's in our own home, because to us, it is.",
  },
];

function AboutPage() {
  return (
    <>
       <Helmet>
         <title>Our Story | The Grill</title>
         <meta name="description" content="Meet the owners of The Grill and learn the story behind our Mediterranean recipes." />
       </Helmet>
      
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <h1 id="about-hero-heading">Our Story</h1>
        <p>Two brothers, one dream, and a recipe book worth protecting.</p>
      </section>

      <section className="about-story" aria-labelledby="about-story-heading">
        <div className="about-story-text">
          <h2 id="about-story-heading">From Italy to Chicago</h2>
          <p>
            The Grill was founded by two Italian brothers, Mario and Adrian,
            who moved to the United States with one goal: to bring the
            Mediterranean flavors of their childhood to a new home. What
            started as weekend family dinners turned into a restaurant built
            on the same recipes their grandmother used decades ago.
          </p>
          <p>
            Today, The Grill blends traditional Mediterranean cooking with a
            modern Chicago twist — fresh, seasonal, and always made with
            care. Every dish on our menu carries a piece of that original
            family kitchen.
          </p>
        </div>
        <div className="about-story-images">
          <img src={outer} alt="The Grill outdoor seating area" />
          <img src={interior} alt="The Grill restaurant interior" />
        </div>
      </section>

      <section className="about-team" aria-labelledby="about-team-heading">
        <h2 id="about-team-heading">Meet the Owners</h2>
        <div className="team-cards">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-avatar" aria-hidden="true">{member.initials}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-heading">
        <h2 id="about-values-heading">Why Choose Us</h2>
        <div className="values-cards">
          {values.map((value) => (
            <div className="value-card" key={value.id}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;