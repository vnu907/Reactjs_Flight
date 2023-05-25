import "./styles.css";
import Navbar from "././components/Navbar";
import {Routes } from "react-router-dom";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Service from "./routes/Service";
// import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      {/* <Routes> </Routes> */}
      <Navbar/>
    </div>
  );
}
