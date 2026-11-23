
export default function ProductoCard({ producto, editar, eliminar }) {
  return (
    <article>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${Number(producto.precio).toLocaleString('es-CO')}</p>
      <p>Stock: {producto.stock}</p>
      <button onClick={() => editar(producto)}>Editar</button>
      <button onClick={() => eliminar(producto.idProducto)}>Eliminar</button>
    </article>
  )
}
