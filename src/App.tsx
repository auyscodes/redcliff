import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Overview } from "./components/Overview";
import { Gallery } from "./components/Gallery";
import { Plan } from "./components/Plan";
import { Features } from "./components/Features";
import { Neighborhood } from "./components/Neighborhood";
import { Realtor } from "./components/Realtor";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="container  px-4 lg:px-12">
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
          <Home />
          <Overview />
          <Gallery />
          <Plan />
          <Features />
          <Neighborhood />
          <Realtor />
        </div>
      </div>
      <div className="bg-rblack text-white">
        <div className="flex justify-center">
          <div className="container  px-4 py-1 lg:px-12">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
