import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  return (
    <>
      <div className="top-bar">
        <Header />
        <Nav />
        <ThemeToggle />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;