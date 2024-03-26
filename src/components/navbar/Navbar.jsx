import "./Navbar.css";
import imgLogo from "../../../public/images/logo.svg";
import imgMenuOpen from "../../../public/images/icon-menu.svg";
import imgMenuClose from "../../../public/images/icon-menu-close.svg";
import {NavLink} from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return(
    <div className="container__header">
      <header>
        <img src={imgLogo}/>
        <nav className={isOpen ? "open" : ""}>
          <ul>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/">Home</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/new">New</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/popular">Popular</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/trending">Trending</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/categories">Categories</NavLink></li>
          </ul>
        </nav>
              {
                isOpen
                ?<img onClick={() => setIsOpen(!isOpen)} className="icon__menuClose"  src={imgMenuClose}/>
                :<img onClick={() => setIsOpen(!isOpen)} className="icon__menuOpen" src={imgMenuOpen}/>
              }
      </header>
    </div>
  )
}

export default Navbar;