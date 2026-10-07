import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Catalogo from './components/Catalogo'
import Carrito from './components/Carrito'
import { equipos } from './data/equipos'



function App() {

  console.log("renderizando catalogo")

  const total =  5
  const [disponibles, setDisponibles] = useState(total)
  const [count, setCount] = useState(0)
  const [carrito, setCarrito] = useState([])

  function prestar() {
    setDisponibles((d) => (d < 0 ? 0 : d - 1))
  }

  function devolver() {
    setDisponibles((d) => (d > total ? total : d + 1))
  }

  function agregarCarrito(equipo) {
    setCarrito([...carrito, equipo])
  }

  function quitarCarrito(id) {
    setCarrito(
        carrito.filter((equipo) => equipo.id !== id)
    )
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
          <p>Solicitudes: {carrito.length}</p>
          <Carrito carrito={carrito} quitarCarrito={quitarCarrito} /> 
          <Catalogo equipos={equipos} agregarEquipo={agregarCarrito} />
        </main>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
