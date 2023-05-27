import "./styles.css";
import { Routes,Route } from 'react-router-dom';


import Navbar from "././components/Navbar.jsx";
import Home from "./routes/Home.jsx";
// import About from "./routes/About";
// import Service from "./routes/Service";
// import Contact from "./routes/Contact";
// import Signin from "./routes/Signin";
// import Signup from "./routes/Signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path ='/' elements={<Home/>}/> 
      <Route path ='/navbar' elements={<Navbar/>}/> 
      {/* <Route path ='/about' elements={<About/>}/> 
      <Route path ='/contact' elements={<Contact/>}/> 
      <Route path ='/service' elements={<Service/>}/> 
      <Route path ='/signin' elements={<Signin/>}/> 
      <Route path ='/signup' elements={<Signup/>}/>  */}
        </Routes> 
     
    </div>
  )
    };
 export default  App;