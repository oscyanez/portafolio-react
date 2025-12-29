function Header() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Oscar Yañez</h1>
        <h2>Ingeniero en Ejecución de la Informática</h2>

        <p>
          Enfocado en desarrollo web con React y fundamentos de ciberseguridad.
          Construyo proyectos prácticos orientados a entornos reales.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>
          <a
            href="https://github.com/oscyanez"
            target="_blank"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
