import Footer from "./componenets/Footer";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import Simplify from "./componenets/Simplify";
import Testimonial from "./componenets/Testimonial";
import Why from "./componenets/Why";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Testimonial />
      <Simplify />
      <Footer />
    </>
  );
}

export default App;
