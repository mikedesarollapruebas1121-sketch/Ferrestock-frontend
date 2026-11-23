
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: correo,
          contrasenal: contrasena
        })
      })

      if (!respuesta.ok) {
        throw new Error('Correo o contraseña incorrectos')
      }

      const usuario = await respuesta.json()

      if (!usuario || !usuario.idUsuario) {
        throw new Error('No se pudo validar el usuario')
      }

      navigate('/dashboard')

    } catch (error) {
      setError(error.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <main>
      <h1>Iniciar sesión</h1>
      <p>Bienvenido a Ferrestock</p>

      <form onSubmit={manejarLogin}>
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          required
        />

        <label htmlFor="contrasena">Contraseña</label>
        <input
          id="contrasena"
          name="contrasena"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={contrasena}
          onChange={(evento) => setContrasena(evento.target.value)}
          required
        />

        <button type="submit" disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </button>

        {error && <p role="alert">{error}</p>}
      </form>
    </main>
  )
}

export default Login
