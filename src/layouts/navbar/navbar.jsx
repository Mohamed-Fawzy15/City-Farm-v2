import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarStyle.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`nav navbar navbar-expand-lg navbar-dark position-sticky ${
        scrolled ? "bg-dark" : "bg-dark"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          {/* <img src={logo} alt="City Farm USA logo" /> */}
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"about"}>
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to={"products"}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"media"}>
                Media
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"contact"}>
                Contact Us
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
