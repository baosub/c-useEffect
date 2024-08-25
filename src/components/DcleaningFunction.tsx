import { useState, useEffect } from 'react';

const EjemploConLimpieza = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    console.log('El componente se ha montado.');

    // Función de limpieza
    return () => {
      console.log('El componente se va a desmontar.');
    };
  }, []); // Array vacío para ejecutar el efecto una sola vez

  return (
    <div>
      {mostrar && <p>Este texto se muestra mientras el componente está montado.</p>}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};

export default EjemploConLimpieza;
