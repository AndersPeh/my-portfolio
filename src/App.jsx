import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Footer,
} from "./components";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Projects />

        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
