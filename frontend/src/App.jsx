import React from "react";
// import axios from "axios";
import Home from "./pages/Home";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

function App() {
  /* const getData = () => {
    axios
      .get("https://opendata.agencebio.org/api/gouv/operateurs/")
      .then((response) => console.log(response));
  };
  getData(); */
  return (
    <div className="App">
      <Home />
      <p>c</p>
      <Header />
      <Content />
    </div>
  );
}

export default App;
