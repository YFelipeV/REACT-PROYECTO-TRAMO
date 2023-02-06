import React from "react";
import "../css/styleAdmin.css";
import MySidebarLink from "./MySidebarLink";

function Sidebar() {
    
  return (
    <>
    
      <aside id="sidebar" className="sidebar">
      
        <ul className="sidebar-nav" id="sidebar-nav">
          <MySidebarLink
            goingTo={"/dashboard/conductores"}
            children={"conductores"}
          />
          <MySidebarLink
            goingTo={"/dashboard/solicitudes"}
            children={"Solicitudes"}
          />
          <MySidebarLink
            goingTo={"/dashboard/datosconductores"}
            children={"Datos Conductores"}
          />
          <MySidebarLink
            goingTo={"/dashboard/datoscliente"}
            children={"Datos cliente"}
          />
          <MySidebarLink
            goingTo={"/dashboard/historial"}
            children={"Historial"}
          />
          <MySidebarLink
           goingTo={"/dashboard/pqrs"} 
           children={"P.Q.R.S"} 
          />
        </ul>
        
      </aside>
    
    </>
  );
}

export default Sidebar;
