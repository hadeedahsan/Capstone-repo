import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./OrderPage.css";
import { menuData } from "./menuData";

const allItems = menuData.flatMap((section) => section.items);

function OrderPage() {
  const [cart, setCart] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const cartEntries = Object.entries(cart).map(([id, quantity]) => {
    const item = allItems.find((i) => i.id === Number(id));
    return { ...item, quantity };
  });

  const subtotal = cartEntries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartEntries.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCart({});
  };

  return (
    <>
    <Helmet>
      <title>Order Online | The Grill</title>
<meta name="description" content="Order your favorite Mediterranean dishes from The Grill online." />
    </Helmet>
    <section className="order-page" aria-labelledby="order-page-heading">
      <div className="order-hero">
        <h1 id="order-page-heading">Order Online</h1>
        <p>Add your favorites below — pickup and delivery coming soon.</p>
      </div>

      {orderPlaced && (
        <div className="order-success" role="alert">
          Thanks! Your order has been placed. This is a demo — no payment was processed.
        </div>
      )}

      <div className="order-layout">
        <div className="order-menu">
          {menuData.map((section) => (
            <div className="order-category" key={section.category}>
              <h2>{section.category}</h2>
              <div className="order-items">
                {section.items.map((item) => (
                  <div className="order-item-card" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="order-item-info">
                      <h3>{item.name}</h3>
                      <span className="order-item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <button
                      type="button"
                      className="add-btn"
                      onClick={() => addToCart(item.id)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary" aria-label="Your order">
          <h2>Your Order</h2>
          {cartEntries.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartEntries.map((item) => (
                  <li key={item.id} className="cart-line">
                    <div className="cart-line-info">
                      <span>{item.name}</span>
                      <span className="cart-line-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="cart-line-controls">
                      <button type="button" onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => addToCart(item.id)} aria-label={`Increase ${item.name} quantity`}>+</button>
                      <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>{itemCount} item{itemCount !== 1 ? "s" : ""}</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button type="button" className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
    </>
  );
}

export default OrderPage;