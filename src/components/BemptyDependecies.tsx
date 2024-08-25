import { useEffect } from "react";


const EjemploDependenciasVacias = () => {
  useEffect(() => {
    console.log('El componente se ha montado.');

    // No hay función de limpieza necesaria.
  }, []); // Array vacío de dependencias

  return (
    <div>
      <h1>Empty dependecies example</h1>
    </div>
  );
};

export default EjemploDependenciasVacias;
