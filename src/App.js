import "./App.css";

import Box1 from "./components/Box1.jsx";
import Box2 from "./components/Box2.jsx";
import Box3 from "./components/Box3.jsx";
import Box4 from "./components/Box4.jsx";
import Box5 from "./components/Box5.jsx";
import Box6 from "./components/Box6.jsx";
function App() {
  return (
    <>
      <div className="container">
        <div className="container__top">
          <h1>LOVE PEOPLE.</h1>
          <h1>USE THINGS. THE OPPOSITE NEVER WORKS.</h1>
        </div>
        <div className="container__navbar">
          <p>
            <a>HOME</a>
          </p>
          <p>
            <a>ABOUT</a>
          </p>
          <p>
            <a>CONTACT</a>
          </p>
          <p>
            <a>PRODUCTS</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
