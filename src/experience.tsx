
export default function Experience() {

    const experiences = [
        {
            id: 1,
            title: "Frontend Development",
            organization: "Personal Learning",
            period: "Present",
            description: "Learning to build responsive and interactive websites using HTML, CSS, JavaScript, React and Bootstrap."
        },
        {
            id: 2,
            title: "React Development",
            organization: "EMRANCIS ICT ACADEMY",
            period: "Present",
            description: "Practising React components, props, state management, React Router and reusable UI elements."
        },
        {
            id: 3,
            title: "Web Design",
            organization: "Practical Projects",
            period: "Present",
            description: "Building website interfaces and improving my understanding of responsive layouts and user experience."
        }
    ]

    return (
        <section className="container py-5" id="experience">

            <div className="text-center mb-5">
                <p className="text-primary fw-bold">MY JOURNEY</p>
                <h2 className="fw-bold">My Experience</h2>
                <p className="text-secondary">
                    My learning journey and practical experience in web development.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-9">

                    {experiences.map((experience) => (
                        <div className="card shadow-sm border-0 mb-4 p-4" key={experience.id}>

                            <div className="d-flex justify-content-between flex-wrap">
                                <h5 className="fw-bold">
                                    {experience.title}
                                </h5>

                                <span className="badge bg-primary">
                                    {experience.period}
                                </span>
                            </div>

                            <p className="text-primary mb-2">
                                {experience.organization}
                            </p>

                            <p className="text-secondary mb-0">
                                {experience.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}
