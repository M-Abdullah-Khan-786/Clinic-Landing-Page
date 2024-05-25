import "./App.css";
import BacktoTop from "./components/BacktoTop";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <BacktoTop />
      <HeroSection />
      <Services />
      <Testimonials />
      <ContactUS />
      <Footer />
    </>
  );
};

export default App;
