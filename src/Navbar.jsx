import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";
import { useState } from "react";

function Navbar() {
  const navRef = useRef();

  const [active, setActive] = useState(0);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header >
     <h1 id="logo">BUSINESS NAME</h1>
      <nav ref={navRef}>

      <a href="#myhome"
        className={active === 0 ? "active" : ""}
        onClick={() => setActive(0)}
          >HOME</a>
        

        <a href="#myabout"
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
          >ABOUT</a>

<a href="#myservices"
          className={active === 2 ? "active" : ""}
          onClick={() => setActive(2)}
        >SERVICES</a>

        <a href="#mycontact"
          className={active === 3 ? "active" : ""}
          onClick={() => setActive(3)}
        >CONTACT</a>
        <button
          className="nav-btn  nav-close-btn"
          onClick={() => {
            showNavbar();
            hideButton();
          }}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
