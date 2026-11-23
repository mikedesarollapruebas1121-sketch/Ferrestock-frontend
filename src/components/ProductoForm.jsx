
const campos = ['nombre', 'descripcion', 'precio', 'stock']

export default function ProductoForm({ datos, categorias, cambio, guardar, cancelar }) {
  return (
    <form onSubmit={guardar}>
      <h2>{datos.idProducto ? 'Editar' : 'Registrar'} producto</h2>
      {campos.map((campo) => (
        <label key={campo}>
          {campo}
          <input name={campo} value={datos[campo] ?? ''}
            type={['precio', 'stock'].includes(campo) ? 'number' : 'text'}
            min={campo === 'precio' || campo === 'stock' ? 0 : undefined}
            step={campo === 'precio' ? '0.01' : '1'}
            required={campo !== 'descripcion'} onChange={cambio} />
        </label>
      ))}
      <select name="idCategoria" value={datos.idCategoria ?? ''}
        onChange={cambio} required>
        <option value="">Selecciona categoría</option>
        {categorias.map((c) => (
          <option key={c.idCategoria} value={c.idCategoria}>{c.nombre}</option>
        ))}
      </select>
      <button type="submit">Guardar</button>
      <button type="button" onClick={cancelar}>Cancelar</button>
    </form>
  )
}
