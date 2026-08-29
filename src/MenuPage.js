import { Helmet } from "react-helmet-async";
import "./MenuPage.css";
import { menuData } from "./menuData";

function MenuPage() {
  return (
    <>
    <Helmet>
      <title>Menu | The Grill</title>
<meta name="description" content="Explore The Grill's full menu of Mediterranean starters, mains, desserts, and drinks." />
    </Helmet>
    <section className="menu-page" aria-labelledby="menu-page-heading">
      <div className="menu-hero">
        <h1 id="menu-page-heading">Our Menu</h1>
        <p>Mediterranean classics, made fresh daily.</p>
      </div>

      {menuData.map((section) => (
        <div className="menu-category" key={section.category}>
          <h2>{section.category}</h2>
          <div className="menu-items">
            {section.items.map((item) => (
              <div className="menu-item-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </>
  );
}

export default MenuPage;