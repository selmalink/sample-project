import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleToggle() {
    setHamburgerOpen((v) => !v);
  }

  // Close mobile menu when viewport becomes wide or when navigation occurs
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setHamburgerOpen(false);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="nav-container">
      <div className="navbar">
        <NavLink to="/" className="logo" onClick={() => setHamburgerOpen(false)}>
          {/* Use the project's Vite logo if available; falls back to text */}
          <img src="/vite.svg" alt="Site logo" className="logo-img" />
        </NavLink>

        <nav>
          <button
            className="hamburgerButton"
            aria-label={hamburgerOpen ? "Close menu" : "Open menu"}
            aria-expanded={hamburgerOpen}
            onClick={handleToggle}
            type="button"
          >
            <svg
              className={`ham-icon ${hamburgerOpen ? "open" : ""}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="line top" d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path className="line middle" d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path className="line bottom" d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <ul className={`menuNav${hamburgerOpen ? " showMenu" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => "navigator" + (isActive ? " active" : "")}
                onClick={() => setHamburgerOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => "navigator" + (isActive ? " active" : "")}
                onClick={() => setHamburgerOpen(false)}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => "navigator" + (isActive ? " active" : "")}
                onClick={() => setHamburgerOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/map"
                className={({ isActive }) => "navigator" + (isActive ? " active" : "")}
                onClick={() => setHamburgerOpen(false)}
              >
                Map
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


