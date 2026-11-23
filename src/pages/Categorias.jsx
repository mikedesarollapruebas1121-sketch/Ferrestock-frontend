
import { useEffect, useState } from 'react'

function Categorias() {
  const [categorias, setCategorias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarCategorias() {
      try {
        const respuesta = await fetch(
          'http://localhost:8080/api/categoria/'
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las categorías')
        }

        const datos = await respuesta.json()
        setCategorias(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarCategorias()
  }, [])

  if (cargando) {
    return <p>Cargando categorías...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <main>
      <h1>Categorías de Ferrestock</h1>

      {categorias.length === 0 ? (
        <p>No hay categorías registradas.</p>
      ) : (
        <section>
          {categorias.map((categoria) => (
            <article key={categoria.idCategoria}>
              <h2>{categoria.nombre}</h2>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Categorias
