
import EjemploSimple from './components/AsimpleExample'
import EjemploDependenciasVacias from './components/BemptyDependecies'
import EjemploConDependencias from './components/CspecificDependecies'
import EjemploConLimpieza from './components/DcleaningFunction'
import ContadorConIntervalo from './components/EcounterInterval'

const App = () => {
  return (
    <div>
      App

      <EjemploSimple/>
      <EjemploDependenciasVacias/>
      <EjemploConDependencias/>
      <EjemploConLimpieza/>
      <ContadorConIntervalo/>

    </div>
  )
}

export default App
