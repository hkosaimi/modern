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
      </div>
      <Navbar />
    </>
  );
}

export default Home;
