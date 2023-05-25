import { Component } from "react";
import { BsHouseHeart } from 'react-icons/bs';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdConnectWithoutContact } from 'react-icons/md';

import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
<h1 className="navbar-logo">FeelingInFly</h1>
<ul className="nav-menu">
   { MenuItems.map((item,index) => {
    return(
      <li key={index}><a className={item.cName} href='/'> <i className={item.icon}></i>{item.title}</a></li>
    );
  })}
 <button>Sign Up</button>
 <button>Sign In</button>
</ul>
      </nav>
    );
  }
}

export default Navbar;
