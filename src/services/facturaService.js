
const API = 'http://localhost:8080/api/factura/'

export async function registrarFactura(productos, idUsuario, idCliente) {
  const compra = {
    idUsuario,
    idCliente,
    productos: productos.map((p) => ({
      idProducto: p.idProducto,
      cantidad: p.cantidad
    }))
  }

  const respuesta = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(compra)
  })

  if (!respuesta.ok) {
    throw new Error('No se pudo registrar la compra')
  }

  return respuesta.json()
}
