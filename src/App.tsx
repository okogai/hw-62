
import "./App.css";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import OurStrategies from './containers/OurStrategies/OurStrategies.tsx';

function App() {

  return (
    <>
      <Header/>
        <AboutUs/>
        <OurStrategies/>
      <Footer/>
    </>
  );
}

export default App;
