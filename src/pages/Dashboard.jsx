import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <main>
      <h1>Dashboard de Ferrestock</h1>
      <p>Bienvenido al sistema de gestión</p>

      <nav>
        <Link to="/productos">Ver productos</Link>
        {' | '}
        <Link to="/clientes">Ver clientes</Link>
        {' | '}
        <Link to="/">Volver al Login</Link>
      </nav>
    </main>
  )
}

export default Dashboard
