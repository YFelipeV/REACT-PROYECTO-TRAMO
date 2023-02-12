import "../css/styleAdmin.css";
import Sidebar from "./Sidebar";
import profile from "../assets/icons/profile.jpg";
import logo from "../assets/icons/horizontal.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  
  if (document.querySelector(".toggle-sidebar-btn")) {
    document
      .querySelector(".toggle-sidebar-btn")
      .addEventListener("click", function (e) {
        document.querySelector("body").classList.toggle("toggle-sidebar");
      });
  }
  
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/dashboard" className="me-3">
            <img src={logo} alt="logo_tramo" width="230px"></img>
          </Link>

          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="rounded-circle"
                ></img>

                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Carlos Noguera
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Cerrar Sesión</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar></Sidebar>

     
    </>
  );
}

export default Navbar;
