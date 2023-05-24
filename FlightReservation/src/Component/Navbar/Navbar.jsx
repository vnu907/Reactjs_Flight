import React from "react";
import { SiConsul } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/globe.png";

const Navbar = () => {
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrateFill className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navBarTwo flex">
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>

          <button className="btn flex btnOne">Contact</button>
        </div>
        {
            <button className='btn flex btnTwo'>
            Contact
            </button>
           }
        <div className="toggleIcon">
          <CgMenuGridO className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
