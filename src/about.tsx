
export default function About() {
    return (
        <section className="container py-5" id="about">

            <div className="row align-items-center">

                {/* Profile Image */}
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src="https://placehold.co/350x400"
                        alt="My profile"
                        className="img-fluid rounded-4"
                        style={{ maxWidth: "350px" }}
                    />
                </div>

                {/* About Information */}
                <div className="col-md-7">

                    <p className="text-primary fw-bold">
                        GET TO KNOW ME
                    </p>

                    <h2 className="fw-bold mb-3">
                        About Me
                    </h2>

                    <p className="text-secondary">
                        My name is Fernandez, and I am an aspiring
                        frontend developer passionate about creating
                        modern and responsive websites.
                    </p>

                    <p className="text-secondary">
                        I enjoy learning new technologies, solving
                        problems and turning creative ideas into
                        functional web experiences.
                    </p>

                    <p className="text-secondary">
                        My current learning journey focuses on HTML,
                        CSS, JavaScript, React, Bootstrap and TypeScript.
                    </p>

                    <a href="/contact" className="btn btn-primary mt-3">
                        Contact Me
                    </a>

                </div>

            </div>

        </section>
    )
}
