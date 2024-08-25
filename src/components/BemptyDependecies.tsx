import { useEffect, useState } from "react";



const EjemploDependenciasVacias = () => {

    const[counter, setCounter]=useState<number>(0)
  useEffect(() => {
    console.log('This is the component with empty dependecies');

    // No hay función de limpieza necesaria.
  }, []); // Array vacío de dependencias

  return (
    <div>
      <h1>Empty dependecies example</h1>
      <p>The counter is: {counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default EjemploDependenciasVacias;
