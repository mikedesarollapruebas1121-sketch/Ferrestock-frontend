
const API = 'http://localhost:8080/api/producto/'

async function peticion(ruta = '', metodo = 'GET', datos) {
  const respuesta = await fetch(API + ruta, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    ...(datos && { body: JSON.stringify(datos) })
  })
  if (!respuesta.ok) throw new Error('Error en productos')
  return respuesta.status === 204 ? null : respuesta.json()
}

export const listarProductos = () => peticion()
export const crearProducto = (datos) => peticion('', 'POST', datos)
export const actualizarProducto = (id, datos) =>
  peticion(id, 'PUT', datos)
export const eliminarProducto = (id) => peticion(id, 'DELETE')
