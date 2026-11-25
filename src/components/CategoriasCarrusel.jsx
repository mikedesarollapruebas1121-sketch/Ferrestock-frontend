export default function CategoriasCarrusel({ categorias, seleccionada, seleccionar }) {
  return (
    <section className="card ferre-categories">
      <h2>Categorías de Ferretería</h2>

      <div className="ferre-category-list">
        <button
          className={`ferre-category ${seleccionada === null ? 'active' : ''}`}
          onClick={() => seleccionar(null)}>
          <img src="/default.jpg" alt="Todas" />
          <span>Todas</span>
        </button>

        {categorias.map((categoria) => (
          <button
            key={categoria.idCategoria}
            className={`ferre-category ${seleccionada === categoria.idCategoria ? 'active' : ''}`}
            onClick={() => seleccionar(categoria.idCategoria)}>
           <img src={`/categorias/${categoria.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.jpg`}
              alt={categoria.nombre}
              onError={(e) => {
                if (!e.currentTarget.src.endsWith('/default.jpg'))
                  e.currentTarget.src = '/default.jpg'
              }} />
            <span>{categoria.nombre}</span>
          </button>
        ))}
      </div>
    </section>
  )
}