import { useEffect, useState } from 'react';


const EjemploSimple = () => {

    const[counter, setCounter] = useState<number>(0)
  useEffect(() => {
    console.log('This is de first(simple component).');

    // No hay función de limpieza porque no la necesitamos en este caso simple.
  });

  

  return (
    <div>
      <h1>Simple example of useEffect</h1>
      <p>The counter is: {counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default EjemploSimple;
