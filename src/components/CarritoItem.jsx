export default function CarritoItem({ producto, aumentar, disminuir, eliminar, comprando }) {
  const subtotal = Number(producto.precio) * producto.cantidad

  return (
    <li>
      <div className="ferre-cart-item">
        <div className="ferre-cart-item-info">
          <strong>{producto.nombre}</strong>
          <small>
            {producto.cantidad} × ${Number(producto.precio).toLocaleString('es-CO')}
          </small>
        </div>

        <div className="ferre-cart-item-price">
          ${subtotal.toLocaleString('es-CO')}
          <button className="ferre-cart-remove" type="button"
            disabled={comprando}
            onClick={() => eliminar(producto.idProducto)}>Eliminar</button>
        </div>
      </div>

      <div className="ferre-cart-actions">
        <button disabled={comprando}
          onClick={() => disminuir(producto.idProducto)}>−</button>
        <span>{producto.cantidad}</span>
        <button disabled={comprando}
          onClick={() => aumentar(producto.idProducto)}>+</button>
      </div>
    </li>
  )
}