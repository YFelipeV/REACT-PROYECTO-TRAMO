import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {useConductores} from "../../Context/Context"
import Navbar from '../Menus/Navbar'
import Sidebar from '../Menus/Sidebar'
import DatosClienteEmpresaHab from './DatosClienteEmpresaHab'
import DatosClienteEmpresaInhabilitado from './DatosClienteEmpresaInhabilitado'


function DatosClienteEmpresaHabilitado() {
  const navigate=useNavigate()
    const{loadDatosClientesEmpresaHabilitados}=useConductores()
    useEffect(()=>{
        loadDatosClientesEmpresaHabilitados()
    },[])
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <main id='main' className='main'>
    <div className="d-flex justify-content-center">
          <button className="btn btn-success mx-2" type="submit"
          
          onClick={()=>{
            navigate("/dashboard/datoscliente")
          }}>
             Ver Cliente Natural
            
           
          </button>
          <button className="btn btn-success mx-2" type="submit" onClick={()=>{
            navigate("/dashboard/datosclienteEmpresa")}}>
            Ver Cliente Empresa
          </button>
        </div>
    <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 className="text-light ps-3">Clientes Habilitados</h4>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                  <DatosClienteEmpresaHab></DatosClienteEmpresaHab>
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DatosClienteEmpresaInhabilitado/>
    
    
    </main>
    </>
  )
}

export default DatosClienteEmpresaHabilitado