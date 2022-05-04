import React from "react";
import Slider from "../components/Slider";
import CardHome from "../components/CardHome";
import LabelSearch from "../components/LabelSearch";

export default function Home() {
  return (
    <div>
      <Slider />
      <CardHome />
      <LabelSearch />
    </div>
  );
}
