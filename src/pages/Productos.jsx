
import { useEffect, useState } from 'react'

function Productos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch(
          'http://localhost:8080/api/producto/'
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }

        const datos = await respuesta.json()
        setProductos(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  if (cargando) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <main>
      <h1>Productos de Ferrestock</h1>

      {productos.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <section>
          {productos.map((producto) => (
  <article key={producto.idProducto}>
              <h2>{producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Productos
