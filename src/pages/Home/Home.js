import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home__top">
          <h1>LOVE PEOPLE.</h1>
          <h1>USE THINGS. THE OPPOSITE NEVER WORKS.</h1>
        </div>
        <Navbar />
      </div>
      <div className="home__madeby">
        <p>
          Created by <span>Hussain Al-Osaimi</span>
        </p>
      </div>
    </>
  );
}

export default Home;
