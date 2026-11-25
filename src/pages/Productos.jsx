
import { useState } from 'react'
import ProductoForm from '../components/ProductoForm.jsx'
import ProductoCard from '../components/ProductoCard.jsx'
import CategoriasCarrusel from '../components/CategoriasCarrusel.jsx'
import Carrito from '../components/Carrito.jsx'
import useProductos from '../hooks/useProductos.js'
import useCategorias from '../hooks/useCategorias.js'
import useFormularioProducto from '../hooks/useFormularioProducto.js'

export default function Productos({ carrito, agregar, aumentar, disminuir, eliminar: eliminarDelCarrito, vaciar }) {
  const { productos, error, guardar, eliminar } = useProductos()
  const categorias = useCategorias()
  const formulario = useFormularioProducto(guardar)
  const [seleccionada, seleccionar] = useState(null)

  const filtrados = productos.filter(p =>
    seleccionada === null ||
    Number(p.categoria?.idCategoria ?? p.idCategoria) === Number(seleccionada)
  )

  return (
    <main className="container ferre-main">
      <CategoriasCarrusel categorias={categorias}
        seleccionada={seleccionada} seleccionar={seleccionar} />

      <div className="ferre-shop">
        <section>
          <h2>Catálogo de productos</h2>
          {error && <p className="ferre-error">{error}</p>}

          <div className="ferre-products">
            {filtrados.map(producto => (
              <ProductoCard key={producto.idProducto} producto={producto}
                categorias={categorias} editar={formulario.editar}
                eliminar={eliminar} agregar={agregar} />
            ))}
          </div>

          {filtrados.length === 0 && <p>No hay productos en esta categoría.</p>}
        </section>

        <Carrito productos={carrito}
          onAumentar={aumentar}
          onDisminuir={disminuir}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciar} />
      </div>

      <section className="card" id="formulario-producto">
        <h2>Administración de productos</h2>
        <ProductoForm {...formulario} categorias={categorias} />
      </section>
    </main>
  )
}
