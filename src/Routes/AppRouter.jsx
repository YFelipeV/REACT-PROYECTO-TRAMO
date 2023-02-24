import { Route, Routes } from "react-router-dom";

import { Home, About, Contact, Header } from "../Components";
import Navbar from "../dashboard/Menus/Navbar";
import Conductores from "../pages/Conductores";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import {validarAdmin} from '../api/api'
import {useEffect,useState} from 'react'
export const AppRouter = () => {
 
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>

        <Route  path="Login" element={<Login/>} />
          <Route path="/dashboard"  element={<Navbar/>}
           
             

            />
      </Routes>
    </>
  );
};

export default AppRouter;
