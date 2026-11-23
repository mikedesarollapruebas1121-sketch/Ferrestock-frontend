
import { useState } from 'react'

export default function useCarrito() {
  const [carrito, setCarrito] = useState([])

  function agregar(producto) {
    setCarrito((actual) => {
      const existe = actual.some((p) => p.idProducto === producto.idProducto)
      return existe
        ? actual.map((p) => p.idProducto === producto.idProducto
          ? { ...p, cantidad: p.cantidad + 1 } : p)
        : [...actual, { ...producto, cantidad: 1 }]
    })
  }

  function aumentar(id) {
    setCarrito((actual) => actual.map((p) =>
      p.idProducto === id ? { ...p, cantidad: p.cantidad + 1 } : p))
  }

  function disminuir(id) {
    setCarrito((actual) => actual
      .map((p) => p.idProducto === id
        ? { ...p, cantidad: p.cantidad - 1 } : p)
      .filter((p) => p.cantidad > 0))
  }

  function vaciar() { setCarrito([]) }
  return { carrito, agregar, aumentar, disminuir, vaciar }
}
