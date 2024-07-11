import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Overview } from "./components/Overview";
import { Gallery } from "./components/Gallery";

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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
