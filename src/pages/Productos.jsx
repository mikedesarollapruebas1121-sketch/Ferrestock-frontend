
import ProductoForm from '../components/ProductoForm.jsx'
import ProductoCard from '../components/ProductoCard.jsx'
import Carrito from '../components/Carrito.jsx'
import useProductos from '../hooks/useProductos.js'
import useCategorias from '../hooks/useCategorias.js'
import useFormularioProducto from '../hooks/useFormularioProducto.js'

export default function Productos({ carrito, agregar, aumentar, disminuir, vaciar }) {
  const { productos, error, guardar, eliminar } = useProductos()
  const categorias = useCategorias()
  const formulario = useFormularioProducto(guardar)

  return (
    <main>
      <h1>Gestión de productos - Ferrestock</h1>
      {error && <p role="alert">{error}</p>}
      <ProductoForm {...formulario} categorias={categorias} />
      <section>
        <h2>Listado de productos</h2>
        {productos.map((producto) => (
          <ProductoCard key={producto.idProducto} producto={producto}
            editar={formulario.editar} eliminar={eliminar} agregar={agregar} />
        ))}
      </section>
      <Carrito productos={carrito} onAumentar={aumentar}
        onDisminuir={disminuir} onVaciar={vaciar} />
    </main>
  )
}
