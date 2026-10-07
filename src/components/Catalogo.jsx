import { useState } from "react";
import TarjetaEquipo from "./TarjetaEquipo";

function Catalogo({ equipos , agregarEquipo}) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const totalDisponibles = equipos.reduce((suma, e) => (e.disponible ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catálogo de Equipos</h2>
            <p>{totalDisponibles} de {equipos.length} equipos disponibles</p>

            {/* todo: contiuaremos con el buscador y las tarjetas */}
            <label>
                Buscar equipo
                {/* una funcion tipo flecha es una funcion anonima en el momento */}
                <input value={busqueda} onChange={(ev) => setBusqueda(ev.target.value)}></input>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(ev) => setSoloDisponibles(ev.target.checked)}
                />
                Mostrar solo disponibles
            </label>

           
           {visibles.length === 0 ? (
                <p>No hay equipos que coincidan con la búsqueda.</p>
            ) : (
                <div className="lista">
                    {visibles.map((e) => (
                        <TarjetaEquipo key={e.id} equipo={e} agregarEquipo={agregarEquipo} />
                    ))}
                </div> 
            )}
        </section>
    )
}

export default Catalogo;