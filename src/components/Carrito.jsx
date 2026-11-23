
export default function Carrito({ productos, onAumentar, onDisminuir, onVaciar }) {
  const total = productos.reduce(
    (suma, p) => suma + Number(p.precio) * p.cantidad, 0
  )

  return (
    <section>
      <h2>Carrito de compras</h2>
      {productos.length === 0 && <p>El carrito está vacío.</p>}
      {productos.map((p) => (
        <article key={p.idProducto}>
          <h3>{p.nombre}</h3>
          <p>${Number(p.precio).toLocaleString('es-CO')}</p>
          <button onClick={() => onDisminuir(p.idProducto)}>-</button>
          <span> {p.cantidad} </span>
          <button onClick={() => onAumentar(p.idProducto)}>+</button>
        </article>
      ))}
      <h3>Total: ${total.toLocaleString('es-CO')}</h3>
      {productos.length > 0 && (
        <button onClick={onVaciar}>Vaciar carrito</button>
      )}
    </section>
  )
}
