import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

function App() {
  return (
    <>
    <Navbar />
      <section id="home" className="section">
        {<Hero/>}
      </section>
      <section id="about" className="section">
        {<About/>}
      </section>
      <section id="support" className="section">
        {<Support/>}
      </section>
      <section id="platforms" className="section">
        {<AllInOne/>}
      </section>
      <section id="pricing" className="section">
        {<Pricing/>}
      </section>
      <Footer/>
    </>
  );
}

export default App;
