import React, { useState, useEffect } from 'react';

const EjemploConDependencias = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El valor de contador ha cambiado a: ${contador}`);

    // No necesitamos una función de limpieza aquí.

  }, [contador]); // El efecto se ejecutará cuando 'contador' cambie

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default EjemploConDependencias;
