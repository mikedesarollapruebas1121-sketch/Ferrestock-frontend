
import { useState } from 'react'

const inicial = {
  nombre: '', descripcion: '', precio: '', stock: '', idCategoria: ''
}

export default function useFormularioProducto(guardarProducto) {
  const [datos, setDatos] = useState(inicial)

  function cambio(evento) {
    const { name, value } = evento.target
    setDatos((actual) => ({ ...actual, [name]: value }))
  }

  function editar(producto) {
    setDatos(producto)
  }

  async function guardar(evento) {
    evento.preventDefault()
    const producto = {
      ...datos,
      precio: Number(datos.precio),
      stock: Number(datos.stock),
      idCategoria: Number(datos.idCategoria)
    }
    if (await guardarProducto(producto)) cancelar()
  }

  function cancelar() { setDatos(inicial) }
  return { datos, cambio, editar, guardar, cancelar }
}
