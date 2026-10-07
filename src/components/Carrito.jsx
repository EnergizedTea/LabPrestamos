function Carrito({carrito, quitarCarrito}) {
    return (
        <section>
            <h2>Carrito de solicitudes</h2>
            <ul>
                {carrito.map((equipo) => (
                    <li key={equipo.id}>
                        {equipo.nombre}
                        <button type = "button" onClick={() => quitarCarrito(equipo.id)}>
                        </button>
                    </li>
                ))}
            </ul>
            
        </section>
    )
}
export default Carrito;