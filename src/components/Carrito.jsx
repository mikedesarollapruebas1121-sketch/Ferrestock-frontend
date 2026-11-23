
import { useState } from 'react'
import { registrarFactura } from '../services/facturaService'

export default function Carrito({ productos, onAumentar, onDisminuir, onVaciar }) {
  const [comprando, setComprando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const total = productos.reduce(
    (suma, p) => suma + Number(p.precio) * p.cantidad, 0
  )

  async function finalizarCompra() {
    setComprando(true)
    setMensaje('')
    try {
      const factura = await registrarFactura(productos, 2, 2)
      setMensaje(`Compra registrada. Factura #${factura.idFactura}`)
      onVaciar()
    } catch (error) {
      setMensaje(error.message)
    } finally {
      setComprando(false)
    }
  }

  return (
    <section>
      <h2>Carrito de compras</h2>
      {productos.length === 0 && <p>El carrito está vacío.</p>}
      {productos.map((p) => (
        <article key={p.idProducto}>
          <h3>{p.nombre}</h3>
          <p>${Number(p.precio).toLocaleString('es-CO')}</p>
          <button onClick={() => onDisminuir(p.idProducto)} disabled={comprando}>-</button>
          <span> {p.cantidad} </span>
          <button onClick={() => onAumentar(p.idProducto)} disabled={comprando}>+</button>
        </article>
      ))}
      <h3>Total: ${total.toLocaleString('es-CO')}</h3>
      {productos.length > 0 && (
        <>
          <button onClick={finalizarCompra} disabled={comprando}>
            {comprando ? 'Registrando...' : 'Finalizar compra'}
          </button>
          <button onClick={onVaciar} disabled={comprando}>Vaciar carrito</button>
        </>
      )}
      {mensaje && <p role="status">{mensaje}</p>}
    </section>
  )
}
