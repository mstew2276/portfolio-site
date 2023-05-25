import React, { useState, useEffect, Component } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Scroll from "react-scroll";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const ScrollLink = Scroll.ScrollLink;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="dropdown">
                <button class="dropbtn">
                  Projects
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <Link
                  to="/projectsp1"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P1/</Link>
                  <Link
                  to="/projectsp2"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P2/</Link>
                  <Link
                  to="/projectsp3"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P3/</Link>
                  <Link
                  to="/projectsp4"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P4/</Link>
                  <Link
                  to="/projectsp5"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P5/</Link>
                  <Link
                  to="/projectsp6"
                  className="dropdown-projects"
                  onClick={closeMobileMenu}
                  >P6/</Link>
                </div>
                </div>
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
