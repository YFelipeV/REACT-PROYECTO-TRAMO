import { useConductores } from "../../Context/Context";
function HistorialCard() {
  const { Historial } = useConductores();
  return (
    <>
      {Historial.map(
        ({
        name,
        id,
        username,
        address,
       

      }) => (
        <tr key={id}>
          <td className="text-center p-4">{name}</td>
          <td className="text-center pt-4 ">{username}</td>
          <td className="text-center pt-4">{id} toneladas</td>
          <td className="text-center pt-4">{address.street}</td>
          <td className="text-center pt-4">${address.geo.lat}</td>
          <td className="text-center pt-4">
            <div className="manifiesto ">
              <a href="" className="text-danger">Ver manifiesto</a>
            </div>
          </td>
          
        </tr>
      ))}
      
     
    </>
  );
}

export default HistorialCard;
