import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Info from "../pages/Info";
import Contact from "../pages/Contact";
import CardDescription from "../pages/CardDescription";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Content;
