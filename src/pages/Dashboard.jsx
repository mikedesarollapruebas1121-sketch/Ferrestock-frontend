
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <main className="container ferre-main">
      <section className="card">
        <h2>Panel Principal</h2>
        <p>Bienvenido al sistema de gestión de Ferrestock.</p>
      </section>

      <section className="card">
        <h2>Acciones rápidas</h2>
        <p>Selecciona la sección que deseas gestionar.</p>

        <div className="ferre-actions">
          <Link className="btn btn-primary" to="/productos">
            Ver productos
          </Link>
          <Link className="btn btn-secondary" to="/clientes">
            Ver clientes
          </Link>
          <Link className="btn btn-primary" to="/categorias">
            Ver categorías
          </Link>
          <Link className="btn btn-secondary" to="/">
            Volver al Login
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
