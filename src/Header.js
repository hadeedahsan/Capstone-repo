import './Header.css';
import logo from './assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="The Grill Restaurant logo" />
    </header>
  );
}

export default Header;