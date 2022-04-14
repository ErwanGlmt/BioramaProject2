import React from "react";
// import axios from "axios";
import Home from "./pages/Home";
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
    </div>
  );
}

export default App;
