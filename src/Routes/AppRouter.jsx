import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Header } from "../Components";
import Navbar from "../dashboard/Menus/Navbar";
import Conductores from "../pages/Conductores";
import Login from "../Pages/Login";
import PrivateRoute from "../Routes/PrivateRoute";
import {validarAdmin} from '../api/api'
import {useEffect,useState} from 'react'
import Solicitudes from "../pages/Solicitudes";
import DatosCliente from "../Pages/DatosCliente";
import DatosConductores from "../pages/DatosConductores";
import Historial from "../Pages/Historial";
import Pqrs from "../Pages/Pqrs";
import DatosClienteEmpresa from "../Pages/DatosClienteEmpresa";

export const AppRouter = () => {
 
  

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  useEffect(() => {
    const fetchToken = async () => {
      const response = await validarAdmin(); // Llamada a la API para validar el token
      if (response.ok) {
        setIsAuthenticated(true);
        setToken(response.token);
      }
    }
    fetchToken();
  }, []);
  
  return (
    <>
    {/* PUBLICAS*/}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>
        <Route  path="Login" element={<Login/>} />


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
       
        {/* PRIVADAS*/}
        * 
          <Route path="/dashboard"  element={<Navbar/>} >
          <Route index element={<Conductores />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="datosconductores" element={<DatosConductores />} />
          <Route path="datoscliente" element={<DatosCliente />} />
          <Route path="datosclienteEmpresa" element={<DatosClienteEmpresa />} />
          <Route path="historial" element={<Historial />} />
          <Route path="pqrs" element={<Pqrs />} />
          </Route> *
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

           
      </Routes>
    </>
  );
};

export default AppRouter;
