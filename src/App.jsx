import Home from "./Components/Home";
import About from "./Components/About";
import { ServicesContextProvider } from "./Context/Context";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./dashboard/Navbar";
import Conductores from "./dashboard/Conductores";
import Solicitudes from "./dashboard/Solicitudes";
import DatosConductores from "./dashboard/DatosConductores";

import DatosCliente from "./dashboard/DatosCliente";
import Historial from "./dashboard/Historial";
import Pqrs from "./dashboard/pqrs";
import { Modal } from "bootstrap";
import Testimonios from "./Components/Testimonios";
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

          <Route path="/admin/rechazarSolicitud/:id" element={<Modal />} />

          <Route
            path="/dashboard/datosconductores"
            element={<DatosConductores />}
          />
          <Route path="/dashboard/datoscliente" element={<DatosCliente />} />
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
