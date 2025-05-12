import './App.css';
import Companies from './components/Companies/Companies';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProductivityAutomationSection from './components/ProductivityAutomationSection/ProductivityAutomationSection';
import Teams from './components/Teams/Teams';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Companies/>
      <ProductivityAutomationSection/>
      <Features/>
      <Teams/>
      <Footer/>
    </>
  );
}

export default App;
