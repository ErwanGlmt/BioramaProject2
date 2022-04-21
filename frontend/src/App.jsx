import React from "react";
// import axios from "axios";
import Content from "./Content";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
