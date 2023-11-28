
import './App.css';
import '@splidejs/react-splide/css/core';
import Hero from './components/Hero.jsx'
import CoachinVission from './components/CoachingVission.jsx'
import PersonalDevelopment from './components/PersonalDevelopment.jsx'
import { Navbar } from './components/Navbar.jsx';
import { Pricing } from './components/Pricing.jsx';
import { Contact } from './components/Contact.jsx';
import CardSlider from './components/CardSlider.jsx';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="separator"></div>
    <CoachinVission />
    <div className="separator"></div>
    <PersonalDevelopment />
    <div className="separator"></div>
    <Pricing />
    <div className="separator"></div>
    <Contact />
    </>
  );
}

export default App;
