
import { useState } from 'react'
import { registrarFactura } from '../services/facturaService'
import CarritoItem from './CarritoItem.jsx'

export default function Carrito({ productos, onAumentar, onDisminuir, onEliminar, onVaciar }) {
  const [comprando, setComprando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [productosAnteriores, setProductosAnteriores] = useState(productos)

if (productosAnteriores !== productos) {
  setProductosAnteriores(productos)

  if (productos.length > 0) {
    setMensaje('')
  }
}
 
  const total = productos.reduce((suma, p) => suma + Number(p.precio) * p.cantidad, 0)
  const cantidad = productos.reduce((suma, p) => suma + p.cantidad, 0)

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
    <section className="card ferre-cart">
      <div className="ferre-cart-heading">
        <h2>Carrito</h2>
        <span>{cantidad} items</span>
      </div>

      {productos.length === 0 &&
        <p className="ferre-cart-empty">El carrito está vacío.</p>}

      <ul className="ferre-cart-list">
        {productos.map(p => (
          <CarritoItem key={p.idProducto} producto={p}
            aumentar={onAumentar} disminuir={onDisminuir}
            eliminar={onEliminar} comprando={comprando} />
        ))}
      </ul>

      <div className="ferre-total">
        <strong>Total</strong>
        <strong>${total.toLocaleString('es-CO')}</strong>
      </div>

      {productos.length > 0 && (
        <div className="actions">
          <button className="btn btn-primary" type="button"
            onClick={finalizarCompra} disabled={comprando}>
            {comprando ? 'Registrando...' : 'Realizar pedido'}
          </button>
          <button className="btn btn-secondary" type="button"
            onClick={onVaciar} disabled={comprando}>
            Vaciar carrito
          </button>
        </div>
      )}

      {mensaje && <p className="ferre-note" role="status">{mensaje}</p>}
    </section>
  )
}
