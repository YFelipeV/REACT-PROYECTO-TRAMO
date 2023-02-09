function ConductoresHead({ subTitulos }) {
  return (
    <>
      <thead>
        <tr>
          {subTitulos.map((name, index) => (
            <>
              <th
                key={index}
                className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
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
