
import { useEffect, useState } from 'react'

function Clientes() {
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarClientes() {
      try {
        const respuesta = await fetch(
          'http://localhost:8080/api/cliente/'
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los clientes')
        }

        const datos = await respuesta.json()
        setClientes(datos)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    cargarClientes()
  }, [])

  if (cargando) {
    return <p>Cargando clientes...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <main>
      <h1>Clientes de Ferrestock</h1>

      {clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <section>
          {clientes.map((cliente) => (
            <article key={cliente.idCliente}>
              <h2>{cliente.nombre}</h2>
              <p>Documento: {cliente.documento}</p>
              <p>
                Teléfono: {cliente.telefono || 'No registrado'}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Clientes
