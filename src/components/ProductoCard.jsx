
export default function ProductoCard({ producto, editar, eliminar, agregar }) {
  return (
    <article>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${Number(producto.precio).toLocaleString('es-CO')}</p>
      <p>Stock: {producto.stock}</p>
      <button type="button" onClick={() => agregar(producto)}
        disabled={producto.stock <= 0}>
        Agregar al carrito
      </button>
      <button type="button" onClick={() => editar(producto)}>Editar</button>
      <button type="button" onClick={() => eliminar(producto.idProducto)}>
        Eliminar
      </button>
    </article>
  )
}
