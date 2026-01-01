import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./components/Head.jsx";
import Home from "./components/Home.jsx";
import Mat from "./components/Mat.jsx";
import Che from "./components/che.jsx";
import Phy from "./components/Phy.jsx";
import Closer from "./components/Closer.jsx";
import Pyqs from "./components/Pyqs.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div>
      <h1 className=" text-center xl:block hidden text-4xl font-semibold text-red-600">
        ONLY CAN VIEW IN MOBILE/TAB
      </h1>
      <div className="sm:text-4xl xl:hidden">
        <div id="head">
          <Head />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="mat">
          <Mat />
        </div>
        <div id="che">
          <Che />
        </div>
        <div id="phy">
          <Phy />
        </div>
        <div id="pyqs">
          <Pyqs />
        </div>
        <div id="close">
          <Closer />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
