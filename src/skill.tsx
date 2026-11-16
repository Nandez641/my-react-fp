
export default function Skills() {

    const skills = [
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "JavaScript"},
        {id: 4, name: "React"},
        {id: 5, name: "Bootstrap"},
        {id: 6, name: "Git"}
    ]

    return (
        <>
            <section className="container py-5" id="skills">

                <div className="text-center mb-4">
                    <p className="text-primary fw-bold">WHAT I KNOW</p>
                    <h2 className="fw-bold">My Skills</h2>

                    <p className="text-secondary">
                        Technologies and tools I am learning and working with.
                    </p>
                </div>

                <div className="row">

                    {skills.map((skill) => (
                        <div className="col-6 col-md-4 col-lg-3 mb-3" key={skill.id}>
                            <div className="card shadow-sm text-center p-4 h-100">
                                <h5 className="fw-bold mb-0">
                                    {skill.name}
                                </h5>
                            </div>
                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}
