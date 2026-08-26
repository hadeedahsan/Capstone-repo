import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      <ul id="nav-menu" className={`nav-list ${isOpen ? "nav-list-open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
        <li><Link to="/order" onClick={closeMenu}>Order Online</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        <li><Link to="/reservations" onClick={closeMenu} className="nav-cta">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;