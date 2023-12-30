import { useState } from "react";

import { ReactComponent as CloseMenu } from "../assets/close.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/menu">Menu</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/booking">Reservations</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/order">Order Online</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/login">Login</Link>
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
