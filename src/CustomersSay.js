import "./CustomersSay.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    review: "Best Mediterranean food in Chicago. The lemon dessert alone is worth the visit.",
  },
  {
    id: 2,
    name: "James R.",
    rating: 4,
    review: "Great atmosphere and friendly staff. Bruschetta was fresh and flavorful.",
  },
  {
    id: 3,
    name: "Amara K.",
    rating: 5,
    review: "Family owned and it shows — every dish felt like it was made with care.",
  },
];

function CustomersSay() {
  return (
    <section className="customers-say" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
</div>
            <p className="review-text">"{t.review}"</p>
            <p className="reviewer-name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;