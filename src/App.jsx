
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Productos from './pages/Productos.jsx'
import Clientes from './pages/Clientes.jsx'
import Categorias from './pages/Categorias.jsx'
import useCarrito from './hooks/useCarrito.js'

export default function App() {
  const carrito = useCarrito()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productos" element={<Productos {...carrito} />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/categorias" element={<Categorias />} />
    </Routes>
  )
}
