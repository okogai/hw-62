
import "./App.css";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';

function App() {

  return (
    <>
      <Header/>
        <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;
