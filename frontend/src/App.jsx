import React from "react";
// import axios from "axios";
import Content from "./Content";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
