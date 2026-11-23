
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login de Ferrestock</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard de Ferrestock</h1>} />
      <Route path="/productos" element={<h1>Productos de Ferrestock</h1>} />
      <Route path="/clientes" element={<h1>Clientes de Ferrestock</h1>} />
    </Routes>
  )
}

export default App
