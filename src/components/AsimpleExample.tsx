import React, { useEffect } from 'react';

const EjemploSimple = () => {
  useEffect(() => {
    console.log('El componente se ha renderizado.');

    // No hay función de limpieza porque no la necesitamos en este caso simple.
  });

  return (
    <div>
      <h1>Simple example of useEffect</h1>
    </div>
  );
};

export default EjemploSimple;
