import Sidebar from "./Sidebar";
import logo from "../../assets/icons/horizontal.jpg";
import "../../css/styleAdmin.css";
import profile from "../../assets/icons/profile.jpg";
import { Link } from "react-router-dom";
import { Loguot } from "../../api/api";
// import jwtDecode from 'jwt-decode';
import { useConductores } from "../../Context/Context";

function Navbar() {
  const { openSidebar } = useConductores();

  //  const token =window.localStorage.getItem("token");
   
  //  const decodedToken = jwtDecode(token);
   

  // if (document.querySelector(".toggle-sidebar-btn")) {
  //   document
  //     .querySelector(".toggle-sidebar-btn")
  //     .addEventListener("click", function (e) {
  //       document.querySelector("body").classList.toggle("toggle-sidebar");
  //     });
  // }

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

          <button className="border-0 bg-white" onClick={() => openSidebar()}>
            <i className="i bi-list toggle-sidebar-btn"></i>
          </button>
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
                  {/* {decodedToken.name} */}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <div className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-box-arrow-right"></i>
                    <Link to={"/"} onClick={() => Loguot()}>
                      Cerrar Sesión
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
