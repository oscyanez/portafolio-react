type ProjectCardProps ={
    title: string
    description: string
}

function ProjectCard({title, description}: ProjectCardProps){
    return(
        <div className="project-card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard