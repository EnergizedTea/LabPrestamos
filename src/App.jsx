import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Catalogo from './components/Catalogo'
import { equipos } from './data/equipos'


function App() {

  console.log("renderizando catalogo")

  const total =  5
  const [disponibles, setDisponibles] = useState(total)
  const [count, setCount] = useState(0)
  //const [count2, setCount2] = useState(0)

  function prestar() {
    setDisponibles((d) => (d < 0 ? 0 : d - 1))
  }

  function devolver() {
    setDisponibles((d) => (d > total ? total : d + 1))
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>mi primera app</h1>
          <p>
            
            Autor: Diego Pacheco Valdez
          </p>
        </div>

        <main>
          <h1>Laboratorio - Prestamos</h1>
          
          <Catalogo equipos={equipos} />
        </main>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
