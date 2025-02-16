import "./index.css";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About.jsx";
import Session from "./pages/Session/Session";
import Footer from "./pages/Footer/Footer.jsx";
import Tickets from "./pages/Tickets/Tickets";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Guidelines from "./pages/Guidelines/Guidelines.jsx";
import Workshop from "./pages/Workshop/Workshop.jsx";
const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Tickets/>
      <Session />
      <Workshop/>
      <Guidelines/>
      <Gallery />
      <Footer />
    </div>
  );
};
export default App;
