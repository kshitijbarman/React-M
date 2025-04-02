import React from "react";
import Navbar from "../components/Navbar";
import Slidebar from "./../components/Slidebar";
import ApiFetch from "../components/ApiFetch";
import Hero from "../components/hero";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <Slidebar /> */}
       <Hero/>
      <ApiFetch />
    </div>
  );
};

export default HomePage;
