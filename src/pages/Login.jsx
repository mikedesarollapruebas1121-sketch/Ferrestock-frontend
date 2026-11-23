
import { useState } from 'react'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')

  function manejarLogin(evento) {
    evento.preventDefault()

    console.log('Usuario:', usuario)
    console.log('Formulario enviado correctamente')
  }

  return (
    <main>
      <h1>Iniciar sesión</h1>
      <p>Bienvenido a Ferrestock</p>

      <form onSubmit={manejarLogin}>
        <label htmlFor="usuario">Usuario</label>
        <input
          id="usuario"
          name="usuario"
          type="text"
          placeholder="Ingresa tu usuario"
          value={usuario}
          onChange={(evento) => setUsuario(evento.target.value)}
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

        <button type="submit">Ingresar</button>
      </form>
    </main>
  )
}

export default Login
