import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Provided from './components/Provided/Provided';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Services />
      <Products heading="Popular Service Products" />
      <Products heading="All Popular Service Providers" />
      <Provided />
    </div>
  );
}

export default App;
