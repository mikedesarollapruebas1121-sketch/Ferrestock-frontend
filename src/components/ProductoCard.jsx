
export default function ProductoCard({ producto, categorias, editar, eliminar, agregar }) {
  const idCategoria = producto.categoria?.idCategoria ?? producto.idCategoria
  const categoria = categorias.find(c => Number(c.idCategoria) === Number(idCategoria))

  return (
    <article className="card ferre-product">
      <div className="ferre-product-media">
        <span className="ferre-product-tag">
          {categoria?.nombre || 'Sin categoría'}
        </span>

        <img
          src={`/${producto.idProducto}.jpg`}
          alt={producto.nombre}
          className="ferre-product-image"
          onError={(e) => {
            if (!e.currentTarget.src.endsWith('/default.jpg')) {
              e.currentTarget.src = '/default.jpg'
            }
          }}
        />
      </div>

      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p className="ferre-price">
        ${Number(producto.precio).toLocaleString('es-CO')}
      </p>
      <p>Stock: {producto.stock}</p>

      <button className="btn btn-primary" type="button"
        onClick={() => agregar(producto)} disabled={producto.stock <= 0}>
        Agregar al carrito
      </button>

      <div className="actions">
        <button className="btn btn-secondary" type="button"
          onClick={() => editar(producto)}>Editar</button>
        <button className="btn btn-secondary" type="button"
          onClick={() => eliminar(producto.idProducto)}>Eliminar</button>
      </div>
    </article>
  )
}
