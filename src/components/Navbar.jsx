import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="ferre-header">
      <NavLink to="/dashboard" className="ferre-brand">
        Ferresasweb
      </NavLink>
      <nav className="ferre-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/clientes">Clientes</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/categorias">Categorías</NavLink>
        <NavLink to="/">Salir</NavLink>
      </nav>
    </header>
  )
}