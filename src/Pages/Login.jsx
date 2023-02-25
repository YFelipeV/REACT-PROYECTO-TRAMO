import logo from "../assets/icons/horizontal.jpg";
import movil1 from "../assets/ilustraciones/movil-inicio.png";
import movil2 from "../assets/ilustraciones/movil-cliente.png";
import login from "../assets/ilustraciones/login.gif";
import ilu from "../assets/ilustraciones/interface.gif";

import { useState } from "react";
import {handleSubmit} from '../api/api'

function Login() {
  const [correoAdmin, setCorreo] = useState("");
  const [passwordAdmin, setContrasenia] = useState("");
  

    const user={
        correoAdmin:correoAdmin,
        passwordAdmin:passwordAdmin
    }

    function handle(event){
        event.preventDefault();
    }

    



  return (
    <>
      <div className="fondo">
        <div className="container py-5 h-100 justify-content-center d-flex container-login ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-1">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <a href="/">
                          <img
                            src={logo}
                            style={{ width: "97%", marginBottom: "17%" }}
                            className="logo-empresa"
                            alt="logo"
                          />
                        </a>
                      </div>
                      {/* <h4 className="mb-4">Iniciar Sesión </h4> */}
                      <form autoComplete="on" onSubmit={handle}>
                        <div className="form mb-4">
                          <label className="form-label">
                            Correo Electronico
                          </label>
                          <input
                            type="email"
                            onChange={(e) => setCorreo(e.target.value)}
                            name="correoAdmin"
                            id="form-label"
                            className="form-control p-3 "
                            placeholder="Ingrese correo electrónico"
                          />
                        </div>

                        <div className="form- mb-2">
                          <label className="form-label">Contraseña</label>
                          <input
                            type="password"
                            onChange={(e) => setContrasenia(e.target.value)}
                            name="passwordAdmin"
                            id="passwordAdmin"
                            className="form-control p-3"
                            placeholder="Ingrese la contraseña"
                          />
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto text-center pt-1 mb-5 pb-1 mt-4">
                          <button
                            type="submit"
                            className="btn text-white gradient-custom-button  w-100 fs- pb-2"
                           onClick={()=>handleSubmit(user)}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                       
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6   contan1">
                    <picture className="d-flex align-items-end justify-content-end mt-4">
                      <img src={login} width={"95%"} alt="" />
                    </picture>
                  </div>

                  {/* <div id="contenedor_2" className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div id="contenedor_2" className="text-white px-3 d-flex justify-content-center py-4 p-md-5 mx-md-4 w-100">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{width: "296px"}} data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="3000">
                            <img src={movil1} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="3000">
                            <img src={movil2} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="3000">
                            <img src={movil1} className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Siguiente</span>
                        </button>
                      </div>
                      
                      
                </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
