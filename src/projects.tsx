
export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Ferkams Foods",
            description: "A restaurant website showcasing Nigerian dishes and allowing customers to explore the menu."
        },
        {
            id: 2,
            title: "Personal Portfolio",
            description: "A portfolio website introducing my skills, experience and projects."
        },
        {
            id: 3,
            title: "Responsive Website",
            description: "A responsive website built with React and Bootstrap."
        }
    ]

    return (
        <section className="container py-5" id="projects">

            <div className="text-center mb-4">
                <p className="text-primary fw-bold">MY WORK</p>
                <h2 className="fw-bold">My Projects</h2>
                <p className="text-secondary">
                    Here are some of the projects I have worked on.
                </p>
            </div>

            <div className="row">
                {projects.map((project) => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <div className="card shadow-sm h-100 p-3">
                            <h5 className="fw-bold">{project.title}</h5>

                            <p className="text-secondary">
                                {project.description}
                            </p>

                            <a href="/projects" className="btn btn-outline-primary mt-auto">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
