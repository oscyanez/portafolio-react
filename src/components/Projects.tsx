import ProjectCard from "./ProjectCard"

type Project = {
    title: string
    description: string
}

const projects: Project[] = [
    {
        title: "Landing profesional",
        description: "Landing page desarrollada con react y TypeScript."
    },
    {
        title: "Gestor de tareas",
        description:"Aplicacion CRUD simple usando React."
    },
    {
        title: "Password checker",
        description: "Validador de contraseñas con reglas de seguridad."
    }
]

function Projects(){
    return(
        <section id="projects" className="section-card">
            <h3>Proyectos</h3>
            <div className="projects-grid">
            {projects.map((project, index)=>(
                <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                />
            ))}
            </div>
        </section>
    )
}

export default Projects