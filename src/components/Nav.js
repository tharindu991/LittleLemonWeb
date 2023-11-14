import { useState } from "react";

import { ReactComponent as CloseMenu } from "../assets/close.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="nav-container">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <img src="./logo.png" alt="Logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Menu</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Reservations</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="">Order Online</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="">Login</a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
