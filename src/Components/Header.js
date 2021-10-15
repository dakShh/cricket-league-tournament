import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(0);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand custom-navbar-brand" href="/">
            Cricket League
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${show ? "show" : null}`} id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="custom-nav-link" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#asd">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#asd">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#asd">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
