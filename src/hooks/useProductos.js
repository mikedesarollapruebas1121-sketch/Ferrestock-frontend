
import { useEffect, useState } from 'react'
import * as api from '../services/productoService.js'

export default function useProductos() {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState('')

  async function cargar() {
    try { setProductos(await api.listarProductos()); setError('') }
    catch { setError('No se pudieron cargar los productos') }
  }

  useEffect(() => { cargar() }, [])

  async function guardar(datos) {
    try {
      if (datos.idProducto) await api.actualizarProducto(datos.idProducto, datos)
      else await api.crearProducto(datos)
      await cargar()
      return true
    } catch { setError('No se pudo guardar'); return false }
  }

  async function eliminar(id) {
    if (!window.confirm('¿Eliminar producto?')) return
    try { await api.eliminarProducto(id); await cargar() }
    catch { setError('No se pudo eliminar') }
  }

  return { productos, error, guardar, eliminar }
}
