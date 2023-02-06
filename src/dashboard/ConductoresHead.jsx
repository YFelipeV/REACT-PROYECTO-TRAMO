
function ConductoresHead({ head }) {
  return (
    <>
      
          <thead >
            <tr>
              {head.todo.map((name) => (
                <>
                  <th
                    className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    key={name.id}
                  >
                    {name}
                  </th>
                </>
              ))}
            </tr>
          </thead>
       
      
    </>
  );
}

export default ConductoresHead;
