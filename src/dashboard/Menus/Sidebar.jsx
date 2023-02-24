import React from "react";

import MySidebarLink from "./MySidebarLink";
import { Outlet} from 'react-router-dom'
function Sidebar() {
    
  return (
    <>
    <Outlet/>
      <aside id="sidebar" className="sidebar">
      
        <ul className="sidebar-nav" id="sidebar-nav">
          <MySidebarLink
            goingTo={"/dashboard"}
            children={"conductores"}
          />
          <MySidebarLink
            goingTo={"solicitudes"}
            children={"Solicitudes"}
          />
          <MySidebarLink
            goingTo={"datosconductores"}
            children={"Datos Conductores"}
          />
          <MySidebarLink
            goingTo={"datoscliente"}
            children={"Datos cliente"}
          />
          <MySidebarLink
            goingTo={"historial"}
            children={"Historial"}
          />
          <MySidebarLink
           goingTo={"pqrs"} 
           children={"P.Q.R.S"} 
          />
        </ul>

        <span >
         
       
    
    </span>
    
        
      </aside>
    
    </>
  );
}

export default Sidebar;
