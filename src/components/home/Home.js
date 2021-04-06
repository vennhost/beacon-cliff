import React from "react";
import Info from "../header/Info";
import NavBar from "../header/Nav";
import Slider from "../slider/HomeSlider";
import HomeGrid from "./HomeGrid";

function Home(props) {
  return (
    <div>
      <Info />
      <NavBar />
      <Slider />
      <h1>Home Page</h1>
      <HomeGrid />
    </div>
  );
}

export default Home;
