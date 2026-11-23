
import { useEffect, useState } from 'react'

export default function useCategorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/categoria/')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('Error de categorías')
        return respuesta.json()
      })
      .then(setCategorias)
      .catch(console.error)
  }, [])

  return categorias
}
