
import "./App.css";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import OurStrategies from './containers/OurStrategies/OurStrategies.tsx';
import Reviews from './containers/Reviews/Reviews.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-strategies" element={<OurStrategies />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
