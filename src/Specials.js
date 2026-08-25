import "./Specials.css";
import greekSalad from "./assets/greek-salad.png";
import bruschetta from "./assets/bruschetta.png";
import lemonDessert from "./assets/lemon-dessert.png";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description: "The famous Greek salad of crispy lettuce, peppers, olives and feta cheese, served with our house dressing.",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and topped with olive oil and salt.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemonDessert,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
  },
];

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This Week's Specials</h2>
        <button className="menu-btn" type="button">Online Menu</button>
      </div>

      <div className="specials-cards">
        {specialsData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;