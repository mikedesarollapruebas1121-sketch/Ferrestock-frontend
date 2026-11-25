
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  async function manejarLogin(evento) {
    evento.preventDefault()
    setError('')
    setCargando(true)

    try {
      const respuesta = await fetch('http://localhost:8080/api/usuario/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contrasenal: contrasena })
      })

      if (!respuesta.ok) throw new Error('Correo o contraseña incorrectos')

      const usuario = await respuesta.json()
      if (!usuario?.idUsuario) throw new Error('No se pudo validar el usuario')

      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <main className="ferre-login-page">
      <section className="ferre-login-card">
        <h1>Ferrestock</h1>
        <p>Sistema de gestión para ferretería</p>
        <h2>Iniciar sesión</h2>

        <form onSubmit={manejarLogin}>
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" type="email" required
            placeholder="Ingresa tu correo" value={correo}
            onChange={(e) => setCorreo(e.target.value)} />

          <label htmlFor="contrasena">Contraseña</label>
          <input id="contrasena" type="password" required
            placeholder="Ingresa tu contraseña" value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} />

          {error && <p className="ferre-error" role="alert">{error}</p>}

          <button className="btn btn-primary" type="submit" disabled={cargando}>
            {cargando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
