import Home from "./Components/Home";
import About from "./Components/About";
import { ServicesContextProvider } from "./Context/Context";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./dashboard/Menus/Navbar";
import Conductores from "./pages/Conductores";
import Solicitudes from "./pages/Solicitudes";
import DatosConductores from "./pages/DatosConductores";
import DatosCliente from "./Pages/DatosCliente";
import Testimonios from "./Components/Testimonios";

import DatosClienteEmpresaHabilitado from "./dashboard/datosCliente/DatosClienteEmpresaHabilitado";
function App() {
  return (
    <>
      <ServicesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactos" element={<Contact />} />
          <Route path="/dashboard" element={<Navbar />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/dashboard/conductores" element={<Conductores />} />
          <Route path="/dashboard/solicitudes" element={<Solicitudes />} />
          <Route path="/dashboard/datosconductores" element={<DatosConductores/>}/>
          <Route path="/dashboard/datoscliente" element={<DatosCliente/>} />
          <Route path="/dashboard/datosclienteEmpresa" element={<DatosClienteEmpresaHabilitado/>} />
          {/* 
        
        } />
        <Route path="/dashboard/historial" element={<Historial />} />
        <Route path="/dashboard/pqrs" element={<Pqrs />} /> */}
        </Routes>
      </ServicesContextProvider>
    </>
  );
}

export default App;
