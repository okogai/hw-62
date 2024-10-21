import "./App.css";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AboutUs from "./containers/AboutUs/AboutUs.tsx";
import OurStrategies from "./containers/OurStrategies/OurStrategies.tsx";
import Reviews from "./containers/Reviews/Reviews.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ourStrategies" element={<OurStrategies />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="*"
          element={<h1 className="text-center">Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
