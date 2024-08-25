
import EjemploSimple from './components/AsimpleExample'
import EjemploDependenciasVacias from './components/BemptyDependecies'
import EjemploConDependencias from './components/CspecificDependecies'
import EjemploConLimpieza from './components/DcleaningFunction'

const App = () => {
  return (
    <div>
      App

      <EjemploSimple/>
      <EjemploDependenciasVacias/>
      <EjemploConDependencias/>
      <EjemploConLimpieza/>
      
    </div>
  )
}

export default App
