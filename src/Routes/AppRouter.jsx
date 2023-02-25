import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Header } from "../Components";
import Navbar from "../dashboard/Menus/Navbar";
import Conductores from "../pages/Conductores";
import Login from "../Pages/Login";
import Solicitudes from "../pages/Solicitudes";
import DatosCliente from "../Pages/DatosCliente";
import DatosConductores from "../pages/DatosConductores";
import Historial from "../Pages/Historial";
import Pqrs from "../Pages/Pqrs";
import DatosClienteEmpresa from "../Pages/DatosClienteEmpresa";
import Pagina404 from "../Pages/Pagina404";

import { useConductores } from "../Context/Context";

export const AppRouter = () => {
  const { DatosConductorHabilitados } = useConductores();
  return (
    <>
      {/* PUBLICAS*/}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="404" element={<Pagina404 />} />
        {/* <Route path="/dashboard" element={<Navbar />} />
          <PrivateRoute
            path="/"
            element={<Conductores />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="solicitudes"
            element={<Solicitudes />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="datosconductores"
            element={<DatosConductores />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="datoscliente"
            element={<DatosCliente />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="datosclienteEmpresa"
            element={<DatosClienteEmpresa />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="historial"
            element={<Historial />}
            isAuthenticated={isAuthenticated}
            token={token}
          />
          <PrivateRoute
            path="pqrs"
            element={<Pqrs />}
            isAuthenticated={isAuthenticated}
            token={token}
          /> */}
        {/* PRIVADAS*/}*
        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Conductores />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="datosconductores" element={<DatosConductores />} />
          <Route path="datoscliente" element={<DatosCliente />} />
          <Route path="datosclienteEmpresa" element={<DatosClienteEmpresa />} />
          <Route path="historial" element={<Historial />} />
          <Route path="pqrs" element={<Pqrs />} />
        </Route>
        <Route path="/pagina404" element={<Pagina404 />} />
        {/* <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} >
        <PrivateRoute
          path="/dashboard"
          element={<Navbar />}
          isAuthenticated={isAuthenticated}
        >
          <Route index element={<Conductores />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="datosconductores" element={<DatosConductores />} />
          <Route path="datoscliente" element={<DatosCliente />} />
          <Route path="datosclienteEmpresa" element={<DatosClienteEmpresa />} />
          <Route path="historial" element={<Historial />} />
          <Route path="pqrs" element={<Pqrs />} />
        </PrivateRoute>
           
        </Route> */}
        {/* <PrivateRoute isAuthenticated={isAuthenticated} path="/dashboard" element={<Navbar />}>
          <Route index element={<Conductores />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="solicitudes" element={<Solicitudes />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="datosconductores" element={<DatosConductores />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="datoscliente" element={<DatosCliente />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="datosclienteEmpresa" element={<DatosClienteEmpresa />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="historial" element={<Historial />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="pqrs" element={<Pqrs />} />
        </PrivateRoute> */}
        {/* ruta por defecto */}
      </Routes>
    </>
  );
};

export default AppRouter;
