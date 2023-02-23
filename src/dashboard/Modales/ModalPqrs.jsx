import React from 'react'

function ModalPqrs() {
  return (
    <>
    <tr>
      <td>
        <div
          className="modal fade"
          id="peticion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="mas-datosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mas-datosLabel">
                  Motivo de rechazo{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* {data.motivoRechazoCON} */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum, ab odit maiores quidem numquam facere non autem, omnis eligendi quo reiciendis suscipit nulla officiis accusantium? Officiis voluptas culpa tempore.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse necessitatibus earum quam, est omnis error, cumque, incidunt nesciunt tempora doloribus? Perspiciatis perferendis facilis quis, voluptatem consequatur sequi soluta modi.</p>

                <textarea name="" id="" cols="30" rows="10"></textarea>
               
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    
    </>
  )
}

export default ModalPqrs