import { useConductores } from "../../Context/Context";
import ModalPqrs from "../Modales/ModalPqrs";
function Historial() {
  const { Pqrs } = useConductores();
  return (
    <>
      {Pqrs.map(({ name, id,}) => (
        <tr key={id}>
          <td className="text-center pt-3 ">{name}</td>
          <td className=" pt-3">
            {id > 5
              ? "⭐⭐⭐⭐⭐⭐"
              : id == 5
              ? "⭐⭐⭐⭐⭐"
              : id == 4
              ? "⭐⭐⭐⭐"
              : id == 3
              ? "⭐⭐⭐"
              : id == 2
              ? "⭐⭐"
              : id == 1
              ? "⭐"
              : "0"}
          </td>
          <td className="text-center  pt-3">{id}2234556</td>

          <td className="p-3  ">
            <button
              href=""
              className="m-0 p-0 text-danger manifiesto bg-white w-75"
              data-bs-toggle="modal"
              data-bs-target="#peticion"
            >
              Ver mas...
              <i className="bi bi-cursor text-danger  fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
      <ModalPqrs/>
    </>
  );
}

export default Historial;
