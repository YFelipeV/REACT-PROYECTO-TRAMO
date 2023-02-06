
import Modal from "./Modal"
import {useState,useEffect} from 'react'
import { getDatosConductoresIn } from "../api/api";
import DatosConInCards from './DatosConInCards';
function DatosConduInhabili() {
    const [listas, setLista] = useState([]);
    useEffect(() => {
        async function load() {
          let response = await  getDatosConductoresIn ();
          setLista(response);
          console.log(response);
        }
        load()
    },[])
  return (
    <>
    
    <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative pb-3 mt-n4 mx-3 z-index-2">
                <div className="bg-danger shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3 mb-2">
                    Conductores Inhabilitados
                  </h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-2">
                    <tbody>
                      <DatosConInCards data={listas}/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        <Modal></Modal>
    </>
  )
}

export default DatosConduInhabili