function Contact() {
  return (
    <section id="contact">
      <h3>Contacto</h3>

      <p className="contact-text">
        ¿Te interesa mi perfil o alguno de mis proyectos?  
        Puedes contactarme a través de los siguientes medios:
      </p>

      <div className="contact-links">
        <a href="mailto:oscar.yanezc@hotmail.com">
          📧 oscar.yanezc@hotmail.com
        </a>

        <a
          href="https://github.com/oscyanez"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/oscar-ya%C3%B1ez-251591b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
