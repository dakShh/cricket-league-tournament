import React, { useState } from "react";
import { scroller } from "react-scroll";
import { useHistory } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(0);
  const history = useHistory();
  const scrollTarget = (target) => scroller.scrollTo(target, { smooth: true, duration: 700 });
  const scrollToPage = async (target) => {
    if (history.location.pathname !== "/") {
      await history.push("/");
    }
    scrollTarget(target);
  };
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
                <a className="custom-nav-link" href="/cricket-league-tournament">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <div onClick={() => scrollToPage("match")} className="custom-nav-link pointer">
                  Matches
                  <span className="visually-hidden">(current)</span>
                </div>
              </li>
              <li className="nav-item">
                <div onClick={() => scrollToPage("result")} className="custom-nav-link pointer">
                  Results
                  <span className="visually-hidden">(current)</span>
                </div>
              </li>
              <li className="nav-item">
                <div onClick={() => scrollToPage("scoreTable")} className="custom-nav-link pointer">
                  Score Table
                  <span className="visually-hidden">(current)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
