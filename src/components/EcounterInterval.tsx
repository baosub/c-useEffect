import  { useState, useEffect } from 'react';

const ContadorConIntervalo = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Intervalo iniciado');

    // Crear un intervalo que incrementa el contador cada segundo
    const intervalo = setInterval(() => {
      setContador(prev => prev + 1);
    }, 1000);
    
    

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      console.log('Intervalo limpiado');
      clearInterval(intervalo);
    };
  }, []); // Se ejecuta una sola vez al montar el componente

  return (
    <div>
      <h1>Contador: {contador}</h1>
    </div>
  );
};

export default ContadorConIntervalo;
