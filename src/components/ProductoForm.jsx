
const campos = ['nombre', 'descripcion', 'precio', 'stock']

export default function ProductoForm({ datos, categorias, cambio, guardar, cancelar }) {
  return (
    <form className="form-grid" onSubmit={guardar}>
      <h2 className="full">
        {datos.idProducto ? 'Editar' : 'Registrar'} producto
      </h2>

      {campos.map((campo) => (
        <div className="form-group" key={campo}>
          <label htmlFor={campo}>{campo}</label>
          <input id={campo} name={campo} value={datos[campo] ?? ''}
            type={['precio', 'stock'].includes(campo) ? 'number' : 'text'}
            min={['precio', 'stock'].includes(campo) ? 0 : undefined}
            step={campo === 'precio' ? '0.01' : '1'}
            required={campo !== 'descripcion'} onChange={cambio} />
        </div>
      ))}

      <div className="form-group full">
        <label htmlFor="idCategoria">Categoría</label>
        <select id="idCategoria" name="idCategoria"
          value={datos.idCategoria ?? ''} onChange={cambio} required>
          <option value="">Selecciona categoría</option>
          {categorias.map((c) => (
            <option key={c.idCategoria} value={c.idCategoria}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="actions full">
        <button className="btn btn-primary" type="submit">Guardar</button>
        <button className="btn btn-secondary" type="button"
          onClick={cancelar}>Cancelar</button>
      </div>
    </form>
  )
}
