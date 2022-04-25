import React from "react";
// import axios from "axios";
import Content from "./Content";
import Slider from "./Slider";
import Footer from "./Footer";
import Header from "./Header";

import "../styles/App.css";

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
