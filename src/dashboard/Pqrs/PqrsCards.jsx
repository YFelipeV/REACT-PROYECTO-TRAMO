

function PqrsCards({ data }) {
  return (
    <>
      {data.map((lista,index) => (
        <>
          <div key={lista.id} className="PQR rounded">
            <table id="tablas-PQR" className="pt-2">
              <tbody>
                <tr key={index}>
                  <td>{lista.name}</td>
                  <td>Calificación</td>
                </tr>
                <tr>
                  <td>{lista.id}22 854 9576</td>
                  <td>
                    <i className="bi bi-star me-1 fs-5 fs-5"></i>
                    <i className="bi bi-star me-1 fs-5 fs-5 "></i>
                    <i className="bi bi-star me-1 fs-5 fs-5"></i>
                    <i className="bi bi-star me-1 fs-5 fs-5"></i>
                    <i className="bi bi-star me-1 fs-5 fs-5"></i>
                  </td>
                </tr>
                <tr>
                  <td className="pt-3" colSpan={3}>
                    La aplicación funciona bien pero sería bueno agregarle{" "}
                    {lista.status}...
                  </td>
                </tr>
                <tr>
                  <td
                    className="pt-3 text-center align-items-center"
                    colSpan={3}
                  >
                    <div
                      className="d-flex text-center justify-content-center btn btn-primary ms-5 me-5 mb-1"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >
                      <p className="m-0 p-0">Responder...</p>
                      <i className="bi bi-cursor  fs-6"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ))}
    </>
  );
}

export default PqrsCards;
