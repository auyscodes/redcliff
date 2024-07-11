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
      <div className="flex justify-center">
        <div className="container font-sans p-4 lg:px-[48px]">
          <NavBar />
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
          <div className="bg-rblack text-white">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
