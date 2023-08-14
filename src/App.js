import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Vision from "./pages/Vision/Vision";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Vision" element={<Vision />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
