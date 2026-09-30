import { useState } from "react";
import TarjetaEquipo from "./TarjetaEquipo";

function Catalogo({ equipos }) {
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
        </section>
    )
}